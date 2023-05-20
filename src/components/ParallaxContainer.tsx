'use client';

// import type { IParallax } from '@react-spring/parallax';
import { Parallax } from '@react-spring/parallax';
// import { useRef } from 'react';

const ParallaxContainer = ({ children }: { children: React.ReactNode }) => {
  // const refParallax = useRef<IParallax | null>(null);

  return (
    <Parallax
      // ref={refParallax}
      className='no-scrollbar inset-0 p-4 lg:p-8'
      pages={7}
    >
      {children}
    </Parallax>
  );
};
export default ParallaxContainer;
