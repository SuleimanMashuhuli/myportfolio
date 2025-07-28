export default function ExperienceTimeline() {
  const experience = [
    {
      role: "Software Developer (Contract)",
      company: "ABC Bank Group",
      location: "Nairobi County, Kenya · On-site",
      period: "Apr 2025 – Present · 4 mos",
      icon: "🏦",
      details: [
        "Team with my fellow software engineers to develop an LRT system.",
        "Assist in designing and implementing REST APIs using Python (Django).",
        "Assist in the development of database structure using PostgreSQL.",
      ],
    },
    {
      role: "Software Developer (Internship)",
      company: "ABC Bank Group",
      location: "Nairobi County, Kenya · On-site",
      period: "Jan 2025 – Mar 2025 · 3 mos",
      icon: "🏦",
      details: [],
    },
    {
      role: "Information Technology Support (Part-time)",
      company: "Kwale Tech Hub",
      location: "Kwale, Kenya · On-site",
      period: "Aug 2024 – Present · 1 yr",
      icon: "💻",
      details: [
        "ICT training for young people.",
        "Supports capacity building programs in entrepreneurship.",
        "Skills development for SMEs in partnership with Kwale County Government.",
      ],
    },
    {
      role: "Cyber Security Analyst & Ethical Hacker (Internship)",
      company: "CFSS Cyber & Forensics Security Solutions",
      location: "Bhagalpur, Bihar, India · Remote",
      period: "Aug 2024 – Sep 2024 · 2 mos",
      icon: "🛡️",
      details: [
        "Monitor network traffic for security incidents and events.",
        "Investigate incidents and respond to events in real time.",
        "Write detailed incident response reports.",
        "Install and operate firewalls, encryption programs, and other security software.",
        "Fix vulnerabilities, incident response, penetration testing, vulnerability assessment.",
      ],
    },
    {
      role: "Information Technology Support Specialist (Internship)",
      company: "Kenya Power",
      location: "Mombasa County, Kenya",
      period: "May 2022 – Aug 2022 · 4 mos",
      icon: "🔌",
      details: [
        "Fiber Optic network installation and splicing.",
        "SCADA networks, network cable installation, troubleshooting.",
        "Installation and troubleshooting of Cisco telephones, UPS, routers, switches, and radio links.",
      ],
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
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-semibold">{item.company}</span>
                </div>
                <div className="text-sm font-medium">{item.role}</div>
                <div className="text-xs text-gray-500">{item.location}</div>
                <div className="text-xs text-gray-400 mb-2">{item.period}</div>
                {item.details.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {item.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
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
