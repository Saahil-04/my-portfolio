'use client';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ROLES = ['Full Stack Developer', 'Frontend Enthusiast', 'Problem Solver'];

// Minimal typewriter — no external dep, no re-render loops
function useTypewriter(words: string[], speed = 65, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) { setDisplay(words[0]); return; }
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx(c => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause, reduce]);

  return display;
}

// Floating particle dots
function Particles() {
  const dots = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    dur: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map(d => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`, top: `${d.y}%`,
            width: d.size, height: d.size,
            background: 'rgba(34,211,238,0.35)',
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const role = useTypewriter(ROLES);
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #04090f 0%, #060e1c 55%, #060b14 100%)' }}
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute" style={{
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 65%)',
        top: '-160px', left: '-160px',
      }} />
      <div className="pointer-events-none absolute" style={{
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)',
        bottom: '-100px', right: '-100px',
      }} />
      {/* Grid */}
      <div className="pointer-events-none absolute inset-0" style={{
        opacity: 0.028,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      <Particles />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* ── Left: Text ── */}
          <div className="md:w-1/2 flex flex-col">

            {/* Status pill */}
            <motion.div
              className="flex items-center gap-2 mb-8 w-fit"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '5px 14px', borderRadius: '99px', fontSize: '0.75rem',
                fontFamily: 'monospace', letterSpacing: '0.08em',
                background: 'rgba(34,211,238,0.07)',
                border: '1px solid rgba(34,211,238,0.2)',
                color: 'rgba(34,211,238,0.8)',
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#22d3ee', boxShadow: '0 0 8px #22d3ee',
                  animation: 'pulse 2s ease-in-out infinite',
                  display: 'inline-block',
                }} />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm font-mono mb-2" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>
                HELLO, WORLD —
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-3"
                style={{ letterSpacing: '-0.03em' }}
              >
                <span style={{ color: 'rgba(255,255,255,0.95)' }}>Saahil</span>
                <br />
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(95deg, #22d3ee 0%, #3b82f6 60%, #818cf8 100%)' }}>
                  Vishwakarma
                </span>
              </h1>
            </motion.div>

            {/* Animated role */}
            <motion.div
              className="flex items-center gap-3 mb-6 h-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div style={{ width: 3, height: 28, borderRadius: 99, background: '#22d3ee', opacity: 0.7, flexShrink: 0 }} />
              <span className="text-xl md:text-2xl font-semibold" style={{ color: 'rgba(255,255,255,0.55)', minWidth: 220 }}>
                {role}
                <span style={{ color: '#22d3ee', marginLeft: 2, animation: 'blink 1s step-end infinite' }}>|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base leading-relaxed mb-10 max-w-md"
              style={{ color: 'rgba(255,255,255,0.45)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              I build fast, accessible, and visually sharp digital experiences — from polished UIs
              to well-structured APIs. Let&apos;s create something worth remembering.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm"
                style={{
                  background: 'linear-gradient(135deg, #0891b2, #1d4ed8)',
                  color: '#fff',
                  boxShadow: '0 0 0 1px rgba(34,211,238,0.2)',
                }}
                whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(34,211,238,0.25)' }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                }}
                whileHover={{ y: -2, background: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>

          {/* ── Right: Avatar ── */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>

              {/* Outer rotating ring */}
              {!reduce && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '1px solid transparent',
                    borderTopColor: 'rgba(34,211,238,0.5)',
                    borderRightColor: 'rgba(59,130,246,0.3)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 9, ease: 'linear' }}
                />
              )}

              {/* Inner rotating ring */}
              {!reduce && (
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    inset: 16,
                    border: '1px dashed rgba(34,211,238,0.2)',
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                />
              )}

              {/* Glow */}
              <div style={{
                position: 'absolute', inset: 20, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }} />

              {/* Photo frame */}
              <div style={{
                position: 'relative', width: 240, height: 240, borderRadius: '50%',
                overflow: 'hidden', zIndex: 10,
                border: '2px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 0 1px rgba(34,211,238,0.15), 0 20px 60px rgba(0,0,0,0.5)',
              }}>
                <Image
                  src="/profile_pic.jpg"
                  alt="Portrait of Saahil Vishwakarma"
                  fill
                  priority
                  className="object-cover"
                  sizes="240px"
                />
              </div>

              {/* Floating accent dot — top right */}
              <motion.div
                style={{
                  position: 'absolute', top: 28, right: 20,
                  width: 10, height: 10, borderRadius: '50%',
                  background: '#22d3ee', boxShadow: '0 0 16px #22d3ee',
                }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              />
              {/* Floating accent dot — bottom left */}
              <motion.div
                style={{
                  position: 'absolute', bottom: 36, left: 22,
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#818cf8', boxShadow: '0 0 12px #818cf8',
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        whileHover={{ color: 'rgba(255,255,255,0.6)' }}
      >
        <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          style={{
            width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(34,211,238,0.5), transparent)',
          }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.a>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.85)} }
      `}</style>
    </section>
  );
}