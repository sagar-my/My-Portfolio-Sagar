import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Download } from 'lucide-react';
import { portfolioData } from '../data/mock';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const highlights = [
    "QA Automation Engineer at Mechlin Technology Pvt. Ltd.",
    "AI Agent Framework Developer — Playwright Automation Scripts",
    "Mobile, Web & AI-Driven Automation Testing",
    "Appium Mobile Testing — Real & Emulated Devices",
  ];

  const stats = [
    { text: 'AI Agent', label: 'Framework Developer — Playwright Automation' },
    { value: 3, suffix: '+', label: 'Automation Frameworks Built' },
    { value: 30, suffix: '%', label: 'Manual Effort Reduced' },
    { text: 'Mobile', label: 'Appium & Cross-Platform Testing' }
  ];

  const handleResumeClick = () => {
    // URL encode the resume path to handle spaces and special characters
    const encodedUrl = encodeURI(portfolioData.personal.resumeUrl);
    window.open(encodedUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>
          </AnimatedSection>
          
          {/* Stats Section */}
          <AnimatedSection animation="scale" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-cyan-50">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.text ? (
                      <span>{stat.text}</span>
                    ) : (
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <Card className="card-3d p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional Summary</h3>
                <div className="space-y-4 mb-6">
                  {(portfolioData.personal.aboutParagraphs || [portfolioData.personal.summary]).map((paragraph, index) => (
                    <p key={index} className="text-slate-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="space-y-3 mb-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 stagger-item" style={{ animationDelay: `${index * 100}ms` }}>
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={handleResumeClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </Card>
            </AnimatedSection>
            
            <div className="space-y-6">
              <AnimatedSection animation="slide-left" delay={100}>
                <Card className="card-3d p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">AI & Automation Frameworks</h4>
                  <p className="text-slate-600">
                    I build scalable automation frameworks using Appium, Playwright, Cucumber, and AI Agents — 
                    known for developing AI Agent frameworks powered by Playwright automation scripts. 
                    Strong experience in CI/CD integration and cross-platform mobile and web testing.
                  </p>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-left" delay={200}>
                <Card className="card-3d p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-cyan-600">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Testing & Quality Assurance</h4>
                  <p className="text-slate-600">
                    Skilled in functional, regression, smoke, sanity, API, and ad-hoc testing for mobile and web apps. 
                    I run automation on BrowserStack, GitHub Actions, and real/emulated Android devices to ensure 
                    reliable, high-quality software delivery.
                  </p>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-left" delay={300}>
                <Card className="card-3d p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">AI Automation & Growth</h4>
                  <p className="text-slate-600">
                    Passionate about improving test coverage and reducing manual effort through intelligent automation 
                    and AI-powered testing workflows. Currently advancing skills in AI Automation, Mobile Automation 
                    Framework Design, and modern QA engineering for fast-paced projects.
                  </p>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
