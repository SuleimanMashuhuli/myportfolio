import Image from 'next/image';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className=" text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
        <span className="font-normal text-gray-500"> My Tech Stack</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Programming Languages */}
        <div className="bg-white shadow-xl border rounded-lg p-4 sm:p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-4 text-base sm:text-lg">Programming Languages</h3>
          <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
            <SkillItem img="javascript.webp" label="JavaScript" />
            <SkillItem img="typescript.png" label="TypeScript" />
            <SkillItem img="python.png" label="Python" />
          </ul>
        </div>

        {/* Frontend */}
        <div className="bg-white shadow-xl border rounded-lg p-4 sm:p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-4 text-base sm:text-lg">Frontend</h3>
          <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
            <SkillItem img="react.webp" label="React.js" />
            <SkillItem img="nextjs.webp" label="Next.js" />
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-white shadow-xl border rounded-lg p-4 sm:p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-4 text-base sm:text-lg">Backend</h3>
          <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
            <SkillItem img="node-js.png" label="Node.js" />
            <SkillItem img="django.png" label="Django" />
          </ul>
        </div>

        {/* Databases */}
        <div className="bg-white shadow-xl border rounded-lg p-4 sm:p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-4 text-base sm:text-lg">Databases</h3>
          <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
            <SkillItem img="postgresql.png" label="PostgreSQL" />
            <SkillItem img="mysql.png" label="MySQL" />
          </ul>
        </div>

        {/* Cloud & DevOps */}
        <div className="bg-white shadow-xl border rounded-lg p-4 sm:p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-4 text-base sm:text-lg">Cloud & DevOps</h3>
          <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
            <SkillItem img="aws.png" label="AWS" />
            <SkillItem img="docker.png" label="Docker" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ img, label }: { img: string; label: string }) {
  return (
    <li className="flex items-center gap-3">
      <Image
        src={`/icons/${img}`}
        alt={label}
        width={24}
        height={24}
        className="rounded-sm object-contain w-5 h-5 sm:w-6 sm:h-6"
      />
      <span>{label}</span>
    </li>
  );
}
