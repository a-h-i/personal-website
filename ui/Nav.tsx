'use client';
import Link from 'next/link';
import { Mail, FileUser } from 'lucide-react';
import Image from 'next/image';
import useScrollSpy from '@/lib/hooks/useScrollSpy.hook';
import { clsx } from 'clsx';

const navItems = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Stack',
    href: '#stack',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Certifications',
    href: '#certifications',
  },
  {
    name: 'Writing',
    href: '#writing',
  },
];

const sectionIds = navItems.map((item) => item.href.replace('#', ''));

export default function Nav() {
  const activeId = useScrollSpy(sectionIds);
  return (
    <aside className='lg:sticky lg:top-16 lg:self-start'>
      <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
        Ahmed H. Ismail
      </h1>
      <p className='mt-2 text-slate-400'>
        Senior Full‑stack Engineer • Technical Lead
      </p>
      <p className='mt-4 max-w-sm text-slate-300'>
        Over a decade owning complex features end to end — real-time and
        AI-powered web products, high-throughput services, and the Kubernetes
        platforms underneath them. Based in Porto, working internationally
        through my Portuguese LLC.
      </p>
      <nav className='mt-10 hidden lg:block'>
        <ul className='space-y-2'>
          {navItems.map((item) => {
            const isActive = activeId === item.href.replace('#', '');
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    'group flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-slate-400 hover:text-slate-200',
                    {
                      'bg-slate-900/40': isActive,
                    },
                  )}
                >
                  <span
                    className={clsx(
                      'h-px transition group-hover:w-10 group-hover:bg-emerald-400 group-focus-visible:w-10 group-focus-visible:bg-emerald-400',
                      {
                        'w-10 bg-emerald-400': isActive,
                        'w-6 bg-slate-700': !isActive,
                      },
                    )}
                  />
                  <span className='text-xs tracking-widest uppercase group-focus-visible:text-slate-200'>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className='mt-10 flex items-center gap-4 text-slate-400'>
        <a
          href='https://github.com/a-h-i'
          aria-label='GitHub'
          className='rounded-md bg-emerald-500 p-2 ring-1 ring-white/10 transition hover:text-slate-200 hover:ring-white'
        >
          <Image src='/github.svg' alt='github' width={16} height={16} />
        </a>
        <a
          href='https://stackoverflow.com/users/1345339/a-h'
          aria-label='Stack Overflow'
          className='rounded-md bg-emerald-500 p-2 ring-1 ring-white/10 transition hover:text-slate-200 hover:ring-white'
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
          className='rounded-md bg-emerald-500 p-2 ring-1 ring-white/10 transition hover:text-slate-200 hover:ring-white'
        >
          <Image src='/linkedin.png' alt='linkedin' width={16} height={16} />
        </a>
        <a
          href='mailto:ahm3d.hisham@gmail.com'
          aria-label='Email'
          className='rounded-md bg-emerald-500 p-2 ring-1 ring-white/10 transition hover:text-slate-200 hover:ring-white'
        >
          <Mail color='black' className='h-4 w-4' />
        </a>
        <a
          href='https://medium.com/@ahm3d.hisham'
          aria-label='Medium'
          className='rounded-md bg-emerald-500 p-2 ring-1 ring-white/10 transition hover:text-slate-200 hover:ring-white'
        >
          <Image alt='medium' src='/medium.svg' width={16} height={16} />
        </a>
        <a
          href='Ahmed_Ismail_resume.pdf'
          aria-label='Resume'
          className='rounded-md bg-emerald-500 p-2 ring-1 ring-white/10 transition hover:text-slate-200 hover:ring-white'
        >
          <FileUser color='black' className='h-4 w-4' />
        </a>
      </div>
    </aside>
  );
}
