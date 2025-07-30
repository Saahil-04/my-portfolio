import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiFastapi,
  SiPostgresql,
  SiPrisma,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    icon: <FaReact className="text-cyan-400" />,
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "Backend",
    icon: <FaNodeJs className="text-green-500" />,
    items: [
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-yellow-500" />,
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
    ],
  },
  {
    category: "Tools",
    icon: <FaTools className="text-purple-500" />,
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
        </motion.div>

        <div className="space-y-20">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col sm:flex-row gap-10 sm:gap-12 items-start hover:shadow-cyan-500/20 transition-shadow duration-500"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Left: Category */}
              <div className="flex items-center sm:w-1/3 w-full justify-center sm:justify-start text-center sm:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold">
                  {group.category}
                </h3>
              </div>

              {/* Right: Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full sm:w-2/3">
                {group.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative  overflow-hidden rounded-2xl"
                  >
                    {/* Glassmorphic border effect */}
                    <div className="absolute inset-0 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl border border-cyan-400 bg-white/10 backdrop-blur-md z-0" />

                    {/* Icon + Label */}
                    <div className="relative z-10 flex flex-col items-center p-4 sm:p-6">
                      <div className="text-4xl sm:text-5xl text-cyan-300 transition-transform duration-300 drop-shadow-lg group-hover:scale-125 group-hover:text-white">
                        {skill.icon}
                      </div>
                      <span className="mt-3 text-sm sm:text-base text-white/90 font-medium text-center group-hover:text-cyan-300 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
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
