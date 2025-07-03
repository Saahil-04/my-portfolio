'use client';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import React, { useState, useRef, useEffect, useCallback } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  src: string;
  github: string;
  live: string;
};

const ProjectCard = React.memo(function ProjectCard({
  project,
  index,
  activeIndex,
}: {
  project: Project;
  index: number;
  activeIndex: number;
}) {
  return (
    <motion.div
      key={project.id}
      data-index={index}
      className="flex-shrink-0 w-full snap-center focus:outline-none"
      tabIndex={activeIndex === index ? 0 : -1}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      aria-label={`Project ${index + 1}: ${project.title}`}
      aria-roledescription="slide"
    >
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Project image */}
          <motion.div
            className="w-full lg:w-1/2 relative" 
            whileHover={{
              y: -5,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
          >
            <motion.div
              className="relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden border border-gray-700 shadow-lg sm:shadow-2xl"
              whileHover={{
                scale: 1.01,
                boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
                priority={activeIndex === index}
                loading={activeIndex === index ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </motion.div>
            
            {/* Decorative floating elements - hidden on mobile for performance */}
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500 rounded-full filter blur-[15px] sm:blur-[20px] opacity-40 sm:opacity-60 z-0 hidden sm:block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-purple-500 rounded-full filter blur-[20px] sm:blur-[30px] opacity-30 sm:opacity-40 z-0 hidden sm:block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
          
          {/* Project content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            >
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent break-words"
                whileHover={{
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p
                className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-md sm:rounded-lg text-xs sm:text-sm whitespace-nowrap"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 15,
                      delay: 0.4 + (i * 0.05)
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400, damping: 8 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-cyan-900/30 transition-colors text-sm sm:text-base min-h-[44px] sm:min-h-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    delay: 0.5
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -1,
                    transition: { type: "spring", stiffness: 400, damping: 8 }
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { type: "spring", stiffness: 400, damping: 8 }
                  }}
                >
                  <FiGithub className="text-base sm:text-lg" /> 
                  <span>GitHub</span>
                </motion.a>
                
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base min-h-[44px] sm:min-h-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    delay: 0.6
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -1,
                    boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)",
                    transition: { type: "spring", stiffness: 400, damping: 8 }
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { type: "spring", stiffness: 400, damping: 8 }
                  }}
                >
                  <FiExternalLink className="text-base sm:text-lg" /> 
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const NavigationDots = React.memo(({ projects, activeIndex, setActiveIndex }: {
  projects: Project[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
}) => (
  <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
    {projects.map((_, index) => (
      <motion.button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all min-h-[20px] min-w-[20px] sm:min-h-auto sm:min-w-auto flex items-center justify-center ${
          activeIndex === index
            ? 'bg-cyan-500'
            : 'bg-gray-700 hover:bg-gray-500'
        }`}
        aria-label={`Go to project ${index + 1}`}
        animate={{
          scale: activeIndex === index ? 1.2 : 1,
          opacity: activeIndex === index ? 1 : 0.7
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 15
        }}
      >
        <span className="sr-only">Project {index + 1}</span>
      </motion.button>
    ))}
  </div>
));

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'SaranshAI - AI Summarizer',
      description: 'Collaborated on a full-featured summarizer for text, url, images and pdfs.',
      technologies: ['Reactjs', 'Nestjs', 'Python', 'PostgreSQL', 'Prisma ORM', 'Material UI'],
      src: '/SaranshAI.png',
      github: 'https://github.com/Saahil-04/Saransh-AI',
      live: 'https://github.com/Saahil-04/Saransh-AI',
    },
    {
      id: 2,
      title: 'Royal Rolling Shutter',
      description: 'A collaborative Portfolio website for a Shutter Shop.',
      technologies: ['Reactjs', 'Material UI', 'EmailJS', 'SEO'],
      src: '/RoyalRollingShutters.png',
      github: 'https://github.com/Nayum-khan/RoyalRollingShutter',
      live: 'https://www.royalrollingshutter.com/',
    },
    {
      id: 3,
      title: 'Movie Recommendor',
      description: 'Movie Recommendation System based on certain mood filters.',
      technologies: ['React', 'Material UI', 'Python', 'TMDB API'],
      src: '/MovieRecommendor.png',
      github: 'https://github.com/Saahil-04/Movie-Recommendor',
      live: 'https://github.com/Saahil-04/Movie-Recommendor',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });
  const isDraggingRef = useRef(false);
  const touchStartX = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll to active project
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const projectWidth = container.clientWidth;
    container.scrollTo({
      left: activeIndex * projectWidth,
      behavior: 'smooth'
    });

    // Focus management for accessibility
    const activeSlide = container.querySelector(`[data-index="${activeIndex}"]`);
    if (activeSlide instanceof HTMLElement) {
      activeSlide.focus({ preventScroll: true });
    }
  }, [activeIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setActiveIndex(prev => (prev + 1) % projects.length);
    } else if (e.key === 'ArrowLeft') {
      setActiveIndex(prev => (prev - 1 + projects.length) % projects.length);
    } else if (e.key >= '1' && e.key <= '9') {
      const num = parseInt(e.key, 10) - 1;
      if (num < projects.length) setActiveIndex(num);
    }
  }, [projects.length]);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown, isMobile]);

  // Touch handling (memoized)
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDraggingRef.current = true;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const swipeThreshold = 50;

    if (Math.abs(diff) > swipeThreshold) {
      setActiveIndex(prev =>
        (prev + (diff > 0 ? 1 : -1) + projects.length) % projects.length
      );
    }
  }, [projects.length]);

  // Wheel handling with debouncing (disabled on mobile)
  const handleWheel = useCallback((e: WheelEvent) => {
    if (isMobile || !containerRef.current || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    if (wheelTimeout.current) return;
    const direction = e.deltaY > 0 ? 1 : -1;
    setActiveIndex(prev => (prev + direction + projects.length) % projects.length);
    wheelTimeout.current = setTimeout(() => {
      wheelTimeout.current = null;
    }, 400);
  }, [projects.length, isMobile]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [handleWheel, isMobile]);

  return (
    <section 
      id="projects" 
      className="py-12 sm:py-16 lg:py-20 max-w-full relative overflow-hidden min-h-screen" 
      aria-label="Projects showcase"
      ref={sectionRef}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500 rounded-full filter blur-[60px] sm:blur-[100px] opacity-5 sm:opacity-10 animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500 rounded-full filter blur-[80px] sm:blur-[120px] opacity-5 sm:opacity-10 animate-pulse-slower" />
      </div>

      {/* Header */}
      <motion.div
        className="relative z-20 pb-6 sm:pb-8 lg:pb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Projects</span>
          </h2>
          <NavigationDots projects={projects} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
      </motion.div>

      {/* Horizontal carousel container */}
      <div className="relative z-10">
        {/* Navigation arrows - hidden on mobile */}
        <motion.button
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full p-2 sm:p-3 hover:bg-cyan-700 transition-colors hidden sm:block"
          onClick={() => setActiveIndex(prev => (prev - 1 + projects.length) % projects.length)}
          aria-label="Previous project"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        <motion.button
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full p-2 sm:p-3 hover:bg-cyan-700 transition-colors hidden sm:block"
          onClick={() => setActiveIndex(prev => (prev + 1) % projects.length)}
          aria-label="Next project"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        {/* Projects carousel */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar w-full max-w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Projects carousel"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>

      {/* Mobile-friendly scroll indicator */}
      {isInView && (
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400 z-30 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          <p className="mb-2 text-sm sm:text-base">
            {isMobile ? 'Swipe to view projects' : 'Scroll horizontally to view projects'}
          </p>
          <motion.div
            animate={{ x: [-5, 5] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              type: "spring",
              stiffness: 300,
              damping: 10,
              duration: 1.5
            }}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* Add CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;