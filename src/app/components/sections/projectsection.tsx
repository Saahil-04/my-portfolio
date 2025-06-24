import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const ProjectsSection = () => {

  const projects = [
    {
      id: 1,
      title: 'SaranshAI - AI Summarizer',
      description: 'Collaborated on a full-featured summarizer for text,url,images and pdfs.',
      technologies: ['Reactjs', 'Nestjs', 'Python', 'PostgreSQL', 'Prisma ORM', 'MAterial UI'],
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

  return (
    <section id="projects" className="py-20">
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
                  <Image
                    src={project.src}
                    alt="Project Picture"
                    // fill 
                    width={400}
                    height={400}
                    priority // for above-the-fold
                    className="w-full h-full object-cover rounded-xl"
                  />

                </div>
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

export default ProjectsSection;