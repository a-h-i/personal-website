import About from '@/ui/About';
import Experience from '@/ui/Experience';
import Certification from '@/ui/Certification';
import Projects from '@/ui/Projects';
import Writing from '@/ui/Writing';

export default function Home() {
  return (
    <section className='space-y-24'>
      <About />
      <Experience />
      <Projects />
      <Certification />
      <Writing />
    </section>
  );
}
