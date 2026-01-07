import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const canvasRef = useRef(null);

  // Roles to cycle through
  const roles = [
    'Software Automation Engineer',
    'Automation Engineer',
    'QA Testing',
    'QA Automation'
  ];

  // Split name into first and last
  const nameParts = portfolioData.personal.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  // Typing animation with loop
  useEffect(() => {
    const stateRef = {
      currentRoleIndex: 0,
      currentIndex: 0,
      isDeleting: false,
      pauseCount: 0
    };

    const typeText = () => {
      const currentRole = roles[stateRef.currentRoleIndex];
      
      if (!stateRef.isDeleting) {
        // Typing phase
        if (stateRef.currentIndex <= currentRole.length) {
          setDisplayedText(currentRole.slice(0, stateRef.currentIndex));
          setIsTypingComplete(false);
          stateRef.currentIndex++;
        } else {
          // Finished typing, pause for 20 intervals (2 seconds at 100ms)
          stateRef.pauseCount++;
          setIsTypingComplete(true);
          if (stateRef.pauseCount >= 10) {
            stateRef.pauseCount = 0;
            stateRef.isDeleting = true;
          }
        }
      } else {
        // Deleting phase
        if (stateRef.currentIndex >= 0) {
          setDisplayedText(currentRole.slice(0, stateRef.currentIndex));
          setIsTypingComplete(false);
          stateRef.currentIndex--;
        } else {
          // Finished deleting, move to next role
          stateRef.isDeleting = false;
          stateRef.currentRoleIndex = (stateRef.currentRoleIndex + 1) % roles.length;
          stateRef.currentIndex = 0;
        }
      }
    };

    const typingInterval = setInterval(typeText, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-white relative overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Subtle gradient on right */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-100/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left animate-fade-in-up order-2 md:order-1">
              <p className="text-blue-600 text-xl md:text-2xl font-semibold mb-4 tracking-wide">Hi There,</p>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
                I'm {firstName} <span className="text-orange-500">{lastName}</span>
              </h1>
              
              <div className="h-20 mb-8">
                <p className="text-2xl md:text-3xl font-semibold text-slate-800">
                  I Am Into <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">{displayedText}</span>
                  {!isTypingComplete && <span className="animate-pulse bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">|</span>}
                </p>
              </div>
              
              <div className="mb-8">
                <Button 
                  onClick={() => scrollToSection('about')} 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border-0 flex items-center gap-2"
                >
                  About Me
                  <ArrowDown className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href={`https://github.com/${portfolioData.personal.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a 
                  href={`tel:${portfolioData.personal.phone}`}
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            {/* Right side - Circular Avatar */}
            <div className="flex justify-center md:justify-start animate-fade-in order-1 md:order-2">
              <div className="relative group">
                {/* Animated glow effect on hover */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500 animate-pulse"></div>
                
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-cyan-500/50 group-hover:border-cyan-200 group-hover:border-purple-200">
                  {/* Rotating gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow pointer-events-none"></div>
                  
                  <img 
                    src={portfolioData.personal.profileImage}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                  />
                </div>
                
                {/* Floating particles effect on hover */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500 shadow-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500 delay-100 shadow-lg"></div>
                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500 delay-200 shadow-lg"></div>
                <div className="absolute top-1/4 -right-4 w-2.5 h-2.5 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500 delay-300 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
