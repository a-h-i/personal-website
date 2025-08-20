'use client';

import { useState } from 'react';

interface ConesnetBannerProps {
  open: boolean;
  onClose: () => void;
  onSave: (c: { analytics: boolean }) => void;
}

export default function ConsentBanner(props: ConesnetBannerProps) {
  if (!props.open) return null;

  return (
    <dialog
      open={props.open} aria-modal='true' aria-labelledby='consent-title'
      className="fixed bottom-2 z-50 w-[80dvw] mx-auto rounded-2xl border p-4 shadow-xl shadow-slate-800 md:p-5 bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900 "

    >
      <div>
        <div className='flex items-start gap-4'>
          <div className='flex-1'>
            <h2
              id='consent-title'
              className='text-base font-semibold'
            >
              Privacy & cookies
            </h2>
            <p className='mt-1 text-sm text-slate-300'>
              We use analytics (PostHog) to understand visits, referrers, and
              interaction.
            </p>
          </div>
        </div>
        <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
          <div className='flex gap-2'>
            <button
              className='rounded-lg ring-1 ring-white/10 px-4 py-2 text-sm hover:underline cursor-pointer'
              onClick={() => props.onSave({ analytics: false })}
            >
              Reject
            </button>
            <button
              className='rounded-lg ring-1 ring-white/10 px-4 py-2 text-sm hover:underline cursor-pointer'
              onClick={() => props.onSave({ analytics: true })}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
