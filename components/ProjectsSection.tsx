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
    title: 'E-commerce',
    image: '/E-commerce.PNG',
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
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className=" mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Some of My Latest Projects</h2>
        <span className="font-normal text-gray-500"> My Art of work</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
