'use client';
import Link from 'next/link';
import { Mail, FileUser } from 'lucide-react';
import Image from 'next/image';
import useScrollSpy from '@/lib/hooks/useScrollSpy.hook';
import { clsx } from 'clsx';
import { RESUME_HREF } from '@/lib/resume';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Writing', href: '#writing' },
  { name: 'Stack', href: '#stack' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
];

const sectionIds = navItems.map((item) => item.href.replace('#', ''));

export default function Nav({ showWriting }: { showWriting: boolean }) {
  const activeId = useScrollSpy(sectionIds);
  const items = navItems.filter(
    (item) => showWriting || item.name !== 'Writing',
  );
  return (
    <aside className='lg:sticky lg:top-16 lg:self-start'>
      <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
        Ahmed H. Ismail
      </h1>
      <p className='text-muted mt-2'>Senior Full‑Stack & Platform Engineer</p>
      <p className='text-ink mt-4 max-w-sm'>
        Over a decade owning complex features end to end — real-time and
        AI-powered web products, high-throughput services, and the Kubernetes
        platforms underneath them. Based in Porto, working remotely across EU
        and US time zones.
      </p>
      <nav className='mt-10 hidden lg:block'>
        <ul className='space-y-2'>
          {items.map((item) => {
            const isActive = activeId === item.href.replace('#', '');
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    'group text-muted hover:text-heading flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium',
                    {
                      'bg-surface': isActive,
                    },
                  )}
                >
                  <span
                    className={clsx(
                      'group-hover:bg-accent group-focus-visible:bg-accent h-px transition group-hover:w-10 group-focus-visible:w-10',
                      {
                        'bg-accent w-10': isActive,
                        'bg-rule w-6': !isActive,
                      },
                    )}
                  />
                  <span className='group-focus-visible:text-heading text-xs tracking-widest uppercase'>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className='text-muted mt-10 flex items-center gap-4'>
        <a
          href='https://github.com/a-h-i'
          aria-label='GitHub'
          className='bg-accent-strong ring-line hover:text-heading rounded-md p-2 ring-1 transition hover:ring-white'
        >
          <Image src='/github.svg' alt='github' width={16} height={16} />
        </a>
        <a
          href='https://stackoverflow.com/users/1345339/a-h'
          aria-label='Stack Overflow'
          className='bg-accent-strong ring-line hover:text-heading rounded-md p-2 ring-1 transition hover:ring-white'
        >
          <Image
            src='/stackoverflow.svg'
            alt='stack overflow'
            width={16}
            height={16}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/ah450/'
          aria-label='LinkedIn'
          className='bg-accent-strong ring-line hover:text-heading rounded-md p-2 ring-1 transition hover:ring-white'
        >
          <Image src='/linkedin.png' alt='linkedin' width={16} height={16} />
        </a>
        <a
          href='mailto:ahm3d.hisham@gmail.com'
          aria-label='Email'
          className='bg-accent-strong ring-line hover:text-heading rounded-md p-2 ring-1 transition hover:ring-white'
        >
          <Mail color='black' className='h-4 w-4' />
        </a>
        <a
          href='https://medium.com/@ahm3d.hisham'
          aria-label='Medium'
          className='bg-accent-strong ring-line hover:text-heading rounded-md p-2 ring-1 transition hover:ring-white'
        >
          <Image alt='medium' src='/medium.svg' width={16} height={16} />
        </a>
        <a
          href={RESUME_HREF}
          aria-label='Resume'
          className='bg-accent-strong ring-line hover:text-heading rounded-md p-2 ring-1 transition hover:ring-white'
        >
          <FileUser color='black' className='h-4 w-4' />
        </a>
      </div>
    </aside>
  );
}
