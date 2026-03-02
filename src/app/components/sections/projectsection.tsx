'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  src: string;
  github: string;
  live: string;
  year: string;
  role: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'SaranshAI',
    description: 'Collaborated on a full-featured summarizer for text, URLs, images and PDFs — bringing together multiple AI pipelines into a single clean interface.',
    technologies: ['React.js', 'Nest.js', 'Python', 'PostgreSQL', 'Prisma ORM', 'Material UI'],
    src: '/SaranshAI.png',
    github: 'https://github.com/Saahil-04/Saransh-AI',
    live: 'https://github.com/Saahil-04/Saransh-AI',
    year: '2024',
    role: 'Fullstack',
  },
  {
    id: 2,
    title: 'Royal Rolling Shutter',
    description: 'A polished portfolio website for a shutter business — SEO-optimised with contact integration and a clean, conversion-focused layout.',
    technologies: ['React.js', 'Material UI', 'EmailJS', 'SEO'],
    src: '/RoyalRollingShutters.png',
    github: 'https://github.com/Nayum-khan/RoyalRollingShutter',
    live: 'https://www.royalrollingshutter.com/',
    year: '2024',
    role: 'Frontend',
  },
  {
    id: 3,
    title: 'Movie Recommendor',
    description: 'A mood-based movie recommendation engine that filters TMDB data through custom logic to surface films that match how you feel right now.',
    technologies: ['React', 'Material UI', 'Python', 'TMDB API'],
    src: '/MovieRecommendor.png',
    github: 'https://github.com/Saahil-04/Movie-Recommendor',
    live: 'https://github.com/Saahil-04/Movie-Recommendor',
    year: '2023',
    role: 'Fullstack',
  },
  {
    id: 4,
    title: 'PostureSense',
    description: 'AI-powered posture analysis using computer vision — detects and flags improper posture in real-time via webcam or uploaded video.',
    technologies: ['React', 'TailwindCSS', 'Python', 'FastAPI', 'MediaPipe', 'OpenCV'],
    src: '/PostureSense.png',
    github: 'https://github.com/Saahil-04/PostureSense',
    live: 'https://posture-sense-blond.vercel.app/',
    year: '2024',
    role: 'Fullstack',
  },
];

const roleColors: Record<string, string> = {
  Fullstack: 'rgba(34,211,238,0.15)',
  Frontend: 'rgba(139,92,246,0.15)',
};
const roleBorder: Record<string, string> = {
  Fullstack: 'rgba(34,211,238,0.35)',
  Frontend: 'rgba(139,92,246,0.35)',
};
const roleText: Record<string, string> = {
  Fullstack: '#22d3ee',
  Frontend: '#a78bfa',
};

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const scrollPrev = useCallback(() => {
    setDirection(-1);
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    setDirection(1);
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  const project = projects[activeIndex];

  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060c18 0%, #08111f 50%, #060b14 100%)' }}
      aria-label="Projects Showcase"
    >
      {/* Ambient background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
          top: '-100px', right: '-150px',
        }} />
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          bottom: '0px', left: '-100px',
        }} />
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          className="flex items-center gap-5 mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex flex-col">
            <span className="text-xs font-mono tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(34,211,238,0.7)' }}>
              02 / Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Selected{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #3b82f6)' }}>
                Projects
              </span>
            </h2>
          </div>
          <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.4), transparent)' }} />
          <span className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>
            {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* Main card area */}
        <div className="relative">
          <div className="embla overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="embla__container flex">
              {projects.map((p, index) => (
                <div key={p.id} className="embla__slide flex-[0_0_100%] min-w-0">
                  <div className="grid lg:grid-cols-2 gap-0 min-h-120"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Image panel */}
                    <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
                      <Image
                        src={p.src}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority={activeIndex === index}
                        loading={activeIndex === index ? 'eager' : 'lazy'}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Overlay gradient */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to right, transparent 60%, rgba(6,11,20,0.95) 100%), linear-gradient(to top, rgba(6,11,20,0.6) 0%, transparent 40%)',
                      }} />
                      {/* Year badge */}
                      <div style={{
                        position: 'absolute', top: 16, left: 16,
                        padding: '4px 12px', borderRadius: '20px',
                        background: 'rgba(6,11,20,0.8)', backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontSize: '0.75rem', fontFamily: 'monospace',
                        color: 'rgba(255,255,255,0.5)',
                      }}>
                        {p.year}
                      </div>
                    </div>

                    {/* Content panel */}
                    <div className="flex flex-col justify-between p-8 lg:p-10">
                      <div>
                        {/* Role tag */}
                        <div className="flex items-center gap-3 mb-5">
                          <span style={{
                            padding: '3px 10px', borderRadius: '20px', fontSize: '0.7rem',
                            fontFamily: 'monospace', letterSpacing: '0.1em', textTransform: 'uppercase',
                            background: roleColors[p.role] || 'rgba(255,255,255,0.08)',
                            border: `1px solid ${roleBorder[p.role] || 'rgba(255,255,255,0.1)'}`,
                            color: roleText[p.role] || 'rgba(255,255,255,0.5)',
                          }}>
                            {p.role}
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                          {p.title}
                        </h3>

                        <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.96rem' }}>
                          {p.description}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {p.technologies.map((tech) => (
                            <span key={tech} style={{
                              padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem',
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              color: 'rgba(255,255,255,0.45)',
                              fontFamily: 'monospace',
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-3">
                        <motion.a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.7)',
                          }}
                          whileHover={{ y: -2, background: 'rgba(255,255,255,0.09)' }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <FiGithub />
                          <span>Source</span>
                        </motion.a>

                        <motion.a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
                          style={{
                            background: 'linear-gradient(135deg, #0891b2, #1d4ed8)',
                            color: '#fff',
                            boxShadow: '0 0 0 1px rgba(34,211,238,0.2)',
                          }}
                          whileHover={{
                            y: -2,
                            boxShadow: '0 8px 30px rgba(34,211,238,0.25)',
                          }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <FiExternalLink />
                          <span>Live Demo</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel nav arrows */}
          <motion.button
            onClick={scrollPrev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              background: 'rgba(10,22,40,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              color: 'rgba(255,255,255,0.7)',
            }}
            whileHover={{ scale: 1.1, borderColor: 'rgba(34,211,238,0.4)', color: '#22d3ee' }}
            whileTap={{ scale: 0.94 }}
            aria-label="Previous project"
          >
            <FiArrowLeft size={18} />
          </motion.button>

          <motion.button
            onClick={scrollNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              background: 'rgba(10,22,40,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              color: 'rgba(255,255,255,0.7)',
            }}
            whileHover={{ scale: 1.1, borderColor: 'rgba(34,211,238,0.4)', color: '#22d3ee' }}
            whileTap={{ scale: 0.94 }}
            aria-label="Next project"
          >
            <FiArrowRight size={18} />
          </motion.button>
        </div>

        {/* Bottom nav row */}
        <div className="flex items-center justify-between mt-8">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to project ${i + 1}`}
                style={{
                  width: activeIndex === i ? 28 : 8,
                  height: 8,
                  borderRadius: 999,
                  background: activeIndex === i
                    ? 'linear-gradient(90deg, #22d3ee, #3b82f6)'
                    : 'rgba(255,255,255,0.12)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Project title preview strip */}
          <div className="hidden md:flex items-center gap-6">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => scrollTo(i)}
                className="text-xs font-mono transition-all duration-200"
                style={{
                  color: activeIndex === i ? '#22d3ee' : 'rgba(255,255,255,0.2)',
                  letterSpacing: '0.05em',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: activeIndex === i ? 'underline' : 'none',
                  textUnderlineOffset: '4px',
                }}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}