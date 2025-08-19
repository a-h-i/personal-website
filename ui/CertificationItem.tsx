import { LinkIcon } from 'lucide-react';

export interface CertificationItemProps {
  title: string;
  link: string;
  description?: string;
}

export default function CertificationItem(props: CertificationItemProps) {
  return (
    <li className='rounded-xl bg-slate-900/40 p-5 ring-1 ring-white/10'>
      <div className='flex flex-wrap items-baseline justify-between gap-3'>
        <div>
          <h3 className='text-base font-semibold'>{props.title}</h3>
          <a
            href={props.link}
            className='text-sm text-slate-400 hover:text-slate-200'
          >
            <LinkIcon className='inline-block h-4 w-4' /> Certificate
          </a>
        </div>
        {props.description && (
          <p className='mt-3 text-sm leading-relaxed text-slate-300'>
            {props.description}
          </p>
        )}
      </div>
    </li>
  );
}
