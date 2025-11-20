import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('');
            }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-20 transition duration-500 blur-lg"></div>
            <span className="relative text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
              SC
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md shadow-blue-500/25'
                    : isScrolled
                      ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'text-slate-700 hover:bg-blue-50' : 'text-white hover:bg-white/10'
              }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}>
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  } ${activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
