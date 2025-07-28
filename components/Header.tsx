import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-8 border-b bg-white sticky top-0 z-50">
      <div className="font-bold text-lg">S.A</div>
      <nav className="flex items-center gap-6">
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="/SULEIMAN-MASHUHULI-RESUME.pdf" download className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Download CV</a>
        {/* Social icons placeholder */}
        <div className="flex gap-2 ml-4">
   <a href="https://www.linkedin.com/in/suleiman-mashuhuli/" aria-label="LinkedIn" className="hover:opacity-80 transition">
            <Image src="/icons/linkedin.png" alt="LinkedIn" width={32} height={32} />
          </a>
          <a href="https://github.com/SuleimanMashuhuli" aria-label="GitHub" className="hover:opacity-80 transition">
            <Image src="/icons/github.png" alt="GitHub" width={32} height={32} />
          </a>
        </div>
      </nav>
    </header>
  );
} 