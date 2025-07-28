import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  image: string;
  type: string;
  demoUrl: string;
}

export default function ProjectCard({ title, image, type, demoUrl }: ProjectProps) {
  return (
    <div className="relative cursor-pointer hover:scale-105 mx-auto transition-all duration-500 flex items-center justify-center h-70 w-full shadow-xl shadow-gray-400 rounded-xl px-2 py-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#00b4db]/50 ease-in-out">
      {/* Project Image */}
      <Image
        src={image}
        alt={title}
        width={550}
        height={300}
        className="rounded-xl group-hover:opacity-10"
      />

      {/* Hover Overlay */}
      <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="md:text-2xl text-xl text-white tracking-wider">{title}</h3>
        <p className="py-2 text-white">{type}</p>
        {demoUrl == '#' && (
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <button className="mt-2 px-6 py-2 rounded-lg bg-white text-gray-700 font-bold text-lg hover:bg-gray-200 transition">
              Demo
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
