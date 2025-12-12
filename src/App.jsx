import React from 'react';
import { momsbelief, icegram, trackier, rentcity, visa, igaming, vansha } from "./projectImages";

const projects = [
  { title: "Moms Belief (UI/UX)", url: "https://octet.design/project/ui-ux-design-moms-belief/", img: momsbelief, summary: "Redesigned a complete digital therapy support ecosystem to improve parent engagement and streamline assessment workflows." },
  { title: "Icegram", url: "https://octet.design/project/icegram/", img: icegram, summary: "Created a fresh UX for a marketing automation platform, enhancing message creation flows and campaign visibility." },
  { title: "Trackier", url: "https://octet.design/project/trackier/", img: trackier, summary: "Revamped a performance marketing dashboard with improved analytics visualization and usability." },
  { title: "RentCity", url: "https://octet.design/project/rentcity/", img: rentcity, summary: "Designed an intuitive rental discovery platform focusing on clarity, trust, and seamless search experiences." },
  { title: "Campaign Monitoring Platform", url: "https://octet.design/project/campaign-monitoring-platform-design/", img: visa, summary: "Built a unified monitoring panel for multi-channel campaigns with real-time analytics and insights." },
  { title: "iGaming", url: "https://octet.design/project/igaming/", img: igaming, summary: "Crafted an immersive gaming experience with enhanced UI clarity, navigation, and reward systems." }
];

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-violet-200 via-purple-200 to-pink-200 text-gray-800 font-serif">
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-70 animate-pulse-slow bg-[radial-gradient(circle_at_20%_30%,rgba(255,180,255,0.5),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(180,160,255,0.45),transparent_65%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%),conic-gradient(from_90deg_at_50%_50%,rgba(200,150,255,0.4),rgba(255,200,255,0.3),rgba(255,255,255,0.2))]"></div>

      <header className="max-w-6xl mx-auto p-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-violet-200 shadow-xl">
            <img src={vansha} alt="Vansha" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-violet-700 tracking-wide font-signature">Vansha Kalra</h1>
            <p className="text-md text-gray-600 italic">UI/UX Designer • Product Thinker</p>
          </div>
        </div>
        <nav className="space-x-6 text-violet-700 font-medium">
          <a href="#projects" className="hover:text-violet-900 transition">Projects</a>
          <a href="#about" className="hover:text-violet-900 transition">About</a>
          <a href="#contact" className="hover:text-violet-900 transition">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        <section className="bg-white/70 backdrop-blur-md animate-fadeIn rounded-3xl p-12 shadow-xl mb-16 border border-violet-100">
          <h2 className="text-4xl font-bold text-violet-700 mb-4 tracking-wide">Hello — I’m Vansha</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            I craft elegant, intuitive digital experiences with a refined approach to visual design and user-centered problem solving. My work blends aesthetics with functionality to create interfaces that feel effortless.
          </p>
        </section>

        <section id="projects" className="mb-20">
          <h3 className="text-3xl font-semibold text-violet-700 mb-10 tracking-wide">Selected Projects</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((p) => (
              <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className="block bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-violet-100">
                <div className="h-40 w-full overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition" />
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-violet-700 mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{p.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-xl mb-20 border border-violet-100">
          <h3 className="text-2xl font-bold text-violet-700 mb-4 tracking-wide">About</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            I elevate digital experiences by simplifying complex UX challenges and crafting visually harmonious designs. I’ve contributed to SaaS platforms, EdTech, FinTech, Marketing Analytics, and E-commerce systems.
          </p>
        </section>

        <section id="contact" className="bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-violet-100">
          <h3 className="text-2xl font-bold text-violet-700 mb-4 tracking-wide">Contact</h3>
          <p className="text-lg text-gray-700 mb-6">
            I’d love to connect and discuss new opportunities.
          </p>
          <div className="text-md text-gray-700 space-y-1">
            <p>Email: <span className="text-violet-700 font-medium">Vansha.kalra@gmail.com</span></p>
            <p>Phone: <span className="text-violet-700 font-medium">+91 8209429168</span></p>
          </div>
        </section>
      </main>

      <footer className="mt-16 py-8 text-center text-sm text-gray-500 tracking-wide">
        Made with creativity ✦ Pastel Violet Theme
      </footer>
    </div>
  );
}
