"use client"

export default function About(){
    return(
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
    )
}