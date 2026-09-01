'use client';
import { useEffect, useState } from 'react';
/**
 * Used to highlight the active section in the navigation.
 *
 * Activation is positional rather than area-based: the default rootMargin
 * collapses the observation root to a thin band across the upper middle of the
 * viewport, and whichever section crosses that band is active. An area ratio
 * would never be reached by sections taller than the viewport, which is most of
 * them on this page.
 * @param ids
 * @param rootMargin
 */
export default function useScrollSpy(
  ids: string[],
  rootMargin = '-40% 0px -55% 0px',
) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] || null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const crossing = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        // Nothing in the band mid-scroll: keep the last active section rather
        // than clearing the highlight.
        if (crossing.length > 0) {
          setActiveId(crossing[crossing.length - 1].target.id);
        }
      },
      { rootMargin, threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids, rootMargin]);
  return activeId || ids[0] || null;
}
