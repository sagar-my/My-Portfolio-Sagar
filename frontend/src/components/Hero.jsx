import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/mock';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = portfolioData.personal.title;
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 animate-gradient"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Photo */}
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-50 animate-pulse-glow"></div>
                <img 
                  src={portfolioData.personal.profileImage}
                  alt={portfolioData.personal.name}
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/10 animate-float"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
            
            {/* Right side - Text content */}
            <div className="text-left animate-fade-in-up">
              <p className="text-cyan-400 text-lg font-semibold mb-3 tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {portfolioData.personal.name}
              </h1>
              
              <div className="h-16 mb-6">
                <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {displayedText}
                  {!isTypingComplete && <span className="animate-pulse text-cyan-400">|</span>}
                </p>
              </div>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Building robust automation frameworks and ensuring software quality through comprehensive testing strategies. Specialized in end-to-end automation solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg"
                  className="magnetic-button bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-2xl border-0"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
                <Button 
                  onClick={() => window.open(portfolioData.personal.resumeUrl, '_blank')} 
                  variant="outline" 
                  size="lg"
                  className="magnetic-button border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-2xl bg-transparent"
                >
                  Download Resume
                </Button>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={`https://github.com/${portfolioData.personal.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a 
                  href={`tel:${portfolioData.personal.phone}`}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600"
                >
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
