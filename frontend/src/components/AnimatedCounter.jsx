import React from 'react';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 2000, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const count = useCountUp(end, duration, isVisible);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
