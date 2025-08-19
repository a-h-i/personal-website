import CertificationItem, {
  CertificationItemProps,
} from '@/ui/CertificationItem';

const certs: CertificationItemProps[] = [
  {
    description: `
        Comprehensive specialization for project management and how it’s done at google.
        Not only qualifies me to work as a project manager but helps make me a much better technical lead.
        `,
    title: 'Google Project Management Certification',
    link: 'https://coursera.org/share/a57f0a8091446714241be607c548701d',
  },
  {
    title: 'Postgresql for everyone certification',
    description: `
        Postgresql techniques and inner workings.
        Most of the time just using the ORM for everything doesn’t cut it.
        `,
    link: 'https://coursera.org/share/dc3ed42f48dbfb3a7ad0f375fd82fc01',
  },
  {
    link: 'https://coursera.org/share/c76ba6e13718a31c7262fed9601508d1',
    title: 'AWS Fundamentals Certification',
  },
];

export default function Certification() {
  return (
    <section id='certifications' className='scroll-mt-24'>
      <h2 className='text-sm font-semibold tracking-widest text-emerald-400 uppercase'>
        Certifications
      </h2>
      <ul className='mt-6 space-y-6'>
        {certs.map((item) => (
          <CertificationItem
            title={item.title}
            link={item.link}
            description={item.description}
            key={item.title}
          />
        ))}
      </ul>
    </section>
  );
}
