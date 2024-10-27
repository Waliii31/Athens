'use client';

import React, { ReactNode, useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
    });

    // Add custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `;
    document.head.appendChild(style);

    // Clean up function
    return () => {
      scroll.destroy();
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollWrapper;
