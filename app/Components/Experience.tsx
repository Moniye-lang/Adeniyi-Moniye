"use client"

export default function Experince(){
    return(
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
    )
}