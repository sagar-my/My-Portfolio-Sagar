import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>
          
          <div className="space-y-8">
            {portfolioData.education.map((edu) => (
              <Card 
                key={edu.id} 
                className="p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600"
              >
                <div className="flex flex-wrap gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-slate-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {edu.graduationDate}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-4 py-2 text-base">
                        {edu.grade}
                      </Badge>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center gap-2 text-slate-900 font-semibold mb-3">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        Relevant Coursework:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, index) => (
                          <Badge key={index} variant="outline" className="text-sm">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
