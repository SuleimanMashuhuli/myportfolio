import { Calendar } from "lucide-react";

export default function ExperienceTimeline() {
   const experience = [
    {
      role: "Software Developer (Contract)",
      company: "ABC Bank Group",
      period: "Apr 2025 – Present",
    },
    {
      role: "Software Developer (Internship)",
      company: "ABC Bank Group",
      period: "Jan 2025 – Mar 2025",
    },
    {
      role: "Information Technology Support (Part-time)",
      company: "Kwale Tech Hub",
      period: "Aug 2024 – Dec 2024",
    },
    {
      role: "Cyber Security Analyst & Ethical Hacker (Internship)",
      company: "CFSS Cyber & Forensics Security Solutions",
      period: "Aug 2024 – Sep 2024 ",
    },
    {
      role: "Information Technology Support Specialist (Internship)",
      company: "Kenya Power",
      period: "May 2022 – Aug 2022",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Work Experience</h1>
        <span className="font-normal text-gray-500"> My Journey</span>
      </div>

      <div className="relative">
       
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-500 -translate-x-1/2"></div>

        <div className="space-y-16">
          {experience.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-8 items-center relative"
            >
             
              <span className="absolute left-1/2 top-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></span>

             
              {index % 2 === 0 ? (
                <>
                  <div className="text-right pr-8">
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-gray-500">{item.company}</p>
                    <div className="flex items-center justify-end gap-2 mt-1 text-sm text-gray-400">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div className="text-left pl-8">
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-gray-500">{item.company}</p>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
