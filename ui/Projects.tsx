import ProjectItem, { ProjectItemProps } from '@/ui/ProjectItem';

const projects: ProjectItemProps[] = [
  {
    title: "Askier",
    link: 'https://github.com/a-h-i/askier',
    tags: ['C++', "image processing", 'opencv', 'Qt'],
    description: `
    Application for creating ASCII art from images, videos and live camera feeds.
    `
  },
  {
    title: 'Midas Algo Trader',
    link: 'https://github.com/a-h-i/midas',
    tags: ['C++', 'financial', 'statistics', 'concurrent'],
    description: `
        Algorithmic trader using IBKR API for momentum exploit. Trades futures and high volatility stocks
        `,
  },
  {
    title: 'SPDX Parser',
    description:
      'Python parser libraries for the SPDX format. Done as part of google summer of code 2014',
    link: 'https://github.com/ah450/sdpx-tools-python',
    tags: ['Python'],
  },
  {
    title: 'Proteus',
    description: `
        Speech recognition library generator based on pocketsphinx for multiple 
        `,
    tags: ['C++'],
    link: 'https://github.com/ah450/proteus',
  },
  {
    title: 'Responder',
    link: 'https://github.com/ah450/responder',
    tags: ['Ruby', 'Sinatra'],
    description: `
        Auto deployment from github web hooks. Created before things like fluxCD were widely available.
        `,
  },
  {
    title: 'SIFT',
    link: 'https://github.com/ah450/SIFT',
    tags: ['C++', 'computer vision', 'image processing'],
    description: `
        SIFT feature detector and descriptor.
        `,
  },
  {
    title: 'Ngmedia',
    link: 'https://github.com/ah450/ngmedia',
    tags: ['Javascript', 'Angularjs'],
    description:
      'Angular directive to remove elements based on media query match',
  },
  {
    title: 'Rootkit',
    link: 'https://github.com/ah450/rootkit',
    tags: ['C++', 'kernel', 'linux'],
    description: 'Rootkit for linux kernel 3.x',
  },
  {
    title: 'Unification',
    tags: ['Python', 'Logic'],
    description: 'FOPL unification and CNF conversion using python',
    link: 'https://github.com/ah450/unification',
  },
  {
    title: 'Evaluator',
    description: `
        Java student assignment submission, evaluator and tracker for the German University in Cairo
        `,
    link: 'https://github.com/ah450/evaluator',
    tags: ['CoffeeScript', 'Javascript', 'Ruby', 'Ruby on Rails'],
  },
];

export default function Projects() {
  return (
    <section id='projects' className='scroll-mt-24'>
      <h2 className='text-sm font-semibold tracking-widest text-emerald-400 uppercase'>
        Projects
      </h2>
      <div className='mt-6 grid gap-5 md:grid-cols-2'>
        {projects.map((project) => (
          <ProjectItem
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            key={project.title}
          />
        ))}
      </div>
    </section>
  );
}
