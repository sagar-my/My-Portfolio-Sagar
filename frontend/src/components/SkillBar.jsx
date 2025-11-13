import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillBar = ({ skill, percentage, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <div ref={ref} className="mb-6" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-slate-900">{skill}</span>
        <span className="text-sm font-semibold text-blue-600">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'skill-bar-fill' : 'w-0'
          }`}
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
