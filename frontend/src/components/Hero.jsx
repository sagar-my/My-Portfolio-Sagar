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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              {portfolioData.personal.name.charAt(0)}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 animate-fade-in-up">
            {portfolioData.personal.name}
          </h1>
          
          <div className="h-16 mb-6">
            <p className="text-2xl md:text-3xl text-blue-600 font-semibold">
              {displayedText}
              {!isTypingComplete && <span className="animate-pulse">|</span>}
            </p>
          </div>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Passionate about ensuring software quality through comprehensive testing and automation.
            Experienced in mobile & web testing with a proven track record of enhancing user experience.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              onClick={() => scrollToSection('contact')} 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              onClick={() => window.open(portfolioData.personal.resumeUrl, '_blank')} 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center animate-fade-in">
            <a 
              href={`https://github.com/${portfolioData.personal.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-700 hover:text-blue-600"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-700 hover:text-blue-600"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-700 hover:text-blue-600"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href={`tel:${portfolioData.personal.phone}`}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-700 hover:text-blue-600"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
