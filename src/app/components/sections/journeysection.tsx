'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Milestone = {
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'education' | 'work';
};

const milestones: Milestone[] = [
  {
    year: '2025',
    title: 'Bachelor of Computer Applications',
    company: 'Tilak Maharashtra Vidyapeeth, Pune',
    description: 'Graduated with honors. Specialized in web technologies and modern application development.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'FullStack Developer Intern',
    company: 'PPCRC',
    description: 'Collaborated on replicating an Atlassian Jira table — working across the stack to deliver pixel-accurate, interactive UI components.',
    type: 'work',
  },
];

const typeConfig = {
  education: {
    label: 'Education',
    dot: '#22d3ee',
    badge: { bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.25)', color: '#22d3ee' },
  },
  work: {
    label: 'Experience',
    dot: '#818cf8',
    badge: { bg: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.25)', color: '#818cf8' },
  },
};

function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;
  const config = typeConfig[milestone.type];

  return (
    <div ref={ref} className="relative grid md:grid-cols-[1fr_auto_1fr] gap-0 items-start">

      {/* Left slot */}
      <div className={`${isLeft ? 'md:pr-10' : 'hidden md:block'}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card milestone={milestone} config={config} align="right" />
          </motion.div>
        )}
      </div>

      {/* Centre dot + line connector */}
      <div className="flex flex-col items-center gap-0 relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.05, type: 'spring', stiffness: 400, damping: 20 }}
          style={{
            width: 16, height: 16, borderRadius: '50%',
            background: config.dot,
            boxShadow: `0 0 12px ${config.dot}80`,
            border: '2px solid rgba(6,11,20,1)',
            zIndex: 10, marginTop: 24,
          }}
        />
      </div>

      {/* Right slot */}
      <div className={`${!isLeft ? 'md:pl-10' : 'hidden md:block'}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card milestone={milestone} config={config} align="left" />
          </motion.div>
        )}
      </div>

      {/* Mobile card (shown below md) */}
      <div className="col-span-full md:hidden pl-6 mt-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card milestone={milestone} config={config} align="left" />
        </motion.div>
      </div>
    </div>
  );
}

function Card({
  milestone,
  config,
  align,
}: {
  milestone: Milestone;
  config: typeof typeConfig['education'];
  align: 'left' | 'right';
}) {
  return (
    <div
      className="group p-5 rounded-2xl transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        textAlign: align === 'right' ? 'right' : 'left',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.045)';
        (e.currentTarget as HTMLDivElement).style.borderColor = `${config.badge.border}`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px rgba(0,0,0,0.25)`;
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.025)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      <div className={`flex items-center gap-2 mb-3 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <span style={{
          padding: '2px 9px', borderRadius: '20px', fontSize: '0.68rem',
          fontFamily: 'monospace', letterSpacing: '0.1em', textTransform: 'uppercase',
          background: config.badge.bg, border: `1px solid ${config.badge.border}`, color: config.badge.color,
        }}>
          {config.label}
        </span>
        <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
          {milestone.year}
        </span>
      </div>

      <h3 className="text-lg font-bold mb-1 leading-snug" style={{ color: 'rgba(255,255,255,0.9)', letterSpacing: '-0.01em' }}>
        {milestone.title}
      </h3>
      <p className="text-sm mb-3" style={{ color: config.badge.color, opacity: 0.8 }}>
        {milestone.company}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
        {milestone.description}
      </p>
    </div>
  );
}

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060b14 0%, #08121f 60%, #060c18 100%)' }}
    >
      {/* Ambient orb */}
      <div className="pointer-events-none absolute" style={{
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
        top: '10%', left: '50%', transform: 'translateX(-50%)',
      }} />
      {/* Grid */}
      <div className="pointer-events-none absolute inset-0" style={{
        opacity: 0.025,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="flex items-center gap-5 mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex flex-col">
            <span className="text-xs font-mono tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(34,211,238,0.7)' }}>
              03 / Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              My{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #3b82f6)' }}>
                Journey
              </span>
            </h2>
          </div>
          <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.4), transparent)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div
            className="hidden md:block absolute top-6 bottom-6 w-px"
            style={{
              left: '50%', transform: 'translateX(-50%)',
              background: 'linear-gradient(to bottom, rgba(34,211,238,0.5), rgba(59,130,246,0.3), transparent)',
            }}
          />
          {/* Vertical line — mobile */}
          <div
            className="md:hidden absolute top-6 bottom-6 w-px"
            style={{
              left: '7px',
              background: 'linear-gradient(to bottom, rgba(34,211,238,0.5), rgba(59,130,246,0.3), transparent)',
            }}
          />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <MilestoneCard key={i} milestone={m} index={i} />
            ))}
          </div>
        </div>

        {/* End cap */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            padding: '10px 24px', borderRadius: '30px', fontSize: '0.8rem',
            fontFamily: 'monospace', letterSpacing: '0.08em',
            background: 'rgba(34,211,238,0.07)',
            border: '1px solid rgba(34,211,238,0.2)',
            color: 'rgba(34,211,238,0.6)',
          }}>
            ✦ &nbsp; Still writing this story
          </div>
        </motion.div>
      </div>
    </section>
  );
}