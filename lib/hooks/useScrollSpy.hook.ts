'use client';
import { useEffect, useState } from 'react';
/**
 * Used to highlight the active section in the navigation
 * @param ids
 * @param rootMargin
 */
export default function useScrollSpy(
  ids: string[],
  rootMargin = '25% 0px -35% 0px',
) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] || null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin, threshold: 0.8 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids, rootMargin]);
  return activeId || ids[0] || null;
}
