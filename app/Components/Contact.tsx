"use client"
import { useState, useRef } from "react";
import { sendEmail } from "../action";
import { useFormStatus } from "react-dom";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { pending } = useFormStatus();

  async function handleAction(formData: FormData) {
    setStatus("sending");
    const result = await sendEmail(formData);
    
    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 1. Status Card (Unchanged Design) */}
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
            <form 
              ref={formRef}
              action={handleAction} 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Name</label>
                <input 
                  name="name" 
                  required 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Email</label>
                <input 
                  name="email" 
                  required 
                  type="email" 
                  placeholder="john@company.com" 
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all" 
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Project Brief</label>
                <textarea 
                  name="message" 
                  required 
                  placeholder="Tell me about your project goals..." 
                  rows={4} 
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all" 
                />
              </div>

              <button 
  type="submit"
  // Disable to prevent double-sending
  disabled={status === "sending"} 
  className={`md:col-span-2 font-black uppercase text-xs tracking-[0.2em] py-5 rounded-2xl transition-all shadow-xl shadow-teal-900/10 disabled:opacity-50
    ${status === "success" ? "bg-green-600 text-white" : "bg-slate-900 text-white hover:bg-teal-600"}
  `}
>
  {/* Logic: If sending, show "Sending...". If success, show "Received". Otherwise, show "Transmit" */}
  {status === "sending" ? (
    "Sending..."
  ) : status === "success" ? (
    "Message Received ✅"
  ) : status === "error" ? (
    "Error - Try Again ❌"
  ) : (
    "Send Message"
  )}
</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}