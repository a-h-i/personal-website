import { format } from 'date-fns';
import TechTag from '@/ui/TechTag';

export interface ExperienceItemProps {
  role: string;
  company: string;
  titleAlt?: string;
  start: Date;
  end: Date | 'current';
  tags: string[];
  summary: string;
}

export default function ExperienceItem(props: ExperienceItemProps) {
  return (
    <li className='bg-surface ring-line rounded-xl p-5 ring-1'>
      <div className='flex flex-wrap items-baseline justify-between gap-3'>
        <div>
          <h3 className='text-base font-semibold'>
            {props.role} ·{' '}
            <span className='text-slate-100'>{props.company}</span>
          </h3>
          {props.titleAlt && (
            <p className='text-muted text-sm'>{props.titleAlt}</p>
          )}
        </div>
        <span className='text-muted text-xs'>
          {format(props.start, 'MMMM yyyy')} —{' '}
          {props.end === 'current' ? 'Present' : format(props.end, 'MMMM yyyy')}
        </span>
      </div>
      <p className='text-ink mt-3 text-sm leading-relaxed'>{props.summary}</p>
      <div className='mt-3 flex flex-wrap gap-2'>
        {props.tags.map((tag) => (
          <TechTag key={tag} name={tag} exact />
        ))}
      </div>
    </li>
  );
}
