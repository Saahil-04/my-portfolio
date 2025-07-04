import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

const SkillsSection = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <FaReact className="text-cyan-400" />,
      items: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 70 },
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
        { name: 'NestJS', level: 90 },
        { name: 'FastAPI', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'RESTful APIs', level: 90 },

      ]
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="text-yellow-500" />,
      items: [

        { name: 'PostgreSQL', level: 85 },
        { name: 'PrismaORM', level: 80 }
      ]
    },
    {
      category: 'Tools',
      icon: <FaTools className="text-purple-500" />,
      items: [
        { name: 'Git', level: 90 },
        { name: 'Github', level: 75 },
        { name: 'Postman', level: 70 }


      ]
    }
  ];
  return (
    <section id="skills" className="py-20 ">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
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
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl border border-white/20 p-8 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-3 drop-shadow-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-white/90">{skillGroup.category}</h3>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg"
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