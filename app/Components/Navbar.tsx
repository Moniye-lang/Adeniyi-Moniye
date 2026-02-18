"use client"
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
  // 1. Setup the Observer options
  const options = {
    root: null, // use the viewport
    rootMargin: "-20% 0px -70% 0px", // triggers when section is in the upper-middle of screen
    threshold: 0,
  };

  // 2. The Callback: only fires when a section crosses the tripwire
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(`#${entry.target.id}`);
      }
    });
  }, options);

  // 3. Start observing the sections
  const sections = ['home', 'projects', 'about', 'experience', 'contact'];
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // 4. Handle the "Scrolled" state separately (less expensive)
  const handleScroll = () => setScrolled(window.scrollY > 20);
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'My Projects', href: '#projects' },
    { name: 'About Me', href: '#about' },
    { name: 'My Experience', href: '#experience' },
    { name: 'Contact Me', href: '#contact' },
  ];

  const baseLink = "relative font-bold text-sm uppercase tracking-widest transition-all duration-300 py-1";
  const activeStyle = `${baseLink} text-slate-900 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-500`;
  const defaultStyle = `${baseLink} text-gray-400 hover:text-slate-900 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex items-center justify-between px-6 md:px-12 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm py-4" : "bg-transparent py-8"
      }`}>

        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-slate-900 z-[70]">
          MONIYE<span className="text-teal-500">.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveSection(link.href)}
              className={activeSection === link.href ? activeStyle : defaultStyle}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-slate-900 z-[70] hover:bg-slate-100 rounded-xl transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* FULLSCREEN GRID NAVIGATION */}
<div
  className={`fixed inset-0 z-[60] lg:hidden flex items-center justify-center bg-white
  transition-opacity duration-500 ${
    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>
  <div className="grid gap-10 px-10 w-full max-w-lg">
    {navLinks.map((link, index) => {
      const isEven = index % 2 === 0;

      return (
        <a
          key={link.href}
          href={link.href}
          onClick={() => {
            setActiveSection(link.href);
            setIsOpen(false);
          }}
              
          className={`${activeSection === link.href ? activeStyle : defaultStyle}
            text-3xl font-black tracking-tight text-slate-900 text-center
            transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
            ${isOpen
              ? "translate-x-0 opacity-100"
              : isEven
                ? "-translate-x-24 opacity-0"
                : "translate-x-24 opacity-0"
            }
          `}
          style={{
            transitionDelay: isOpen
              ? `${index * 80}ms`
              : `${(navLinks.length - index) * 60}ms`
          }}
        >
          {link.name}
        </a>
      );
    })}
  </div>
</div>

    </>
  );
}
