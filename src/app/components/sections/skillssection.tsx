import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

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
    <section id="skills" className="py-20 ">
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

export default SkillsSection;