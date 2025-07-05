'use client';

import { AnimatedBackground } from 'animated-backgrounds';


export default function AnimatedBg() {

  return (
    <AnimatedBackground
      animationName="auroraBorealis"
      interactive={true}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        filter: 'blur(5px)',
        opacity: 0.8,
      }}
    />
  );
}
