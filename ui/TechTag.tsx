import { clsx } from 'clsx';

interface TechTagProps {
  name: string;
  /**
   * Render the name exactly as written instead of title-casing it.
   * Needed for stack entries whose casing is part of the name — pgvector, nginx.
   */
  exact?: boolean;
}

export default function TechTag(props: TechTagProps) {
  return (
    <span
      className={clsx(
        'text-accent-soft rounded-full bg-emerald-900/20 px-2.5 py-1 text-xs ring-1 ring-emerald-700/30',
        { capitalize: !props.exact },
      )}
    >
      {props.name}
    </span>
  );
}
