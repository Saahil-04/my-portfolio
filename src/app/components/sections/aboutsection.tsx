import { useEffect, useRef, useState } from 'react';
import FadeInUp from '../ui/fadeInUp';

const stats = [
  { label: 'Self-Taught', sub: 'Consistently learning & building', icon: '◈', accent: 'from-cyan-400 to-blue-500' },
  { label: '5+ Projects', sub: 'Built fullstack apps independently', icon: '◇', accent: 'from-blue-400 to-violet-500' },
  { label: 'Modern Stack', sub: 'Next.js · Prisma · FastAPI · PostgreSQL', icon: '◆', accent: 'from-violet-400 to-cyan-500' },
];

const traits = ['Frontend-focused', 'Detail-obsessed', 'Always shipping'];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [traitIndex, setTraitIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTraitIndex(i => (i + 1) % traits.length);
    }, 2000);
    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060b14 0%, #0a1628 60%, #060c18 100%)' }}
    >
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)',
          top: '-120px',
          right: '-100px',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          bottom: '40px',
          left: '-80px',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeInUp>
          <div className="flex items-center gap-5 mb-20">
            <div className="flex flex-col">
              <span
                className="text-xs font-mono tracking-[0.3em] uppercase mb-2"
                style={{ color: 'rgba(34,211,238,0.7)' }}
              >
                01 / Introduction
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                About{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #3b82f6)' }}
                >
                  Me
                </span>
              </h2>
            </div>
            <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.4), transparent)' }} />
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Left — Avatar column */}
          <div className="md:col-span-2">
            <FadeInUp delay={0.2}>
              <div className="relative w-fit">

                {/* Decorative corner brackets */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60" />

                {/* Avatar frame */}
                <div
                  className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden"
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 0 60px rgba(34,211,238,0.1), inset 0 0 30px rgba(34,211,238,0.05)',
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{ background: 'linear-gradient(145deg, #22d3ee, #3b82f6, #6366f1)' }}
                  />
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -bottom-5 -right-5 px-4 py-2 rounded-xl text-sm font-semibold"
                  style={{
                    background: 'rgba(10,22,40,0.95)',
                    border: '1px solid rgba(34,211,238,0.25)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(12px)',
                    color: '#22d3ee',
                  }}
                >
                  Open to work ✦
                </div>
              </div>

              {/* Rotating trait pill */}
              <div className="mt-10 flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#22d3ee' }}
                />
                <span
                  key={traitIndex}
                  className="text-sm font-mono"
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    animation: 'fadeSlide 0.4s ease',
                  }}
                >
                  {traits[traitIndex]}
                </span>
              </div>
            </FadeInUp>
          </div>

          {/* Right — Content column */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <FadeInUp delay={0.35}>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ letterSpacing: '-0.02em' }}
              >
                Crafting Digital{' '}
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>Experiences</span>
              </h3>
            </FadeInUp>

            <FadeInUp delay={0.45}>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.97rem' }}>
                I&apos;m a curious builder at heart — someone who loves turning ideas into sleek, functional web experiences.
                My journey in tech began when I was just a teenager, and I&apos;ve been passionate about creating digital
                experiences ever since.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.52}>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.97rem' }}>
                I hold a <span style={{ color: '#22d3ee' }}>Bachelor&apos;s in Computer Applications</span> and work
                comfortably across the stack — but I light up most when crafting front-end experiences that feel intuitive
                and smooth. I&apos;m the dev who savors the little wins: squashing a tricky bug, polishing a button
                animation, or watching clean data flow through a well-structured API.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.59}>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem' }}>
                Off the keyboard, you&apos;ll find me on the court, sketching doodles, or chasing new tools down rabbit holes.
                Lifelong learning is the only mode I know.
              </p>
            </FadeInUp>

            {/* Stat cards */}
            <FadeInUp delay={0.7}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className="relative p-4 rounded-xl cursor-default transition-all duration-300"
                    style={{
                      background: activeIndex === i
                        ? 'rgba(34,211,238,0.07)'
                        : 'rgba(255,255,255,0.03)',
                      border: activeIndex === i
                        ? '1px solid rgba(34,211,238,0.25)'
                        : '1px solid rgba(255,255,255,0.07)',
                      transform: activeIndex === i ? 'translateY(-3px)' : 'translateY(0)',
                      boxShadow: activeIndex === i ? '0 12px 40px rgba(34,211,238,0.08)' : 'none',
                    }}
                  >
                    <span
                      className={`text-xl bg-gradient-to-br ${stat.accent} text-transparent bg-clip-text block mb-2`}
                    >
                      {stat.icon}
                    </span>
                    <h4 className="font-bold text-sm text-white mb-1">{stat.label}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;