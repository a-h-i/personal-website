import ExperienceItem, { ExperienceItemProps } from '@/ui/ExperienceItem';
import { ArrowUpRight } from 'lucide-react';

const experience: ExperienceItemProps[] = [
  {
    role: 'Software Engineering Manager',
    titleAlt: 'Remote',
    company: 'Refound',
    summary: `
            Lead architect and team lead on an agentic leadership coaching platform.
            Multi-user conversations, 5k active users. Lead a team of 5 engineers.
            Introduced a robust CI/CD pipeline and automated testing.
            `,
    tags: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'Quart',
      'NestJS',
      'AWS',
      'Playwright',
      'langgraph',
      'vitest',
      'Docker',
      'Kubernetes',
    ],
    start: new Date('February 1, 2025'),
    end: new Date('May 31, 2025'),
  },
  {
    role: 'Technical Lead',
    company: 'Tari Labs',
    titleAlt: 'Full Stack Developer & Software Architect',
    summary: `
            Lead architect and team lead on cross chain web3 data aggregation and analysis platform along with providing developer tooling and infrastructure for the rest of the company.
            We were proud to boast a 97% code coverage rate while scaling to millions of requests and events per hour.
            The system is designed as an event driven system analysing data in realtime across multiple chains.
            With subsecond response times, we were able to provide realtime insights to users and developers.
            `,
    tags: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Kubernetes',
      'AWS',
      'ElasticSearch',
      'Redis',
      'Nest.js',
      'Blockchain',
      'Timescaledb',
      'Docker',
    ],
    start: new Date('May 1, 2022'),
    end: new Date('February 1, 2025'),
  },
  {
    role: 'Senior Developer',
    company: 'QMedic',
    titleAlt: 'Remote',
    start: new Date('December 1, 2018'),
    end: new Date('July 31, 2022'),
    summary: `
        QMedic designs its own wearable medical devices, I worked as a full stack developer building internal telemetry and analytics infrastructure for the company.
        Collecting analytics from IoT devices and visualizing it for stakeholders.
        `,
    tags: ['Google App Scripts', 'Typescript', 'Node.js'],
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Dreidev',
    titleAlt: 'Remote',
    start: new Date('January 1, 2017'),
    end: new Date('November 30, 2018'),
    summary: `
        Full stack developer for a software house. Continuously delivered webapps with a focus on usability, seamless and intuitive UX. 
        First fully remote role, allowed me to attain the experience and skills to self manage and continuously deliver value in a remote workplace.
        `,
    tags: [
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'AWS',
      'Django',
      'Ruby on Rails',
      'Angularjs',
      'React',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Paymob',
    start: new Date('July 1, 2016'),
    end: new Date('December 30, 2016'),
    summary: `
        Gained experience working in the fintech industry gained ability to understand and translate regulatory requirements to project specifications. 
Worked on highly scalable backends for mobile wallets.
        `,
    tags: ['Python', 'Flask', 'Django'],
  },
  {
    role: 'Software Engineer',
    company: 'Eventtus',
    start: new Date('September 1, 2015'),
    end: new Date('January 31, 2016'),
    summary: `
        Modernized an aging codebase from PHP to Ruby on Rails.
        Continuous delivery and partial rollout
        `,
    tags: ['PHP', 'Ruby on Rails', 'Laravel', 'Ruby'],
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
          href='Ahmed_Ismail_resume.pdf'
          className='inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200'
        >
          View full résumé <ArrowUpRight className='h-4 w-4' />
        </a>
      </div>
    </section>
  );
}
