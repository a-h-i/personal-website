'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import React, {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import ConsentBanner from '@/lib/analytics/ConsentBanner';

export type Consent = {
  analytics: boolean;
  ts: number;
};

const LS_KEY = 'consent.v1';

// Consent lives in localStorage, which is an external store React has to
// subscribe to rather than copy into state from an effect — pushing it in with
// setState on mount triggers a cascading render.
const listeners = new Set<() => void>();

// useSyncExternalStore compares snapshots by identity, so the parsed object has
// to be cached; parsing on every call would return a new object each time and
// loop forever.
let cache: { raw: string | null; value: Consent | null } = {
  raw: null,
  value: null,
};

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  // Also pick up consent changes made in another tab.
  window.addEventListener('storage', onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function getSnapshot(): Consent | null {
  const raw = localStorage.getItem(LS_KEY);
  if (raw !== cache.raw) {
    cache = { raw, value: raw ? JSON.parse(raw) : null };
  }
  return cache.value;
}

// undefined means "not known yet", which is distinct from null ("no consent
// stored"). Returning it for the server and hydration renders keeps the banner
// out of the prerendered HTML; React re-renders with the real snapshot once
// hydration finishes.
function getServerSnapshot(): Consent | null | undefined {
  return undefined;
}

function writeConsent(consent: Consent) {
  const raw = JSON.stringify(consent);
  localStorage.setItem(LS_KEY, raw);
  listeners.forEach((listener) => listener());
}

export default function ConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [dismissed, setDismissed] = useState(false);
  const initialized = useRef(false);

  // Open only once consent is known to be absent, so the banner never renders
  // on the server or during hydration.
  const bannerOpen = consent === null && !dismissed;

  useEffect(() => {
    if (!consent) return;

    if (!initialized.current) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
        autocapture: true,
        capture_pageview: true,
        capture_pageleave: true,
        persistence: consent.analytics ? 'localStorage+cookie' : 'memory',
      });
      initialized.current = true;
    } else if (!consent.analytics && initialized.current) {
      posthog.opt_out_capturing();
      posthog.set_config({ persistence: 'memory' });
      initialized.current = false;
    } else if (consent.analytics && initialized.current) {
      posthog.opt_in_capturing();
      initialized.current = true;
      posthog.set_config({ persistence: 'localStorage+cookie' });
    }
  }, [consent]);

  return (
    <PostHogProvider client={posthog}>
      {children}
      <ConsentBanner
        open={bannerOpen}
        onClose={() => setDismissed(true)}
        onSave={(c) => {
          writeConsent({ ...c, ts: Date.now() });
          setDismissed(true);
        }}
      />
    </PostHogProvider>
  );
}
