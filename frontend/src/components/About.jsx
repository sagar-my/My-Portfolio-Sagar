import React from 'react';
import { Card } from './ui/card';
import { CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  const highlights = [
    "98% Issue Resolution Rate",
    "Mobile & Web Testing Expert",
    "Automation Specialist",
    "Cross-functional Collaboration"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional Summary</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {portfolioData.personal.summary}
                </p>
                
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Testing Expertise</h4>
                <p className="text-slate-600">
                  Specialized in comprehensive testing methodologies including regression, ad-hoc, and UAT testing. 
                  Proficient in automation frameworks like Appium, Playwright, and Cucumber.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-cyan-600">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Development Skills</h4>
                <p className="text-slate-600">
                  Strong programming foundation in Java, JavaScript, and C. Experience in full-stack development 
                  with Node.js, Express.js, and modern web technologies.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Continuous Learning</h4>
                <p className="text-slate-600">
                  Currently expanding skillset with Selenium with Java. Active on LeetCode with a rating of 1482, 
                  continuously improving problem-solving and algorithmic skills.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
