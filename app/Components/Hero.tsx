"use client";
import Image from "next/image";
import { useEffect } from "react";


export default function Home() {
  // Data-driven trust scores reflecting your audit screenshot
  
  const trustScores = [
    { 
      label: "Performance", 
      value: "90+", 
      unit: "/100", 
      desc: "Validated Core Web Vitals: 93 Accessibility, 96 Best Practices, 100 SEO.",
      color: "from-green-400 to-emerald-500",
    },
    { 
      label: "Type Safety", 
      value: "100", 
      unit: "%", 
      desc: "Strict TypeScript architecture preventing runtime failures.",
      color: "from-blue-500 to-cyan-400",
    },
    { 
      label: "Load Efficiency", 
      value: "-30", 
      unit: "%", 
      desc: "Aggressive asset compression & code splitting strategy.",
      color: "from-cyan-400 to-teal-400",
    }
  ];

  

  return (
    <main className="min-h-screen bg-gradient-to-r  from-white to-[#F5F5DC] scroll-smooth selection:bg-teal-100">
      
      {/* HERO SECTION */}
      <section id="home" className="min-h-screen pt-[100px] grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 gap-12">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase mb-6">
            <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            Lighthouse Certified Performance
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tighter">
            Frontend <span className="animate-gradient block bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent italic">Architect</span>
          </h1>
          <p className="mt-6 max-w-xl text-slate-600 font-medium text-lg leading-relaxed">
            I build high-performance web systems that bridge the gap between complex engineering and intuitive user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 shadow-xl transition-all active:scale-95">
              Analyze My Work
               </button>
            </a>
            <a href="#contact"> <button className="px-8 py-4 rounded-2xl border-2 border-slate-200 text-slate-900 font-bold hover:border-teal-500 transition-all">
              Get in Touch
            </button></a>
           
          </div>
        </div>

        <div className="relative group justify-self-center md:justify-self-end">
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-25 transition duration-500" />
          <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-tr from-teal-400 to-blue-500 rotate-2 group-hover:rotate-0 transition-transform duration-500">
            <div className="relative h-[450px] w-[340px] overflow-hidden rounded-[2.2rem] bg-white">
              <Image src="/portfolio_img.jpeg" alt="Engineer" fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SCORES SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-float grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustScores.map((score) => (
              <div key={score.label} className="relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
                <div className="text-5xl font-black text-slate-900 mb-2">
                  {score.value}<span className="text-xl text-teal-500 ml-1">{score.unit}</span>
                </div>
                <div className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">{score.label}</div>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{score.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC PROJECTS SECTION */}
      
    </main>
  );
}