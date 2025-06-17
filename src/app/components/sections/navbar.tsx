import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

type NavbarProps = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

type SocialIconProps = {
  icon: React.ReactNode;
  url: string;
};

const SocialIcon = ({ icon, url }: SocialIconProps) => (
  <motion.a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-gray-800 hover:bg-cyan-700 transition-colors"
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className="fixed w-full z-50 py-4 px-6 backdrop-blur-md bg-black/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-1 py-2 ${activeSection === item.id ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                  layoutId="navbar-underline"
                />
              )}
            </motion.button>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <SocialIcon icon={<FiGithub />} url="https://github.com" />
          <SocialIcon icon={<FiLinkedin />} url="https://linkedin.com" />
          <SocialIcon icon={<FiTwitter />} url="https://twitter.com" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;