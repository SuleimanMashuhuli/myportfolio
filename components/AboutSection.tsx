import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-8 max-w-4xl mx-auto  min-h-[80vh]">
      <h2 className="text-4xl font-bold mb-20 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-20">
       <div className=" max-w-sm aspect-[3/4] relative shadow-lg border-4  bg-gray-200 rounded-xl overflow-hidden">
              <Image
                src="/profile-picture.jpg"
                alt="Profile"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
        <div className='text-justify'>
          <p 
          className="mb-4">I&apos;m Suleiman Ali, a full-stack developer based in Kenya. I build modern, scalable web applications using technologies like React, Next.js, Python, Django and Tailwind CSS. From clean frontends to robust backends, I enjoy creating seamless digital experiences that solve real-world problems.
          </p>
          <div>
          <h3 className="font-semibold mb-2">Soft Skills</h3>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Problem-solving</li>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Adaptability</li>
          </ul>
          <h3 className="font-semibold mb-2">What I Do</h3>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <Image src="/ui-ux.png" alt="UI/UX Design" className="w-8 h-8" width={40} height={40}/>
              <span className="text-xs mt-1">UI/UX Design</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/frontend-development.png" alt="frontend" className="w-8 h-8" width={40} height={40}/>
              <span className="text-xs mt-1">Frontend Dev</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">🌐</span>
              <span className="text-xs mt-1">Full-Stack</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
} 