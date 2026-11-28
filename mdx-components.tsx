import type { MDXComponents } from 'mdx/types';
import Figure from '@/ui/writing/Figure';

const components: MDXComponents = {
  Figure,
  table: (props) => (
    <div className='overflow-x-auto'>
      <table {...props} />
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
