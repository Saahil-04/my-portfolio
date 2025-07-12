import FadeInUp from '../ui/fadeInUp';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container max-w-full mx-auto px-6">
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

              </div>
            </FadeInUp>
          </div>

          <div className="md:w-2/3">
            <FadeInUp delay={0.4}>
              <h3 className="text-2xl font-bold mb-6">Crafting Digital Experiences</h3>
            </FadeInUp>
            <FadeInUp delay={0.5}>
              <p className="text-gray-300 mb-4">
                I&apos;m a curious builder at heart, someone who loves turning ideas into sleek, functional web experiences. My journey in tech began when I was
                just a teenager, and I&apos;ve been passionate about creating digital experiences ever since.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <p className="text-gray-300 mb-4">
                I hold a Bachelor&apos;s degree in Computer Applications and can work comfortably across the stack—but I light up most when crafting front-end experiences that feel intuitive and smooth. I&apos;m the kind of dev who enjoys the little wins—debugging a tricky bug, polishing a button animation, or watching clean data flow through a well-structured API.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.7}>
              <p className="text-gray-300 mb-6">
                When I&apos;m not coding, you can find me playing my fav sport, drawing sketches and doodles,
                or usually exploring new tools. I believe in lifelong learning and constantly
                strive to expand my skill set.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.8}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-cyan-400">Self-Taught</h4>
                  <p>Consistently learning and building</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-cyan-400">5+ Projects</h4>
                  <p>Built fullstack apps independently</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-cyan-400">Modern Stack</h4>
                  <p>Next.js · Prisma · FastAPI · PostgreSQL</p>
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