'use client';

import { AnimatedBackground } from 'animated-backgrounds';
// import 'animated-backgrounds/dist/index.css';

export default function AnimatedBg() {

  const animations = ['cyberGrid', 'particleNetwork', 'matrixRain', 'starryNight', 'gradientWave', 'floatingBubbles', 'auroraBorealis'] as const;
  // type AnimationType = typeof animations[number];

  const current = animations[6];

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
