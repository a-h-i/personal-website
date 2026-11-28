import ExperienceItem, { ExperienceItemProps } from '@/ui/ExperienceItem';
import { ArrowUpRight } from 'lucide-react';
import { RESUME_HREF } from '@/lib/resume';

const experience: ExperienceItemProps[] = [
  {
    role: 'Senior Full Stack & Platform Engineer',
    company: 'Apadua GmbH',
    titleAlt: 'Remote · B2B SaaS, ~15 people',
    summary: `
            Build the product on a Django backend, a Next.js frontend and a FastAPI AI service, with most AI features on Dify. Delivered collaborative editing with undo/redo and full version history.
            Designed, led and built the staffing plugin: clients tender positions and vendors answer live with candidates. About 64 PRs in 10 slices, with cross-tenant Celery sync that never leaks hidden commercial fields.
            Moved Apadua's AI onto self-hosted Dify and built its knowledge-base platform: product and staffing data in Dify datasets, file ingestion, vendor search and streaming chat, with dashboards and network policies.
            Hardened authentication across invitation, activation, password reset and SSO in a 10-PR stack, and built browser-to-database tracing with Grafana Faro and OpenTelemetry.
            Lead author of the platform moving Apadua off Azure onto its own bare metal at Hetzner, defined entirely in Git: three Kubernetes clusters on five servers in its first month. Built with Ansible, Talos Linux on KVM via OpenTofu, FluxCD, Cilium with WireGuard and default-deny policies, and SOPS.
            A multi-tenant observability cluster on the Grafana LGTM stack with Alertmanager to Slack, and self-hosted autoscaling GitHub Actions runners. Every change passes 24 static checks and about 570 tests.
            Before the move, owned the Azure platform: Kubernetes through Pulumi, HA CloudNativePG, Redis, RabbitMQ and exactly-once Celery. Led security audits and ISO 27001 work.
            Review teammates' PR stacks against specs and recorded decisions; 256 merged PRs in ten months.
            `,
    tags: [
      'Django',
      'Next.js',
      'FastAPI',
      'Python',
      'TypeScript',
      'Dify',
      'Kubernetes',
      'Talos Linux',
      'Hetzner',
      'OpenTofu',
      'Ansible',
      'FluxCD',
      'Cilium',
      'SOPS',
      'Grafana LGTM',
      'Azure',
      'Pulumi',
      'CloudNativePG',
      'pgvector',
      'Celery',
      'RabbitMQ',
      'Redis',
      'OpenTelemetry',
      'Sentry',
    ],
    start: new Date('February 1, 2026'),
    end: 'current',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Mindera',
    titleAlt: 'Remote',
    summary: `
            Fixed-term contract. Implemented frontend features for an e-commerce loyalty program in AngularJS.
            `,
    tags: ['AngularJS'],
    start: new Date('July 1, 2025'),
    end: new Date('November 30, 2025'),
  },
  {
    role: 'Software Engineering Manager',
    company: 'Refound',
    titleAlt: 'Remote · Leadership coaching company, ~10 people',
    summary: `
            Lead architect and team lead on a fixed-term contract building an agentic leadership coaching platform, serving 5k active users on React, Next.js and Python, with cooperating LangGraph agents in production using MCP and custom tools.
            Led a team of 5 engineers, bootstrapped the engineering department and the processes it runs on, introduced the CI/CD pipeline, and held high test coverage with Vitest and Playwright.
            `,
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'Quart',
      'NestJS',
      'LangGraph',
      'MCP',
      'AWS',
      'Kubernetes',
      'Docker',
      'Vitest',
      'Playwright',
    ],
    start: new Date('February 1, 2025'),
    end: new Date('May 31, 2025'),
  },
  {
    role: 'Technical Lead',
    company: 'Tari Labs',
    titleAlt: 'Remote · Web3 startup, ~40 people',
    summary: `
            Spearheaded the architecture and led a team of engineers building a cross-chain Web3 data aggregation platform — a highly scalable NestJS microservices backend with PostgreSQL as the primary source of truth.
            Architected the real-time, event-driven analysis layer on Redis Streams, scaling to millions of requests and events per minute with low-latency, exactly-once task execution.
            Served complex queries with custom rankings from purpose-built Elasticsearch indexes and TimescaleDB for time-series data, and built the Python pipelines that turned cross-chain datasets into internal and stakeholder reports.
            Deployed and ran the Kubernetes cluster via FluxCD GitOps with deep observability through OpenTelemetry, Prometheus and Grafana, all at a rigorous 97% test coverage rate.
            `,
    tags: [
      'NestJS',
      'Node.js',
      'TypeScript',
      'React',
      'PostgreSQL',
      'TimescaleDB',
      'Elasticsearch',
      'Redis Streams',
      'Python',
      'Kubernetes',
      'FluxCD',
      'OpenTelemetry',
      'AWS',
      'Docker',
      'Blockchain',
    ],
    start: new Date('May 1, 2022'),
    end: new Date('February 1, 2025'),
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Independent',
    titleAlt: 'Remote',
    summary: `
            Delivered full-stack web projects on a contract basis, including continued engagements with Dreidev alongside direct freelance clients.
            Worked primarily in React and Node.js, with several projects built on Python and Django, owning delivery from requirements through deployment.
            Managed client relationships, scoping and delivery independently.
            `,
    tags: ['React', 'Node.js', 'Python', 'Django'],
    start: new Date('July 1, 2019'),
    end: new Date('May 31, 2022'),
  },
  {
    role: 'Senior Developer',
    company: 'QMedic',
    titleAlt: 'Remote · Medical IoT startup, ~20 people',
    summary: `
            QMedic designs its own wearable medical IoT devices. I engineered the internal telemetry and analytics infrastructure in Node.js, capturing and processing the data those devices generate.
            Built Python pipelines to clean, normalize and validate raw device telemetry before ingestion so downstream analytics ran on trustworthy data, and designed a scalable DynamoDB data layer to store and query it.
            Developed the full-stack React dashboards that turned complex raw telemetry into actionable insights for stakeholders.
            `,
    tags: ['Node.js', 'Python', 'DynamoDB', 'React', 'IoT'],
    start: new Date('December 1, 2018'),
    end: new Date('July 31, 2019'),
  },
  {
    role: 'Full Stack Developer',
    company: 'Dreidev',
    titleAlt: 'Remote',
    summary: `
            Delivered client projects end to end at a software house serving customers across the MENA region — campaign websites, ticketing and sales platforms, event management systems, social media products and e-learning platforms.
            Shipped 1-2 projects per month in a two-person team with a designer, owning the full backend and frontend on each build across Python/Django, Ruby on Rails or Sinatra, with AngularJS, React and Ember.js on the front end.
            Built single-page applications with integrated payment flows, translating designs into high-fidelity implementations with custom animations while holding a strict performance budget.
            My first fully remote role, where I developed the self-management and communication habits needed to deliver consistently in a distributed team.
            `,
    tags: [
      'Python',
      'Django',
      'Ruby on Rails',
      'Sinatra',
      'AngularJS',
      'React',
      'Ember.js',
      'JavaScript',
    ],
    start: new Date('January 1, 2017'),
    end: new Date('November 30, 2018'),
  },
  {
    role: 'Software Engineer',
    company: 'Paymob',
    titleAlt: 'Cairo, Egypt · Seed-stage fintech startup, ~15 people',
    summary: `
            Built Python/Flask backend services for electronic payments and mobile wallets, operating under Central Bank of Egypt regulatory compliance requirements.
            Delivered integrations with Arab African International Bank and Vodafone Cash, translating partner and regulatory specifications into working payment flows.
            Implemented asynchronous background processing with Celery and RabbitMQ using exactly-once execution guarantees and dead letter queues, so failed payment tasks were isolated for inspection and replay rather than silently dropped or double-processed.
            Applied security-first practices throughout: strict input validation, clear authorization boundaries, and disciplined handling of secrets and sensitive payment data.
            `,
    tags: ['Python', 'Flask', 'Celery', 'RabbitMQ', 'Fintech'],
    start: new Date('January 1, 2016'),
    end: new Date('December 31, 2016'),
  },
  {
    role: 'Software Engineer',
    company: 'Eventtus',
    titleAlt: 'Cairo, Egypt · Seed-stage event-tech startup, ~12 people',
    summary: `
            Event organization and tracking platform. Modernized an aging codebase from PHP to Ruby on Rails, incrementally — piecewise modernization with a gradual rollout of services rather than a rewrite.
            `,
    tags: ['PHP', 'Ruby', 'Ruby on Rails'],
    start: new Date('September 1, 2015'),
    end: new Date('January 31, 2016'),
  },
];

export default function Experience() {
  return (
    <section id='experience' className='scroll-mt-24'>
      <h2 className='text-accent text-sm font-semibold tracking-widest uppercase'>
        Experience
      </h2>
      <ol className='mt-6 space-y-6'>
        {experience.map((item) => (
          <ExperienceItem
            company={item.company}
            role={item.role}
            tags={item.tags}
            summary={item.summary}
            start={item.start}
            end={item.end}
            titleAlt={item.titleAlt}
            key={item.company}
          />
        ))}
      </ol>
      <div className='mt-4'>
        <a
          href={RESUME_HREF}
          className='text-accent-soft inline-flex items-center gap-2 text-sm hover:text-emerald-200'
        >
          View full résumé <ArrowUpRight className='h-4 w-4' />
        </a>
      </div>
    </section>
  );
}
