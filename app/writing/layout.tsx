import React from 'react';
import Link from 'next/link';
import { RESUME_HREF } from '@/lib/resume';

export default function WritingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='mx-auto w-full max-w-2xl px-6 py-8 md:py-12'>
      <header className='flex items-baseline justify-between gap-4'>
        <Link
          href='/'
          className='text-heading hover:text-accent-soft font-semibold tracking-tight'
        >
          Ahmed H. Ismail
        </Link>
        <nav className='flex gap-5 text-sm'>
          <Link href='/writing' className='hover:text-heading'>
            Writing
          </Link>
          <a href={RESUME_HREF} className='hover:text-heading'>
            Résumé
          </a>
        </nav>
      </header>
      <main className='mt-12 md:mt-16'>{children}</main>
      <footer className='border-line mt-20 flex justify-between gap-4 border-t pt-6 text-sm'>
        <Link href='/' className='hover:text-heading'>
          ahm3dhisham.com
        </Link>
        <a href='/writing/feed.xml' className='hover:text-heading'>
          RSS
        </a>
      </footer>
    </div>
  );
}
