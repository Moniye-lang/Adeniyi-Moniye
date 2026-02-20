"use client"
import Link from "next/link";

export default function MyProjects(){
    const projects = [
    {
      title: "Xpress Gas",
      subtitle: "Logistics",
      video: "/eb36127e-b3f2-4982-bc69-706e3a87b0f0.mp4",
      description: "High-concurrency dashboard for real-time fleet monitoring. Built to handle massive data throughput via Web Workers without main-thread lag.",
      stats: [{ label: "Main Thread", val: "0.0ms" }, { label: "WebSocket", val: "Real-time" }],
      link: 'https://www.xpresscookinggas.com/'
    },
    {
      title: "Flovet Care", // Integrated from your sketch
      subtitle: "E-Commerce",
      video: "/50883d05-070e-499d-b8bf-dbb408e9dd24.mp4",
      description: "A conversion-optimized commerce engine featuring high-fidelity asset rendering and sub-second page transitions.",
      stats: [{ label: "Lighthouse", val: "100" }, { label: "FCP", val: "0.8s" }],
      link: 'https://flovetcare.com/'
    },
    {
      title: "Bistro Bliss",
      subtitle: "SaaS",
      video: "/450c95dd-1247-4e8d-9210-26d656a9b1c9.mp4",
      description: "Enterprise resource management tool utilizing advanced state synchronization across distributed clients.",
      stats: [{ label: "Uptime", val: "99.9%" }, { label: "Sync", val: "Optimistic" }],
      link: 'https://bistro-bliss-two.vercel.app/'
    },  
    {
      title: "Zarrin Blog",
      subtitle: "SaaS",
      video: "/4b313830-ab16-49a3-986b-d450bfdf32a5.mp4",
      description: "Enterprise resource management tool utilizing advanced state synchronization across distributed clients.",
      stats: [{ label: "Uptime", val: "99.9%" }, { label: "Sync", val: "Optimistic" }],
      link: 'https://blog-silk-zeta-52.vercel.app/'
    }
  ];
    return(
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
              <Link href={project.link} className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-xl hover:shadow-teal-100 active:scale-95">
                Live Link
              </Link>
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
    )
}