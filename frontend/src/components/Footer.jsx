import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Sagar Chaudhary
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Quality Assurance Associate passionate about delivering exceptional software quality through comprehensive testing and automation.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href={`https://github.com/${portfolioData.personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-4">
                <p className="text-slate-400 text-sm">
                  {portfolioData.personal.email}
                </p>
                <p className="text-slate-400 text-sm">
                  {portfolioData.personal.phone}
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              © {currentYear} Sagar Chaudhary. Made with <Heart className="h-4 w-4 text-red-500" /> and passion for quality.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
