import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>
          </AnimatedSection>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600"></div>
            
            {portfolioData.experience.map((exp, index) => (
              <AnimatedSection key={exp.id} animation="slide-right" delay={index * 200}>
                <div className="mb-12 relative">
                  <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-lg animate-pulse-glow"></div>
                  
                  <Card className="card-3d ml-20 p-8 hover:shadow-2xl transition-all duration-300 bg-white">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg mb-2">
                          <Briefcase className="h-5 w-5" />
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-4 text-slate-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {exp.startDate} - {exp.endDate}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-4 py-1">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index} className="flex gap-3 text-slate-700 stagger-item" style={{ animationDelay: `${index * 100}ms` }}>
                            <span className="text-blue-600 mt-1 flex-shrink-0">▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4">Projects Worked On:</h4>
                      <div className="grid gap-4">
                        {exp.projects.map((project, index) => (
                          <Card key={index} className="card-3d p-4 bg-slate-50 border-l-4 border-cyan-600 hover:shadow-lg transition-all">
                            <h5 className="font-bold text-slate-900 mb-2">{project.name}</h5>
                            <p className="text-slate-600 text-sm">{project.description}</p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
