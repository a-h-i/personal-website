import { ArrowUpRight } from 'lucide-react';
import TechTag from '@/ui/TechTag';

export interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectItem(props: ProjectItemProps) {
  return (
    <a
      href={props.link}
      className='group rounded-xl bg-slate-900/40 p-5 ring-1 ring-white/10 transition hover:ring-white/20'
    >
      <div className='flex items-center justify-between'>
        <h3 className='text-base font-semibold group-hover:underline'>
          {props.title}
        </h3>
        <ArrowUpRight className='h-4 w-4 text-slate-400' />
      </div>
      <p className='mt-2 text-sm text-slate-300'>{props.description}</p>
      <div className='mt-3 flex flex-wrap gap-2'>
        {props.tags.map((tag) => (
          <TechTag key={tag} name={tag} />
        ))}
      </div>
    </a>
  );
}
