import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='mx-auto w-full max-w-2xl px-6 py-24 md:px-8'>
      <p className='text-accent text-sm font-semibold tracking-widest uppercase'>
        404
      </p>
      <h1 className='text-heading mt-4 text-3xl font-bold tracking-tight'>
        This page doesn’t exist
      </h1>
      <p className='text-ink mt-4'>
        The link may be old, or the address mistyped.
      </p>
      <Link
        href='/'
        className='text-accent-soft mt-8 inline-block text-sm hover:text-emerald-200'
      >
        Back to the home page
      </Link>
    </main>
  );
}
