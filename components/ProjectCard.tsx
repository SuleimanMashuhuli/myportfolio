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
    <div className="relative cursor-pointer hover:scale-105 mx-auto transition-all duration-500 flex items-center justify-center h-48 sm:h-56 md:h-64 lg:h-70 w-full shadow-xl shadow-gray-400 rounded-xl px-2 py-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#00b4db]/50 ease-in-out overflow-hidden">
      {/* Project Image */}
      <Image
        src={image}
        alt={title}
        width={550}
        height={300}
        className="rounded-xl group-hover:opacity-10 w-full h-full object-cover"
      />

      {/* Hover Overlay */}
      <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-4">
        <h3 className="text-lg sm:text-xl md:text-2xl text-white tracking-wider font-semibold">{title}</h3>
        <p className="py-2 text-white text-sm sm:text-base">{type}</p>
        {demoUrl == '#' && (
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <button className="mt-2 px-4 sm:px-6 py-2 rounded-lg bg-white text-gray-700 font-bold text-sm sm:text-lg hover:bg-gray-200 transition">
              Demo
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
