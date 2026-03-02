'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDatabase, FaTools,
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiNestjs,
  SiFastapi, SiPostgresql, SiPrisma, SiPostman,
} from 'react-icons/si';

type Skill = { name: string; icon: React.ReactNode };
type SkillGroup = {
  category: string;
  label: string;
  accent: string;
  accentRgb: string;
  items: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: '01',
    label: 'Frontend',
    accent: '#22d3ee',
    accentRgb: '34,211,238',
    items: [
      { name: 'React',        icon: <FaReact /> },
      { name: 'Next.js',      icon: <SiNextdotjs /> },
      { name: 'TypeScript',   icon: <SiTypescript /> },
      { name: 'JavaScript',   icon: <FaJs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'HTML5',        icon: <FaHtml5 /> },
      { name: 'CSS3',         icon: <FaCss3Alt /> },
    ],
  },
  {
    category: '02',
    label: 'Backend',
    accent: '#818cf8',
    accentRgb: '129,140,248',
    items: [
      { name: 'NestJS',  icon: <SiNestjs /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Python',  icon: <FaPython /> },
    ],
  },
  {
    category: '03',
    label: 'Databases',
    accent: '#34d399',
    accentRgb: '52,211,153',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Prisma ORM', icon: <SiPrisma /> },
    ],
  },
  {
    category: '04',
    label: 'Tools',
    accent: '#f59e0b',
    accentRgb: '245,158,11',
    items: [
      { name: 'Git',     icon: <FaGitAlt /> },
      { name: 'GitHub',  icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
];

function SkillChip({ skill, accent, accentRgb }: { skill: Skill; accent: string; accentRgb: string }) {
  return (
    <div
      className="group flex flex-col items-center gap-2.5 p-4 rounded-xl cursor-default transition-all duration-200"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = `rgba(${accentRgb},0.07)`;
        el.style.borderColor = `rgba(${accentRgb},0.3)`;
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = `0 12px 32px rgba(${accentRgb},0.1)`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = 'rgba(255,255,255,0.03)';
        el.style.borderColor = 'rgba(255,255,255,0.07)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      <span style={{ fontSize: '1.6rem', color: accent, display: 'flex', transition: 'transform 0.2s' }}
        className="group-hover:scale-110 transition-transform duration-200">
        {skill.icon}
      </span>
      <span className="text-xs font-mono text-center" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {skill.name}
      </span>
    </div>
  );
}

function GroupRow({ group, index }: { group: SkillGroup; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="rounded-2xl p-6 sm:p-8 transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10">

          {/* Left: label */}
          <div className="sm:w-44 shrink-0 flex sm:flex-col items-center sm:items-start gap-3">
            <span className="text-xs font-mono" style={{ color: `rgba(${group.accentRgb},0.6)` }}>
              {group.category}
            </span>
            <h3 className="text-2xl font-bold" style={{ letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)' }}>
              {group.label}
            </h3>
            {/* Accent rule */}
            <div className="hidden sm:block mt-1 w-8 h-0.5 rounded-full" style={{ background: group.accent, opacity: 0.5 }} />
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px self-stretch" style={{ background: 'rgba(255,255,255,0.06)' }} />

          {/* Right: chips */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 flex-1">
            {group.items.map((skill, i) => (
              <SkillChip key={i} skill={skill} accent={group.accent} accentRgb={group.accentRgb} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060c18 0%, #08111f 50%, #060b14 100%)' }}
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute" style={{
        width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
        top: '-80px', right: '-100px',
      }} />
      <div className="pointer-events-none absolute" style={{
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)',
        bottom: '0', left: '-80px',
      }} />
      {/* Grid */}
      <div className="pointer-events-none absolute inset-0" style={{
        opacity: 0.025,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="flex items-center gap-5 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex flex-col">
            <span className="text-xs font-mono tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(34,211,238,0.7)' }}>
              04 / Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              My{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #3b82f6)' }}>
                Stack
              </span>
            </h2>
          </div>
          <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.4), transparent)' }} />
        </motion.div>

        {/* Skill groups */}
        <div className="space-y-4">
          {skillGroups.map((group, i) => (
            <GroupRow key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}