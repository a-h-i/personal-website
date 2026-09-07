import ExperienceItem, { ExperienceItemProps } from '@/ui/ExperienceItem';
import { ArrowUpRight } from 'lucide-react';
import { RESUME_HREF } from '@/lib/resume';

const experience: ExperienceItemProps[] = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Apadua GmbH',
    titleAlt: 'Remote',
    summary: `
            Building a Django backend and Next.js frontend alongside a FastAPI microservice, with Dify orchestrating AI workflows across the product.
            Delivered collaborative editing so several people can work on the same project at once, with undo/redo and full version history, and own the AI knowledge base behind it — vector database management and the ingestion pipelines that feed it.
            I own the Azure platform end to end: Kubernetes managed through Pulumi IaC, a highly available CloudNativePG cluster, persistent Redis and RabbitMQ, and Celery processing with exactly-once semantics, dead letter queues and Redis-based distributed locking.
            Established the observability stack, drove PostgreSQL query optimization off the back of it, wrote the DevOps runbooks, and led security audits and ISO 27001 compliance work.
            `,
    tags: [
      'Django',
      'Next.js',
      'FastAPI',
      'Python',
      'TypeScript',
      'Dify',
      'Azure',
      'Kubernetes',
      'Pulumi',
      'CloudNativePG',
      'pgvector',
      'Celery',
      'RabbitMQ',
      'Redis',
      'Grafana',
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
    titleAlt: 'Remote',
    summary: `
            Lead architect and team lead on a fixed-term contract building an agentic leadership coaching platform, serving 5k active users on React, Next.js and Python.
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
    titleAlt: 'Remote',
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
            Managed client relationships, scoping and delivery independently — the groundwork for the B2B contracting practice I run today through my Portuguese LLC.
            `,
    tags: ['React', 'Node.js', 'Python', 'Django'],
    start: new Date('July 1, 2019'),
    end: new Date('May 31, 2022'),
  },
  {
    role: 'Senior Developer',
    company: 'QMedic',
    titleAlt: 'Remote',
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
    titleAlt: 'Cairo, Egypt',
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
    titleAlt: 'Cairo, Egypt',
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
      <h2 className='text-sm font-semibold tracking-widest text-emerald-400 uppercase'>
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
          className='inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200'
        >
          View full résumé <ArrowUpRight className='h-4 w-4' />
        </a>
      </div>
    </section>
  );
}
