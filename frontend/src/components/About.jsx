import React from 'react';
import { Card } from './ui/card';
import { CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const highlights = [
    "98% Issue Resolution Rate",
    "Mobile & Web Testing Expert",
    "Automation Specialist",
    "Cross-functional Collaboration"
  ];

  const stats = [
    { value: 98, suffix: '%', label: 'Issue Resolution' },
    { value: 3, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '%', label: 'Stability Improvement' },
    { value: 1482, suffix: '', label: 'LeetCode Rating' }
  ];

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
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
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
                <p className="text-slate-700 leading-relaxed mb-6">
                  {portfolioData.personal.summary}
                </p>
                
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 stagger-item" style={{ animationDelay: `${index * 100}ms` }}>
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
            
            <div className="space-y-6">
              <AnimatedSection animation="slide-left" delay={100}>
                <Card className="card-3d p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Testing Expertise</h4>
                  <p className="text-slate-600">
                    Specialized in comprehensive testing methodologies including regression, ad-hoc, and UAT testing. 
                    Proficient in automation frameworks like Appium, Playwright, and Cucumber.
                  </p>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-left" delay={200}>
                <Card className="card-3d p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-cyan-600">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Development Skills</h4>
                  <p className="text-slate-600">
                    Strong programming foundation in Java, JavaScript, and C. Experience in full-stack development 
                    with Node.js, Express.js, and modern web technologies.
                  </p>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-left" delay={300}>
                <Card className="card-3d p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Continuous Learning</h4>
                  <p className="text-slate-600">
                    Currently expanding skillset with Selenium with Java. Active on LeetCode with a rating of 1482, 
                    continuously improving problem-solving and algorithmic skills.
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
