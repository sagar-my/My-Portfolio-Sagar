import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Award } from 'lucide-react';
import { portfolioData } from '../data/mock';
import AnimatedSection from './AnimatedSection';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
              Achievements & Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.achievements.map((achievement, index) => (
              <AnimatedSection 
                key={achievement.id}
                animation="scale"
                delay={index * 100}
              >
                <Card 
                  className="card-3d p-6 hover:shadow-2xl transition-all duration-300 bg-white group h-full"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow">
                        {achievement.id === 1 ? (
                          <Trophy className="h-6 w-6 text-white" />
                        ) : (
                          <Award className="h-6 w-6 text-white" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
