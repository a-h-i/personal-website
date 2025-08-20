import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/ui/Nav';
import React from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ahmed H. Ismail',
  description: 'Full Stack Developer, building fast, scalable and reliable systems',
  applicationName: 'Ahmed H. Ismail',
  authors: [
    {
      name: 'Ahmed H. Ismail',
      url: process.env.NEXT_PUBLIC_HOST!,
    }
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST!),
  keywords: [
    "Next.js",
    "Typescript",
    "Kubernetes",
    "Pulumi",
    "Docker",
    "React",
    "Developer",
    "Freelancer"
  ],
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    noimageindex: false,
    nocache: false,
  },
  openGraph: {
    type: 'website',
    url: process.env.NEXT_PUBLIC_HOST!,
    title: 'Ahmed H. Ismail - Senior Software Engineer',
    description: 'Full Stack Developer, building fast, scalable and reliable systems',
    images: [
      `${process.env.NEXT_PUBLIC_HOST!}/opengraph-image`
    ]
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='min-h-screen bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900'>
          <main className='mx-auto w-full max-w-6xl px-6 py-10 md:px-8 md:py-16'>
            <div className='grid gap-10 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-16'>
              <Nav />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
