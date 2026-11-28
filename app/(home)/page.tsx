import About from '@/ui/About';
import Stack from '@/ui/Stack';
import Experience from '@/ui/Experience';
import Certification from '@/ui/Certification';
import Projects from '@/ui/Projects';
import Writing from '@/ui/Writing';
import type { Metadata } from 'next';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <section className='space-y-24'>
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Certification />
      <Writing />
    </section>
  );
}
