"use client";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-white to-[#F5F5DC] scroll-smooth selection:bg-teal-100">
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}