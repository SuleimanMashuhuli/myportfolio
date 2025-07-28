import Image from 'next/image';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold mb-8">Skills</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Programming Languages */}
        <div className="bg-white shadow-xl border rounded-lg p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-4 text-lg">Programming Languages</h3>
          <ul className="text-gray-700 space-y-2">
            <SkillItem img="javascript.webp" label="JavaScript" />
            <SkillItem img="typescript.png" label="TypeScript" />
            <SkillItem img="python.png" label="Python" />
          </ul>
        </div>

        {/* Frontend */}
        <div className="bg-white shadow-xl border rounded-lg p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-4 text-lg">Frontend</h3>
          <ul className="text-gray-700 space-y-2">
            <SkillItem img="react.webp" label="React.js" />
            <SkillItem img="nextjs.webp" label="Next.js" />
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-white shadow-xl border rounded-lg p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-4 text-lg">Backend</h3>
          <ul className="text-gray-700 space-y-2">
            <SkillItem img="node-js.png" label="Node.js" />
            <SkillItem img="django.png" label="Django" />
          </ul>
        </div>

        {/* Databases */}
        <div className="bg-white shadow-xl border rounded-lg p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-4 text-lg">Databases</h3>
          <ul className="text-gray-700 space-y-2">
            <SkillItem img="postgresql.png" label="PostgreSQL" />
            <SkillItem img="mysql.png" label="MySQL" />
          </ul>
        </div>

        {/* Cloud & DevOps */}
        <div className="bg-white shadow-xl border rounded-lg p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-4 text-lg">Cloud & DevOps</h3>
          <ul className="text-gray-700 space-y-2">
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
        className="rounded-sm object-contain"
      />
      <span>{label}</span>
    </li>
  );
}
