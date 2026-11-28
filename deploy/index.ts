import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

const cfg = new pulumi.Config();
const githubToken = cfg.requireSecret('githubToken');
const domain = cfg.require('domain');
const posthogConfig = new pulumi.Config('posthog');
const posthogKey = posthogConfig.requireSecret('key');
const posthogHost = posthogConfig.require('host');

// Not referenced: kept as an implicit assertion that the hosted zone exists
// before Amplify is pointed at the domain. Underscore-prefixed to match the
// eslint varsIgnorePattern.
const _zone = aws.route53.getZone({ name: domain, privateZone: false });

const acct = pulumi.output(aws.getCallerIdentity({})).accountId;
const region = pulumi.output(aws.getRegion({})).region;

// Only Amplify apps in this account and region may assume the role.
const serviceRoleTrust = pulumi.all([acct, region]).apply(([a, r]) =>
  JSON.stringify({
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Principal: {
          Service: ['amplify.amazonaws.com', `amplify.${r}.amazonaws.com`],
        },
        Action: 'sts:AssumeRole',
        Condition: {
          ArnLike: { 'aws:SourceArn': `arn:aws:amplify:${r}:${a}:apps/*` },
          StringEquals: { 'aws:SourceAccount': a },
        },
      },
    ],
  }),
);

// Service role for Amplify
const amplifyRole = new aws.iam.Role('amplifyServiceRole', {
  assumeRolePolicy: serviceRoleTrust,
});

const logsPolicyDoc = pulumi.all([acct, region]).apply(([a, r]) =>
  JSON.stringify({
    Version: '2012-10-17',
    Statement: [
      {
        Sid: 'WriteToAmplifyLogGroups',
        Effect: 'Allow',
        Action: [
          'logs:CreateLogStream',
          'logs:PutLogEvents',
          'logs:DescribeLogStreams',
        ],
        Resource: `arn:aws:logs:${r}:${a}:log-group:/aws/amplify/*:log-stream:*`,
      },
      {
        Sid: 'CreateAndDiscoverGroups',
        Effect: 'Allow',
        Action: ['logs:CreateLogGroup', 'logs:DescribeLogGroups'],
        Resource: '*',
      },
      {
        Sid: 'OptionalRetention',
        Effect: 'Allow',
        Action: 'logs:PutRetentionPolicy',
        Resource: `arn:aws:logs:${r}:${a}:log-group:/aws/amplify/*`,
      },
    ],
  }),
);
const amplifyServiceLogsPolicy = new aws.iam.Policy('amplifyLogs', {
  description:
    'Allow Amplify service role to create/write CloudWatch Logs under /aws/amplify/*',
  policy: logsPolicyDoc,
});

const amplifyServiceLogsAttach = new aws.iam.RolePolicyAttachment(
  'amplifyServiceLogsAttach',
  {
    role: amplifyRole.name,
    policyArn: amplifyServiceLogsPolicy.arn,
  },
  {
    dependsOn: [amplifyRole],
  },
);

const app = new aws.amplify.App(
  'personal-website',
  {
    name: 'personal-website',
    repository: 'https://github.com/a-h-i/personal-website',
    accessToken: githubToken,
    platform: 'WEB_COMPUTE',
    environmentVariables: {
      NEXT_PUBLIC_HOST: `https://${domain}`,
      NEXT_PUBLIC_POSTHOG_KEY: posthogKey,
      NEXT_PUBLIC_POSTHOG_HOST: posthogHost,
    },
    customRules: [
      {
        source: `https://www.${domain}`,
        target: `https://${domain}`,
        status: '301',
      },
    ],
    iamServiceRoleArn: amplifyRole.arn,
  },
  {
    dependsOn: [amplifyServiceLogsAttach],
  },
);
const main = new aws.amplify.Branch('main', {
  appId: app.id,
  branchName: 'main',
  stage: 'PRODUCTION',
  enableAutoBuild: true,
});

const _domainAssoc = new aws.amplify.DomainAssociation(
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
  {
    dependsOn: [main],
  },
);
