const boxWidth = 196;
const boxHeight = 40;
const centre = 194;
const rows = { git: 64, actor: 160, cluster: 256 };

const edge = 'var(--color-muted)';
const accent = 'var(--color-accent)';
const ink = 'var(--color-heading)';
const quiet = 'var(--color-muted)';

interface PanelProps {
  id: string;
  heading: string;
  actor: string;
  pull: string;
  apply: string;
  editResult: string;
  note: string;
  loops: boolean;
}

function Box({ y, label, main }: { y: number; label: string; main?: boolean }) {
  return (
    <g>
      <rect
        x={centre - boxWidth / 2}
        y={y - boxHeight / 2}
        width={boxWidth}
        height={boxHeight}
        rx='8'
        fill={main ? accent : 'none'}
        fillOpacity={main ? 0.12 : 1}
        stroke={main ? accent : edge}
        strokeWidth={main ? 2 : 1.25}
      />
      <text
        x={centre}
        y={y + 4}
        textAnchor='middle'
        fontWeight='600'
        fill={ink}
      >
        {label}
      </text>
    </g>
  );
}

function Panel(props: PanelProps) {
  const arrow = `url(#${props.id}-arrow)`;
  const left = centre - boxWidth / 2;
  const right = centre + boxWidth / 2;
  return (
    <svg
      viewBox='0 0 396 324'
      role='img'
      aria-label={`${props.heading}. ${props.note}`}
      fontSize='13'
      className='h-auto w-full'
    >
      <defs>
        <marker
          id={`${props.id}-arrow`}
          viewBox='0 0 10 10'
          refX='9'
          refY='5'
          markerWidth='6'
          markerHeight='6'
          orient='auto-start-reverse'
        >
          <path d='M0 0L10 5L0 10z' fill={edge} />
        </marker>
      </defs>
      <text x='8' y='20' fontWeight='600' fill={ink}>
        {props.heading}
      </text>
      <g fill='none' stroke={edge} strokeWidth='1.25'>
        <path
          d={`M${centre} ${rows.git + boxHeight / 2}V${rows.actor - boxHeight / 2}`}
          markerEnd={arrow}
        />
        <path
          d={`M${centre} ${rows.actor + boxHeight / 2}V${rows.cluster - boxHeight / 2}`}
          markerEnd={arrow}
        />
        <path d={`M${left - 76} ${rows.cluster}H${left}`} markerEnd={arrow} />
        {props.loops && (
          <path
            d={`M${right} ${rows.cluster}H${right + 28}V${rows.actor}H${right}`}
            markerEnd={arrow}
          />
        )}
      </g>
      <Box y={rows.git} label='Git' />
      <Box y={rows.actor} label={props.actor} main={props.loops} />
      <Box y={rows.cluster} label='Cluster' />
      <g fontSize='12.5' fill={quiet}>
        <text x={centre - 10} y='116' textAnchor='end'>
          {props.pull}
        </text>
        <text x={centre - 10} y='212' textAnchor='end'>
          {props.apply}
        </text>
        {props.loops && (
          <text x={right + 36} y='212'>
            observes
          </text>
        )}
        <text x={left - 42} y={rows.cluster - 8} textAnchor='middle'>
          manual edit
        </text>
        <text
          x={left - 42}
          y={rows.cluster + 18}
          textAnchor='middle'
          fontWeight='600'
          fill={ink}
        >
          {props.editResult}
        </text>
        <text x='8' y='308'>
          {props.note}
        </text>
      </g>
    </svg>
  );
}

export default function ApplyVsReconcile() {
  return (
    <div>
      <p className='text-heading text-base font-semibold'>
        An apply is an event. A controller never stops comparing.
      </p>
      <div className='mx-auto mt-4 grid max-w-md gap-8 lg:max-w-none lg:grid-cols-2 lg:gap-4'>
        <Panel
          id='had'
          heading='What we had: apply on demand'
          actor='Engineer with a laptop'
          pull='when someone runs it'
          apply='pulumi up, by hand'
          editResult='stays'
          note='Between applies, nothing compares Git and the cluster.'
          loops={false}
        />
        <Panel
          id='needed'
          heading='What we needed: reconcile continuously'
          actor='In-cluster controller'
          pull='pulls, all the time'
          apply='applies the difference'
          editResult='reverted'
          note='Drift is corrected without anyone running anything.'
          loops
        />
      </div>
    </div>
  );
}
