import { motion } from 'framer-motion';

const JourneySection = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Bachelor of Computer Applications',
      company: 'Tilak Maharashtra Vidyapeeeth, Pune',
      description: 'Graduated with honors. Specialized in web technologies.',
    },
    {
      year: '2024',
      title: 'FullStack Developer Intern',
      company: 'PPCRC',
      description: 'Collabarated on Replicating Atlasian Jira Table.',
    },
  ];

  return (
    <section id="journey" className="py-20">
      <div className="container max-w-full mx-auto px-6">
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
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-600 transform -translate-x-1/2 hidden md:block rounded-full shadow-lg"></div>
          
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
      <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg"></div>

      {/* Left Box (Only visible when index is even) */}
      {index % 2 !== 0 ? (
        <>
          <div className="md:w-5/12 mb-4 md:mb-0">
            <div className="bg-gradient-to-br from-cyan-500/40 to-blue-600/30 p-1 rounded-2xl shadow-xl md:ml-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <span className="text-sm text-cyan-300 font-semibold tracking-wide">{milestone.year}</span>
                <h3 className="text-xl font-bold mt-2 text-white/90">{milestone.title}</h3>
                <h4 className="text-gray-300 mb-3">{milestone.company}</h4>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/12"></div> {/* Spacer */}
          <div className="md:w-5/12 hidden md:block"></div>
        </>
      ) : (
        <>
          <div className="md:w-5/12 hidden md:block"></div>
          <div className="md:w-2/12"></div> {/* Spacer */}
          <div className="md:w-5/12 mb-4 md:mb-0">
            <div className="bg-gradient-to-br from-cyan-500/40 to-blue-600/30 p-1 rounded-2xl shadow-xl md:mr-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <span className="text-sm text-cyan-300 font-semibold tracking-wide">{milestone.year}</span>
                <h3 className="text-xl font-bold mt-2 text-white/90">{milestone.title}</h3>
                <h4 className="text-gray-300 mb-3">{milestone.company}</h4>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;