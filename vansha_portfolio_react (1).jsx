import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#EDE7F6] text-[#3E3A55] font-inter">
      {/* HERO SECTION */}
      <section className="px-8 py-24 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="w-full max-w-sm flex justify-center lg:justify-start">
          <img
            src="/vansha.png"
            alt="Vansha Kalra"
            className="w-64 h-64 object-cover rounded-3xl shadow-xl mb-8 lg:mb-0"
          />
        </div>
        <div className="lg:ml-12">
          <div>
            <p className="uppercase tracking-widest text-orange-400 text-sm mb-4">
              UI/UX Designer
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I’m <span className="text-orange-400">Vansha Kalra</span>
              <br />
              I design intuitive & meaningful experiences.
            </h1>
            <p className="text-[#5A5875] max-w-xl mb-8 text-lg">
              I craft thoughtful digital products by turning complex problems
              into simple, beautifully structured solutions. Skilled in UX
              research, wireframing, prototyping, visual design, and design
              systems.
            </p>

            <div className="flex gap-4">
              <a
                href="#work"
                className="px-6 py-3 bg-orange-500 rounded-full font-medium hover:bg-orange-600 transition"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-500 rounded-full font-medium hover:border-orange-400 transition"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm mt-10">
            <div className="bg-white border-[#d7c8f0] p-6 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-orange-400">
                Core Skills
              </h3>
              <ul className="space-y-2 text-[#5A5875]">
                <li>• UX Research & Information Architecture</li>
                <li>• Wireframing & Prototyping</li>
                <li>• UI Design & Visual Communication</li>
                <li>• Design Systems</li>
                <li>• Interaction Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="px-8 lg:px-24 py-24 bg-[#E7E0F2]">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">Selected Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-[#d7c8f0] p-6 rounded-2xl border border-gray-200 hover:border-orange-400 transition shadow-lg"
            >
              <p className="text-xs uppercase tracking-widest text-orange-400 mb-2">
                {p.tag}
              </p>
              <h3 className="text-xl font-semibold group-hover:text-orange-400 transition">
                {p.title}
              </h3>
              <p className="text-[#5A5875] mt-2 text-sm">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-8 lg:px-24 py-24">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">About Me</h2>
        <p className="text-[#5A5875] max-w-3xl text-lg leading-relaxed mb-8">
          I take pleasure in elevating digital user experiences by solving
          intricate design challenges and crafting visually thoughtful
          solutions. I believe in designing with empathy, intention, and
          consistency.
        </p>
        <p className="text-[#5A5875] max-w-3xl text-lg leading-relaxed">
          When I'm not designing, I love spending time in nature — it inspires
          clarity and creativity in my design process.
        </p>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="px-8 lg:px-24 py-24 bg-[#E7E0F2]">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="bg-white border-[#d7c8f0] p-6 rounded-2xl border border-gray-200 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-orange-400 mb-3">{exp.duration}</p>
              <ul className="text-[#5A5875] space-y-2 text-sm">
                {exp.points.map((pt, idx) => (
                  <li key={idx}>• {pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="px-8 lg:px-24 py-24">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Contact</h2>
        <p className="text-[#5A5875] text-lg mb-6">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            <strong>Email:</strong>{" "}
            <a
              className="text-orange-400"
              href="mailto:Vansha.kalra@gmail.com"
            >
              Vansha.kalra@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +91 8209429168
          </p>
          <p>
            <strong>Location:</strong> India · Open to Remote
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-400 border-t border-gray-200">
        © {new Date().getFullYear()} Vansha Kalra — Designed with passion.
      </footer>
    </div>
  );
}

// PROJECT DATA
const projects = [
  {
    tag: "EdTech",
    title: "Mom’s Belief – Holistic Care Platform",
    desc: "Redesigned the full experience for parents to access programs, assessments and developmental guidance for children with special needs.",
    link: "https://octet.design/project/ui-ux-design-moms-belief/",
  },
  {
    tag: "Marketing SaaS",
    title: "Icegram – Email Automation UI/UX",
    desc: "Revamped email automation workflows, improved navigation, and redesigned templates to simplify campaign creation for marketers.",
    link: "https://octet.design/project/icegram/",
  },
  {
    tag: "Affiliate Analytics",
    title: "Trackier Performance Platform",
    desc: "Built intuitive dashboards and reporting flows enabling affiliates to track conversions, ROI and performance in real time.",
    link: "https://octet.design/project/trackier/",
  },
  {
    tag: "Real Estate",
    title: "RentCity – Property Management",
    desc: "Created a unified system for managing properties, tenants, payments and maintenance requests across web and mobile.",
    link: "https://octet.design/project/rentcity/",
  },
  {
    tag: "Enterprise",
    title: "Visa Campaign Monitoring",
    desc: "Designed campaign monitoring, OPEX tracking, KPI dashboards and data visualisation for enterprise-wide campaign oversight.",
    link: "https://octet.design/project/campaign-monitoring-platform-design/",
  },
  {
    tag: "Gaming",
    title: "iGaming Platform UX",
    desc: "Reimagined the onboarding, analytics dashboards and role-based journeys for affiliates and players in the gaming ecosystem.",
    link: "https://octet.design/project/igaming/",
  },
];

// EXPERIENCE DATA
const experience = [
  {
    role: "UI/UX Designer – Octet Design Studio",
    duration: "June 2021 – 2025 · Ahmedabad",
    points: [
      "Designed end-to-end product experiences for SaaS, EdTech, FinTech & Healthcare.",
      "Conducted UX research, created wireframes, prototypes & design systems.",
      "Collaborated with product managers, developers & marketing teams.",
      "Led usability testing & data-driven iterations.",
      "Designed GST platform, digital insurance, EdTech & sports platforms.",
    ],
  },
  {
    role: "Graphic Designer – Miraj Group",
    duration: "Nov 2020 – April 2021 · Udaipur",
    points: ["Branding, typography, layout & social media creatives."],
  },
  {
    role: "Graphic Designer – Doodle Collection",
    duration: "June 2019 – Sep 2020 · Mumbai",
    points: [
      "Conceptual design, merchandise graphics & product shoot creatives.",
    ],
  },
];
