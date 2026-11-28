import TechTag from '@/ui/TechTag';

interface StackGroup {
  label: string;
  items: string[];
}

const stack: StackGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C++', 'C', 'Ruby'],
  },
  {
    label: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Angular',
      'Ember.js',
      'Tailwind',
      'WebSockets',
      'SSE',
    ],
  },
  {
    label: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'Django',
      'FastAPI',
      'Flask',
      'Quart',
      'Ruby on Rails',
      'Celery',
    ],
  },
  {
    label: 'Data',
    items: [
      'PostgreSQL',
      'CloudNativePG',
      'TimescaleDB',
      'pgvector',
      'Elasticsearch',
      'Redis',
      'MongoDB',
      'DynamoDB',
      'Cassandra',
    ],
  },
  {
    label: 'Messaging',
    items: ['Kafka', 'RabbitMQ', 'Redis Streams'],
  },
  {
    label: 'Infrastructure',
    items: [
      'Docker',
      'Kubernetes',
      'Talos Linux',
      'AWS',
      'Azure',
      'GCP',
      'Hetzner',
      'Pulumi',
      'Terraform',
      'OpenTofu',
      'Ansible',
      'FluxCD',
      'Cilium',
      'Envoy Gateway',
      'SOPS',
      'nginx',
      'GitHub Actions',
    ],
  },
  {
    label: 'Observability',
    items: [
      'OpenTelemetry',
      'Prometheus',
      'Grafana',
      'Mimir',
      'Loki',
      'Tempo',
      'Alloy',
      'Jaeger',
      'Sentry',
      'PostHog',
    ],
  },
  {
    label: 'Testing',
    items: ['Vitest', 'Jest', 'Playwright'],
  },
  {
    label: 'AI',
    items: ['Dify', 'LangChain', 'LangGraph'],
  },
];

export default function Stack() {
  return (
    <section id='stack' className='scroll-mt-24'>
      <h2 className='text-accent text-sm font-semibold tracking-widest uppercase'>
        Core Stack
      </h2>
      <dl className='bg-surface ring-line mt-6 divide-y divide-white/5 rounded-xl ring-1'>
        {stack.map((group) => (
          <div
            key={group.label}
            className='grid gap-2 p-5 sm:grid-cols-[8rem_1fr] sm:gap-4'
          >
            <dt className='text-muted text-xs tracking-widest uppercase sm:pt-1'>
              {group.label}
            </dt>
            <dd className='flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <TechTag key={item} name={item} exact />
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
