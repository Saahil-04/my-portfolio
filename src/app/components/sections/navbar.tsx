import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import SocialLinks from '../ui/socialLinks';

type NavbarProps = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  // Transform values based on scroll
  const navbarY = useTransform(scrollY, [0, 100], [0, 0]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0.3, 0.8]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.2]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div
      className="fixed w-full z-50 flex justify-center transition-all duration-500"
      style={{ y: navbarY }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.nav
        className={`transition-all duration-500 ${
          isScrolled 
            ? 'w-[95%] max-w-4xl mt-4 mx-4' 
            : 'w-full max-w-7xl mt-0'
        }`}
        animate={{
          width: isScrolled ? "95%" : "100%",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled
              ? 'bg-black/60 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/10 shadow-2xl shadow-cyan-500/10'
              : 'backdrop-blur-md bg-black/30 px-6 py-4'
          }`}
          animate={{
            borderRadius: isScrolled ? 16 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
        <motion.div
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          animate={{
            fontSize: isScrolled ? "1.125rem" : "1.25rem"
          }}
          transition={{ duration: 0.3 }}
        >
          Portfolio
        </motion.div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id 
                  ? 'text-cyan-400 bg-cyan-400/10' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: activeSection === item.id ? "rgba(34, 211, 238, 0.15)" : "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                fontSize: isScrolled ? "0.875rem" : "1rem"
              }}
              transition={{ duration: 0.3 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  layoutId="navbar-underline"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          animate={{
            scale: isScrolled ? 0.9 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <SocialLinks 
            variant="navbar" 
            only={['GitHub', 'LinkedIn', 'Twitter']} 
            iconSize={isScrolled ? 18 : 20} 
          />
        </motion.div>
              </motion.div>
      </motion.nav>

      {/* Mobile Menu Button - only show when scrolled */}
      {isScrolled && (
        <motion.button
          className="md:hidden fixed top-6 right-6 bg-black/60 backdrop-blur-xl rounded-full p-3 border border-white/10 shadow-lg z-60"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      )}
    </motion.div>
  );
};

export default Navbar;