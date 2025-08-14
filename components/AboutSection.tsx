import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto min-h-[80vh]">
      <div className="mb-12 sm:mb-16 md:mb-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
        <span className="font-normal text-gray-500"> My Intro</span>
      </div>
      
     
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
        {/* Profile Image */}
        <div className="max-w-xs sm:max-w-sm mx-auto lg:mx-0 aspect-[3/4] relative shadow-lg border-4 bg-gray-200 rounded-xl overflow-hidden">
          <Image
            src="/me.jpg"
            alt="Profile"
            fill
            style={{ objectFit: 'cover' }}
            className="object-cover"
          />
        </div>
        
        {/* About Content */}
        <div className='text-left sm:text-justify space-y-4 sm:space-y-6'>
          <p className="text-sm sm:text-base leading-relaxed">
            I&apos;m Suleiman Ali, a full-stack developer based in Kenya. 
            I build modern, scalable web applications using technologies like React, Next.js, Python, Django and Tailwind CSS. 
            From clean frontends to robust backends, I enjoy creating seamless digital experiences that solve real-world problems.
            Apart from coding, I also balance in religion, watching and driving and I stay focused through fitness and the disciplined practice of football.
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Soft Skills</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base space-y-1">
                <li>Problem-solving</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Adaptability</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-center justify-center lg:justify-start">
              <div className="text-center">
                <h3 >
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">4+</span>
                  <span className="font-normal text-gray-700 text-sm sm:text-base"> Years</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base">experience</p>
              </div>
              <div className="text-center">
                <h3 >
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">5+</span>
                  <span className="font-normal text-gray-500 text-sm sm:text-base"> Completed</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base">projects</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
} 

