import FadeInUp from '../ui/fadeInUp';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
          </div>
        </FadeInUp>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <FadeInUp delay={0.2}>
              <div className="relative">
                <div className="w-64 h-64 rounded-xl overflow-hidden border-4 border-white/10">
                  <div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-full h-full" />
                </div>
                {/* <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 -z-10 spin rotate-5"></div> */}
              </div>
            </FadeInUp>
          </div>

          <div className="md:w-2/3">
            <FadeInUp delay={0.4}>
              <h3 className="text-2xl font-bold mb-6">Crafting Digital Experiences</h3>
            </FadeInUp>
            <FadeInUp delay={0.5}>
              <p className="text-gray-300 mb-4">
                With over 7 years of experience in web development, I specialize in building modern, 
                responsive, and user-friendly web applications. My journey in tech began when I was 
                just a teenager, and I've been passionate about creating digital experiences ever since.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <p className="text-gray-300 mb-4">
                I hold a Bachelor's degree in Computer Science and have worked with various companies 
                ranging from startups to large enterprises. My expertise spans across the entire stack, 
                but I have a particular fondness for frontend development and creating visually 
                stunning interfaces.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.7}>
              <p className="text-gray-300 mb-6">
                When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, 
                or contributing to open-source projects. I believe in lifelong learning and constantly 
                strive to expand my skill set.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.8}>
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
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;