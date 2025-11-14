import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(pointer: fine)').matches);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) {
        setIsHovering(false);
        return;
      }

      let isInteractive = false;
      
      // Try using matches if available
      if (typeof target.matches === 'function') {
        isInteractive = target.matches('button, a, .cursor-pointer, .magnetic-button');
      } else {
        // Fallback: check tag name and class list
        isInteractive = target.tagName === 'BUTTON' || 
                       target.tagName === 'A' || 
                       (target.classList && (
                         target.classList.contains('cursor-pointer') || 
                         target.classList.contains('magnetic-button')
                       ));
        
        // Try closest if available
        if (!isInteractive && typeof target.closest === 'function') {
          isInteractive = !!target.closest('button, a, .cursor-pointer, .magnetic-button');
        }
      }
      
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver, true);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver, true);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s',
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ${
            isHovering ? 'w-8 h-8' : 'w-4 h-4'
          }`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s',
        }}
      >
        <div
          className={`rounded-full border-2 border-blue-600 transition-all duration-300 ${
            isHovering ? 'w-12 h-12 opacity-50' : 'w-6 h-6 opacity-30'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
