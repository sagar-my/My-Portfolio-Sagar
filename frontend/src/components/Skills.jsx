import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';
import { Code, Wrench, TestTube, Database, MessageSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: portfolioData.skills.programmingLanguages,
      color: "blue"
    },
    {
      icon: Wrench,
      title: "Frameworks & Libraries",
      skills: portfolioData.skills.frameworksLibraries,
      color: "cyan"
    },
    {
      icon: TestTube,
      title: "Testing & Automation",
      skills: portfolioData.skills.testingAutomation,
      color: "blue"
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: portfolioData.skills.toolsPlatforms,
      color: "cyan"
    },
    {
      icon: Database,
      title: "Databases",
      skills: portfolioData.skills.databases,
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "Soft Skills",
      skills: portfolioData.skills.softSkills,
      color: "cyan"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
              Skills & Abilities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <AnimatedSection 
                  key={index}
                  animation="scale"
                  delay={index * 100}
                >
                  <Card 
                    className="card-3d p-6 hover:shadow-2xl transition-all duration-300 bg-white h-full"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                      category.color === 'blue' 
                        ? 'from-blue-600 to-blue-700' 
                        : 'from-cyan-600 to-cyan-700'
                    } flex items-center justify-center mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {category.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline"
                          className="hover:bg-blue-50 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
