import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'myportfolio',
    image: '/portfolio.png',
    type: 'Next.js, Typescript, Tailwind',
    demoUrl: '#',
  },
  {
    title: 'Digo Nomads',
    image: '/digo.png',
    type: 'React, Tailwind',
    demoUrl: '#',
  },
  {
    title: 'charges-fees-frontend',
    image: '/finance.svg',
    type: 'React, Typescript, Taiwind',
    demoUrl: '#',
  },
  {
    title: 'License_Renew_Track_System',
    image: '/LRTS.png',
    type: 'React, Python, Django',
    demoUrl: '#',
  },
    {
    title: 'QR-code App',
    image: '/qr.png',
    type: 'Javascript, CSS',
    demoUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Some of My Latest Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
