import { LinkIcon } from 'lucide-react';

export interface CertificationItemProps {
  title: string;
  link: string;
  description?: string;
}

export default function CertificationItem(props: CertificationItemProps) {
  return (
    <li className='bg-surface ring-line rounded-xl p-5 ring-1'>
      <div className='flex flex-wrap items-baseline justify-between gap-3'>
        <div>
          <h3 className='text-base font-semibold'>{props.title}</h3>
          <a
            href={props.link}
            className='text-muted hover:text-heading text-sm'
          >
            <LinkIcon className='inline-block h-4 w-4' /> Certificate
          </a>
        </div>
      </div>
      {props.description && (
        <p className='text-ink mt-3 text-sm leading-relaxed'>
          {props.description}
        </p>
      )}
    </li>
  );
}
