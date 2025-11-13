import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Award } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                    {project.year}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4 space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <div key={index} className="flex gap-2 text-sm">
                        <Award className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
