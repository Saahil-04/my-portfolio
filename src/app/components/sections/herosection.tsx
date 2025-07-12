import { motion } from 'framer-motion';
import Image from 'next/image'
import FadeInUp from '../ui/fadeInUp';
import { useReducedMotion } from 'framer-motion'
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  const typedText = "Hi, I'm Saahil Vishwakarma";
  const shouldReduceMotion = useReducedMotion()
  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-16">
      <div className="container mx-auto px-6 py-24 relative z-10 max-w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-16 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              animate={{
                backgroundImage: [
                  'linear-gradient(45deg, #67e8f9, #0ea5e9)',
                  'linear-gradient(45deg, #0ea5e9, #6366f1)',
                  'linear-gradient(45deg, #6366f1, #8b5cf6)',
                  'linear-gradient(45deg, #8b5cf6, #ec4899)',
                  'linear-gradient(45deg, #ec4899, #67e8f9)',
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '300% 300%'
              }}
            >
              <Typewriter
                options={{
                  strings: ["Hi, I'm Saahil Vishwakarma", "Welcome to My Portfolio!"],
                  autoStart: true,
                  loop: false,
                  delay: 60,
                  deleteSpeed: 20,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(typedText)
                    .start();
                }}
              />
            </motion.h1>

            <FadeInUp delay={shouldReduceMotion ? 0 : 0.5}>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Full Stack Developer</h2>
            </FadeInUp>

            <FadeInUp delay={shouldReduceMotion ? 0 : 0.5}>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                I build exceptional digital experiences that are fast, accessible,
                visually appealing, and responsive. Let&apos;s create something amazing together.
              </p>
            </FadeInUp>

            <FadeInUp delay={shouldReduceMotion ? 0 : 0.9}>
              <div className="flex space-x-4">
                <motion.a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </div>
            </FadeInUp>
          </motion.div>

          {/* Profile image with simple static border */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent shadow-lg z-10">
                <Image
                  src="/profile_pic.jpg"
                  alt="Portrait of Saahil Vishwakarma"
                  width={400}
                  height={400}
                  priority
                  className="rounded-xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-500"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-4 rounded-full border-6 border-transparent border-b-cyan-400 border-l-blue-500"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "anticipate" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
      <span className="mb-2 mt-6">Scroll Down</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </a>
      </motion.div >
    </section >
  );
};

export default HeroSection;