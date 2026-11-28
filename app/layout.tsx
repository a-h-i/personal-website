import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import React from 'react';
import ConsentProvider from '@/lib/analytics/ConsentProvider';

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
  description:
    'Senior full-stack engineer and technical lead in Porto. Real-time and AI-powered web products, high-throughput services, and the platforms underneath them.',
  applicationName: 'Ahmed H. Ismail',
  authors: [
    {
      name: 'Ahmed H. Ismail',
      url: process.env.NEXT_PUBLIC_HOST!,
    },
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST!),
  keywords: [
    'Full-stack Engineer',
    'Technical Lead',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'NestJS',
    'Python',
    'Django',
    'PostgreSQL',
    'Elasticsearch',
    'Kubernetes',
    'DevOps',
    'Platform Engineering',
    'Talos Linux',
    'FluxCD',
    'OpenTofu',
    'Pulumi',
    'Docker',
    'LangGraph',
    'Developer',
    'Porto',
    'Portugal',
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
    title: 'Ahmed H. Ismail — Senior Full-stack Engineer & Technical Lead',
    description:
      'Senior full-stack engineer and technical lead in Porto. Real-time and AI-powered web products, high-throughput services, and the platforms underneath them.',
    images: [`${process.env.NEXT_PUBLIC_HOST!}/opengraph-image`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className='bg-page text-muted min-h-screen antialiased selection:bg-teal-300 selection:text-teal-900'>
        <ConsentProvider>{children}</ConsentProvider>
      </body>
    </html>
  );
}
