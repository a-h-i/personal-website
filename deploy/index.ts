import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

const cfg = new pulumi.Config();
const githubToken = cfg.requireSecret('githubToken');
const domain = cfg.require('domain');
const posthogConfig = new pulumi.Config('posthog');
const posthogKey = posthogConfig.requireSecret('key');
const posthogHost = posthogConfig.require('host');
const awsConfig = new pulumi.Config('aws');
const awsRegion = awsConfig.require('region');

const zone = aws.route53.getZone({ name: domain, privateZone: false });

const app = new aws.amplify.App('personal-website', {
  name: 'personal-website',
  repository: 'https://github.com/a-h-i/personal-website',
  accessToken: githubToken,
  platform: 'WEB_COMPUTE',
  buildSpec: `version: 1
    frontend:
        phases:
            preBuild:
                commands:
                - npm -g install pnpm
                - pnpm install
            build:
                commands:
                    - pnpm build
        artifacts:
            baseDirectory: .next
            files:
                - '**/*'
        cache:
            paths:
                - node_modules/**/*
                
    `,
  environmentVariables: {
    NEXT_PUBLIC_HOST: `https://${domain}`,
    NEXT_PUBLIC_POSTHOG_KEY: posthogKey,
    NEXT_PUBLIC_POSTHOG_HOST: posthogHost,
  },
  region: awsRegion,
});
const main = new aws.amplify.Branch("main", {
  appId: app.id,
  branchName: 'main',
  stage: "PRODUCTION",
  enableAutoBuild: true,
});

const domainAssoc = new aws.amplify.DomainAssociation(
  'personal-website-domain',
  {
    appId: app.id,
    domainName: domain,
    certificateSettings: { type: 'AMPLIFY_MANAGED' },
    subDomains: [
      { branchName: main.branchName, prefix: 'www' },
      { branchName: main.branchName, prefix: '' },
    ],
  },
);
