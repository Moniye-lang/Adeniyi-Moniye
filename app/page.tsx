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

  // Refactored project list to eliminate code repetition
  const projects = [
    {
      title: "Xpress Gas",
      subtitle: "Logistics",
      video: "/eb36127e-b3f2-4982-bc69-706e3a87b0f0.mp4",
      description: "High-concurrency dashboard for real-time fleet monitoring. Built to handle massive data throughput via Web Workers without main-thread lag.",
      stats: [{ label: "Main Thread", val: "0.0ms" }, { label: "WebSocket", val: "Real-time" }],
      link: "https://flovetcare.com/"
    },
    {
      title: "Flovet Care", // Integrated from your sketch
      subtitle: "E-Commerce",
      video: "/50883d05-070e-499d-b8bf-dbb408e9dd24.mp4",
      description: "A conversion-optimized commerce engine featuring high-fidelity asset rendering and sub-second page transitions.",
      stats: [{ label: "Lighthouse", val: "100" }, { label: "FCP", val: "0.8s" }],
      link: "https:https://flovetcare.com/"
    },
    {
      title: "Bistro Bliss",
      subtitle: "SaaS",
      video: "/450c95dd-1247-4e8d-9210-26d656a9b1c9.mp4",
      description: "Enterprise resource management tool utilizing advanced state synchronization across distributed clients.",
      stats: [{ label: "Uptime", val: "99.9%" }, { label: "Sync", val: "Optimistic" }],
      link: "https:https://flovetcare.com/"
    },  
    {
      title: "Bistro Bliss",
      subtitle: "SaaS",
      video: "/450c95dd-1247-4e8d-9210-26d656a9b1c9.mp4",
      description: "Enterprise resource management tool utilizing advanced state synchronization across distributed clients.",
      stats: [{ label: "Uptime", val: "99.9%" }, { label: "Sync", val: "Optimistic" }],
      link: "https:https://flovetcare.com/"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-r from-white to-[#F5F5DC] scroll-smooth selection:bg-teal-100">
      
      {/* HERO SECTION */}
      <section id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 gap-12">
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
            <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 shadow-xl transition-all active:scale-95">
              Analyze My Work
            </button>
            <button className="px-8 py-4 rounded-2xl border-2 border-slate-200 text-slate-900 font-bold hover:border-teal-500 transition-all">
              Get in Touch
            </button>
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
      <section id="projects" className="py-32 max-w-7xl mx-auto px-6 space-y-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Selected <span className="text-teal-500">Works</span></h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">Engineered for 60FPS Performance</p>
        </div>

        {projects.map((project, idx) => (
          <div key={project.title} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className={`lg:col-span-5 space-y-8 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div>
                <h3 className="text-4xl font-black text-slate-900 uppercase leading-none">
                  {project.title} <span className="block text-teal-500 text-xl tracking-[0.2em] mt-2">{project.subtitle}</span>
                </h3>
              </div>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">{project.description}</p>
              
              <div className="flex gap-12 border-t border-slate-100 pt-8">
                {project.stats.map(stat => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black text-slate-900">{stat.val}</div>
                    <div className="text-[10px] font-black uppercase tracking-tighter text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-xl hover:shadow-teal-100 active:scale-95">
                Live Link
              </button>
            </div>

            <div className={`lg:col-span-7 relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="relative rounded-[3rem] p-3 bg-slate-200/50 shadow-inner overflow-hidden group border border-slate-200">
                <div className="aspect-video relative rounded-[2.2rem] overflow-hidden bg-slate-900 shadow-2xl">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
                    <source src={project.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Visual Proof Badge */}
                <div className="absolute bottom-10 left-10">
                  <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/20 shadow-2xl">
                    <span className="text-[10px] font-black uppercase text-white tracking-widest">Environment: Production</span>
                  </div>
                </div>
              </div>
              {/* Decorative background blur */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-400/5 rounded-full blur-[120px]" />
            </div>
          </div>
        ))}
      </section>

      {/* About Me */}
    <section id="about" className="py-32 bg-white border-y border-slate-100">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* 1. Philosophy Header (The "Architect" Tone) */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
      <div className="lg:col-span-8">
        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-teal-500 mb-6">Philosophy</h2>
        <p className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter">
          Engineering products that <br />
          <span className="text-slate-300 italic">don't just work—</span> they scale.
        </p>
      </div>
      <div className="lg:col-span-4 lg:text-right">
        <p className="text-slate-500 font-medium text-lg border-l-4 lg:border-l-0 lg:border-r-4 border-teal-500 pl-6 lg:pr-6 py-2">
          Focusing on the intersection of <br /> 
          <span className="text-slate-900 font-bold">AI Interfaces & Performance.</span>
        </p>
      </div>
    </div>

    {/* 2. The Bento Grid (The "Experience" Proof) */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      {/* Primary Bio Card */}
      <div className="md:col-span-2 lg:col-span-2 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between">
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          I am a frontend developer focused on building <span className="text-slate-900 font-bold">high-performance, user-centered</span> web applications. I specialize in designing clean UI architectures and integrating intelligent, production-ready digital products.
        </p>
        <div className="mt-8 flex gap-2">
           <span className="h-1.5 w-8 rounded-full bg-teal-500" />
           <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
           <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
        </div>
      </div>

      {/* Experience Metric Card */}
      <div className="bg-slate-900 p-10 rounded-[2.5rem] flex flex-col justify-center items-center group hover:bg-teal-500 transition-all duration-500 shadow-xl shadow-slate-200">
        <span className="text-6xl font-black text-white italic tracking-tighter transition-transform group-hover:scale-110">2+</span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-400 group-hover:text-slate-900 mt-2 transition-colors text-center">
          Years Production <br /> Experience
        </span>
      </div>

      {/* Research/Focus Card */}
      <div className="bg-white border-2 border-slate-100 p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-teal-100 transition-colors">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Research</h3>
        <p className="text-lg font-bold text-slate-900 mt-4 leading-tight">
          Machine Learning interfaces & Voice-to-UI interaction models.
        </p>
      </div>

      {/* Technical Pillars (Horizontal Bento) */}
      <div className="md:col-span-3 lg:col-span-4 bg-slate-50 border border-slate-100 p-10 rounded-[3rem] grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-teal-500 font-bold text-xs">01</span>
            <h4 className="text-slate-900 font-black uppercase text-[11px] tracking-widest">Performance</h4>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">Optimization of the critical rendering path for sub-second LCP and 60FPS loops.</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-teal-500 font-bold text-xs">02</span>
            <h4 className="text-slate-900 font-black uppercase text-[11px] tracking-widest">Type Safety</h4>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">Strict TypeScript coverage to ensure zero runtime failures in complex production environments.</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-teal-500 font-bold text-xs">03</span>
            <h4 className="text-slate-900 font-black uppercase text-[11px] tracking-widest">Architecture</h4>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">Atomic Design systems with Tailwind CSS for scalable, maintainable component libraries.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="experience" className="py-32 bg-[#fafafa]">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Header with System Status */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div className="space-y-2">
        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-teal-500">Engineering History</h2>
        <p className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
          Production <span className="text-slate-400 italic">Deployments</span>
        </p>
      </div>
      <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Node Status: Active</span>
      </div>
    </div>

    {/* Bento Grid Blend */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* 1. Large Summary Card (Option 2 style) */}
      <div className="md:col-span-2 bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between group">
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 italic">// Experience_Overview</h3>
          <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Over 2+ years of architecting <span className="text-teal-500">high-concurrency</span> interfaces. I bridge the gap between complex API logic and 60FPS user experiences.
          </p>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-50 flex flex-wrap gap-8">
          <div>
            <span className="block text-2xl font-black text-slate-900">05+</span>
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Shipped Products</span>
          </div>
          <div>
            <span className="block text-2xl font-black text-slate-900">94+</span>
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Perf Audit Score</span>
          </div>
        </div>
      </div>

      {/* 2. Core Stack Card (Audit Style) */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-between">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-400 opacity-80">Primary_Stack</h3>
        <div className="space-y-4 my-8">
          {["React / Next.js", "TypeScript (Strict)", "Tailwind CSS", "REST / WebSockets"].map((tech) => (
            <div key={tech} className="flex items-center justify-between group cursor-default">
              <span className="text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity">{tech}</span>
              <span className="h-1 w-1 rounded-full bg-teal-500" />
            </div>
          ))}
        </div>
        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-[10px] font-medium leading-relaxed opacity-60">Engineered for sub-second LCP and visual stability.</p>
        </div>
      </div>

      {/* 3. Achievement: AI Interaction (Option 4 style) */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 group hover:border-teal-500 transition-colors duration-500">
        <div className="w-10 h-10 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-teal-600 font-black text-xs">AI</span>
        </div>
        <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-4">Intelligent Interfaces</h4>
        <p className="text-slate-500 text-sm leading-relaxed">
          Integrated LLM-driven response systems and voice-enabled navigation into production web apps, focusing on low-latency interactions.
        </p>
      </div>

      {/* 4. Achievement: Performance (Option 4 style) */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 group hover:border-teal-500 transition-colors duration-500">
        <div className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-slate-900 font-black text-xs">90</span>
        </div>
        <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-4">Technical Optimization</h4>
        <p className="text-slate-500 text-sm leading-relaxed">
          Consistently achieved Lighthouse scores above 90 by mastering the critical rendering path and aggressive code-splitting strategies.
        </p>
      </div>

      {/* 5. Achievement: Architecture (Option 4 style) */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 group hover:border-teal-500 transition-colors duration-500">
        <div className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-slate-900 font-black text-xs">TS</span>
        </div>
        <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-4">Scalable Architectures</h4>
        <p className="text-slate-500 text-sm leading-relaxed">
          Pioneered maintainable frontend structures using Atomic Design and strict TypeScript patterns to ensure zero runtime failures.
        </p>
      </div>
      
    </div>
  </div>
</section>

          <section id="contact" className="py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* 1. Status Card */}
      <div className="lg:col-span-1 bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-400">Available for Hire</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">
            Let's <br /> <span className="text-slate-500 italic">Collaborate</span>
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-medium leading-relaxed mt-8">
          Currently taking on new frontend architecture challenges and AI-integration projects.
        </p>
      </div>

      {/* 2. Contact Form Card */}
      <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Email</label>
            <input type="email" placeholder="john@company.com" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Project Brief</label>
            <textarea placeholder="Tell me about your project goals..." rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all" />
          </div>
          <button className="md:col-span-2 bg-slate-900 text-white font-black uppercase text-xs tracking-[0.2em] py-5 rounded-2xl hover:bg-teal-600 transition-all shadow-xl shadow-teal-900/10">
            Transmit Message
          </button>
        </form>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}