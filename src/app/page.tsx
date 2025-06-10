// src/app/page.js
"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiExternalLink, FiSend } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

export default function Portfolio() { 
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'journey', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-x-hidden">
      <Head>
        <title>My Portfolio | Senior Developer</title>
        <meta name="description" content="Professional portfolio showcasing my skills and projects" />
      </Head>
      
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <HeroSection />
      
      <AboutSection />
      
      <ProjectsSection />
      
      <JourneySection />
      
      <SkillsSection />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
}

type NavbarProps = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

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

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-[120px] opacity-15 animate-pulse-slower" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500 rounded-full filter blur-[90px] opacity-15 animate-pulse-medium" />
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-16 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
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
              Hi, I'm Alex Johnson
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Senior Full Stack Developer
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I build exceptional digital experiences that are fast, accessible, 
              visually appealing, and responsive. Let's create something amazing together.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
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
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 relative">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-full h-full" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-500 animate-spin-slow"></div>
              <div className="absolute -inset-4 rounded-full border-4 border-transparent border-b-cyan-400 border-l-blue-500 animate-spin-slow delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-xl overflow-hidden border-4 border-white/10">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-full h-full" />
              </div>
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 -z-10 rotate-3"></div>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Crafting Digital Experiences</h3>
            <p className="text-gray-300 mb-4">
              With over 7 years of experience in web development, I specialize in building modern, 
              responsive, and user-friendly web applications. My journey in tech began when I was 
              just a teenager, and I've been passionate about creating digital experiences ever since.
            </p>
            <p className="text-gray-300 mb-4">
              I hold a Bachelor's degree in Computer Science and have worked with various companies 
              ranging from startups to large enterprises. My expertise spans across the entire stack, 
              but I have a particular fondness for frontend development and creating visually 
              stunning interfaces.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, 
              or contributing to open-source projects. I believe in lifelong learning and constantly 
              strive to expand my skill set.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-bold text-cyan-400">7+ Years</h4>
                <p>Experience</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-bold text-cyan-400">50+ Projects</h4>
                <p>Completed</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-bold text-cyan-400">20+ Clients</h4>
                <p>Worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with payment integration and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media managers with data visualization.',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-cyan-700/30 to-blue-700/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a href={project.github} className="bg-gray-900/80 p-2 rounded-full hover:bg-cyan-700 transition-colors">
                    <FiGithub />
                  </a>
                  <a href={project.live} className="bg-gray-900/80 p-2 rounded-full hover:bg-cyan-700 transition-colors">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JourneySection = () => {
  const milestones = [
    {
      year: '2021 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading a team of developers to build enterprise-level applications.',
    },
    {
      year: '2019 - 2021',
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed responsive user interfaces using React and Redux.',
    },
    {
      year: '2018',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      description: 'Graduated with honors. Specialized in web technologies.',
    },
    {
      year: '2017',
      title: 'Web Development Intern',
      company: 'StartUp Hub',
      description: 'Built and maintained client websites.',
    },
  ];

  return (
    <section id="journey" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-600 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                
                <div className="md:w-5/12 mb-4 md:mb-0">
                  <div className={`bg-gradient-to-r md:bg-gradient-to-l from-cyan-500 to-blue-500 p-0.5 rounded-lg ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <span className="text-sm text-cyan-300">{milestone.year}</span>
                      <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                      <h4 className="text-gray-300 mb-3">{milestone.company}</h4>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/12"></div> {/* Spacer */}
                
                <div className="md:w-5/12 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <FaReact className="text-cyan-400" />,
      items: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    {
      category: 'Backend',
      icon: <FaNodeJs className="text-green-500" />,
      items: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="text-yellow-500" />,
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'Redis', level: 70 },
      ]
    },
    {
      category: 'Tools',
      icon: <FaTools className="text-purple-500" />,
      items: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 },
        { name: 'Testing', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-3">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-cyan-400 mt-1 mr-4">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:contact@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-cyan-400 mt-1 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <FiGithub size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <FiLinkedin size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <FiTwitter size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-900/30 text-green-400 rounded-lg">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold disabled:opacity-70"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Portfolio</h3>
            <p className="text-gray-400">Senior Full Stack Developer</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FiTwitter size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
              <FiMail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          &copy; {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
};