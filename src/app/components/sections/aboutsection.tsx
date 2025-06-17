import { motion } from 'framer-motion';

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

export default AboutSection;