import React from 'react';
import Nav from '@/ui/Nav';
import { getPosts } from '@/lib/writing';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='mx-auto w-full max-w-6xl px-6 py-10 md:px-8 md:py-16'>
      <div className='grid gap-10 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-16'>
        <Nav showWriting={getPosts().length > 0} />
        {children}
      </div>
    </main>
  );
}
