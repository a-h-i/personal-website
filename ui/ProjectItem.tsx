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
      className='group bg-surface ring-line rounded-xl p-5 ring-1 transition hover:ring-white/20'
    >
      <div className='flex items-center justify-between'>
        <h3 className='text-base font-semibold group-hover:underline'>
          {props.title}
        </h3>
        <ArrowUpRight className='text-muted h-4 w-4' />
      </div>
      <p className='text-ink mt-2 text-sm'>{props.description}</p>
      <div className='mt-3 flex flex-wrap gap-2'>
        {props.tags.map((tag) => (
          <TechTag key={tag} name={tag} exact />
        ))}
      </div>
    </a>
  );
}
