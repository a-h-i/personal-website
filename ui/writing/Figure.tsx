import React from 'react';
import { clsx } from 'clsx';

interface FigureProps {
  caption: string;
  /** Lets the figure extend past the reading column on large screens. */
  wide?: boolean;
  children: React.ReactNode;
}

export default function Figure({ caption, wide, children }: FigureProps) {
  return (
    <figure
      className={clsx(
        'not-prose bg-surface ring-line -mx-3 my-10 rounded-xl p-3 ring-1 sm:mx-0 sm:p-6',
        { 'lg:-mx-28': wide },
      )}
    >
      {children}
      <figcaption className='text-muted mt-4 text-center text-sm'>
        {caption}
      </figcaption>
    </figure>
  );
}
