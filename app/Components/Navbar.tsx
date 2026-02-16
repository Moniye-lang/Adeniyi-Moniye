"use client"
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Combine scroll listeners for better performance
  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle background change
      setScrolled(window.scrollY > 20);

      // 2. Handle Scroll Spy (Active Section)
      const sections = ['home', 'projects', 'about','experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust 200 to change when the highlight triggers
          if (rect.top >= -100 && rect.top < 300) {
            setActiveSection(`#${section}`);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'My Projects', href: '#projects' },
    { name: 'About Me', href: '#about' },
    { name: 'My Experience', href: '#experience' },
    { name: 'Contact Me', href: '#contact' },
  ];

  // Logic for the underline effect
  const baseLink = "relative font-medium transition-all duration-300 py-1";
  
  const activeStyle = `${baseLink} text-slate-900 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-500`;

  const defaultStyle = `${baseLink} text-gray-400 hover:text-slate-900 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-12 ${
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
    }`}>
      
      {/* Logo Placeholder */}
      <div className="text-2xl font-black tracking-tighter text-slate-900">
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

      {/* Mobile Toggle Button */}
      <button 
        onClick={toggleMenu} 
        className="lg:hidden p-2 text-slate-900 focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar Overlay */}
      <div className={`fixed inset-0 z-[60] flex justify-end transition-all duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={toggleMenu} />

        <div className={`relative w-72 h-full bg-white p-8 shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex justify-end mb-8">
            <button onClick={toggleMenu} className="p-2 bg-slate-50 rounded-full"><X size={24}/></button>
          </div>
          
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.href);
                  setIsOpen(false);
                }}
                className={`text-2xl font-bold transition-all ${
                  activeSection === link.href ? "text-teal-500 translate-x-2" : "text-slate-400 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}