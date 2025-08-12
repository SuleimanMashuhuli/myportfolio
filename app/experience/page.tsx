import Image from 'next/image';

export default function ExperienceTimeline() {
  const experience = [
    {
      role: "Software Developer (Contract)",
      company: "ABC Bank Group",
      location: "Nairobi County, Kenya · On-site",
      period: "Apr 2025 – Present · 4 mos",
      image: "/images/abc.jpeg",

    },
    {
      role: "Software Developer (Internship)",
      company: "ABC Bank Group",
      location: "Nairobi County, Kenya · On-site",
      period: "Jan 2025 – Mar 2025 · 3 mos",
      image: "/images/abc.jpeg",

    },
    {
      role: "Information Technology Support (Part-time)",
      company: "Kwale Tech Hub",
      location: "Kwale, Kenya · On-site",
      period: "Aug 2024 – Present · 1 yr",
      image: "/globe.svg",

    },
    {
      role: "Cyber Security Analyst & Ethical Hacker (Internship)",
      company: "CFSS Cyber & Forensics Security Solutions",
      location: "Bhagalpur, Bihar, India · Remote",
      period: "Aug 2024 – Sep 2024 · 2 mos",
      image: "/images/cfss.jpeg",

    },
    {
      role: "Information Technology Support Specialist (Internship)",
      company: "Kenya Power",
      location: "Mombasa County, Kenya",
      period: "May 2022 – Aug 2022 · 4 mos",
      image: "/images/kplc.jpeg",

    },
  ];

  return (
    <section id="experience" className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-12 text-center">Work Experience</h1>
      <div className="relative grid grid-cols-9 gap-y-12">
        {experience.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`col-span-9 md:col-span-4 ${
                isLeft ? "md:col-start-1 text-right" : "md:col-start-6 text-left"
              } relative`}
            >
              <div className="bg-white p-4 rounded-md shadow-md relative z-10">
                <div className="flex items-center gap-2 justify-end md:justify-start mb-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={`${item.company} logo`}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold">{item.company}</span>
                </div>
                <div className="text-sm font-medium">{item.role}</div>
                <div className="text-xs text-gray-500">{item.location}</div>
                <div className="text-xs text-gray-400 mb-2">{item.period}</div>

              </div>
              {/* Connector Dot */}
              <span
                className={`absolute top-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-20 ${
                  isLeft ? "-right-2" : "-left-2"
                }`}
              ></span>
            </div>
          );
        })}
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-500 transform -translate-x-1/2 z-0" />
      </div>
    </section>
  );
}
