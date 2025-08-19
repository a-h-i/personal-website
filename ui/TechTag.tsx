interface TechTagProps {
  name: string;
}

export default function TechTag(props: TechTagProps) {
  return (
    <span className='rounded-full bg-emerald-900/20 px-2.5 py-1 text-xs text-emerald-300 capitalize ring-1 ring-emerald-700/30'>
      {props.name}
    </span>
  );
}
