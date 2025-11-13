import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ children, className = '', delay = 0, animation = 'fade-up' }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const animationClasses = {
    'fade-up': 'animate-on-scroll-fade-up',
    'fade-in': 'animate-on-scroll-fade-in',
    'slide-left': 'animate-on-scroll-slide-left',
    'slide-right': 'animate-on-scroll-slide-right',
    'scale': 'animate-on-scroll-scale',
    'rotate': 'animate-on-scroll-rotate'
  };

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClasses[animation] : 'opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
