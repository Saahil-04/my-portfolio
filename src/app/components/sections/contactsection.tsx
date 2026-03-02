'use client';
import { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SocialLinks from '../ui/socialLinks';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
};

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-mono tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
        {label}
      </label>
      <motion.div animate={error ? { x: [0, -6, 6, -6, 6, 0] } : { x: 0 }} transition={{ duration: 0.35 }}>
        {children}
      </motion.div>
      {error && (
        <span className="text-xs" style={{ color: '#f87171' }}>{error}</span>
      )}
    </div>
  );
}

const inputCls = `
  w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200
  bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]
  text-white placeholder-[rgba(255,255,255,0.2)]
  focus:border-[rgba(34,211,238,0.4)] focus:bg-[rgba(34,211,238,0.04)]
  focus:shadow-[0_0_0_3px_rgba(34,211,238,0.08)]
`.replace(/\s+/g, ' ').trim();

const inputErrCls = `
  border-[rgba(248,113,113,0.5)] focus:border-[rgba(248,113,113,0.6)]
  focus:shadow-[0_0_0_3px_rgba(248,113,113,0.08)]
`.replace(/\s+/g, ' ').trim();

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');
  const [submitMessage, setSubmitMessage] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitMessage('');
    setSubmitStatus('');
    try {
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, data, EMAILJS_CONFIG.PUBLIC_KEY);
      setSubmitStatus('success');
      setSubmitMessage("Message sent! I'll get back to you soon.");
      reset();
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Try emailing me directly.');
    } finally {
      setTimeout(() => { setSubmitMessage(''); setSubmitStatus(''); }, 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060b14 0%, #08121f 60%, #060c18 100%)' }}
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute" style={{
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
        top: '-80px', right: '-100px',
      }} />
      <div className="pointer-events-none absolute" style={{
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)',
        bottom: '-60px', left: '-80px',
      }} />
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex flex-col">
            <span className="text-xs font-mono tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(34,211,238,0.7)' }}>
              05 / Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Get In{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #3b82f6)' }}>
                Touch
              </span>
            </h2>
          </div>
          <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.4), transparent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left info panel — 2 cols */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Have a project in mind, a role to fill, or just want to say hello?
              My inbox is always open.
            </p>

            {/* Contact items */}
            {[
              {
                icon: <FiMail size={16} />,
                label: 'Email',
                value: 'digital.saahilsvishwakarma@gmail.com',
                href: 'mailto:digital.saahilsvishwakarma@gmail.com',
              },
              {
                icon: <FiMapPin size={16} />,
                label: 'Location',
                value: 'Nerul, Navi Mumbai, Maharashtra',
                href: null,
              },
            ].map(item => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <span style={{ color: '#22d3ee', marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm transition-colors duration-200 break-all"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="p-4 rounded-xl" style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Socials
              </p>
              <SocialLinks variant="contact" only={['GitHub', 'LinkedIn', 'Twitter']} iconSize={20} />
            </div>
          </motion.div>

          {/* Right form panel — 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-7 rounded-2xl" style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <Field label="Your Name" error={errors.name?.message}>
                    <input
                      id="name"
                      {...register('name')}
                      placeholder="John Doe"
                      className={`${inputCls} ${errors.name ? inputErrCls : ''}`}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Your Email" error={errors.email?.message}>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="john@example.com"
                      className={`${inputCls} ${errors.email ? inputErrCls : ''}`}
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <div className="mb-6">
                  <Field label="Message" error={errors.message?.message}>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message')}
                      placeholder="Tell me about your project..."
                      className={`${inputCls} ${errors.message ? inputErrCls : ''} resize-none`}
                    />
                  </Field>
                </div>

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #0891b2, #1d4ed8)',
                      color: '#fff',
                      boxShadow: '0 0 0 1px rgba(34,211,238,0.2)',
                      flexShrink: 0,
                    }}
                    whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(34,211,238,0.25)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message <FiSend size={14} />
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence mode="wait">
                    {submitMessage && (
                      <motion.div
                        key={submitStatus}
                        className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl"
                        style={{
                          background: submitStatus === 'success'
                            ? 'rgba(52,211,153,0.1)' : 'rgba(248,113,113,0.1)',
                          border: `1px solid ${submitStatus === 'success' ? 'rgba(52,211,153,0.25)' : 'rgba(248,113,113,0.25)'}`,
                          color: submitStatus === 'success' ? '#34d399' : '#f87171',
                        }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.3 }}
                        aria-live="polite"
                      >
                        {submitStatus === 'success' ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <motion.path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"
                              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
                          </svg>
                        ) : (
                          <span>✕</span>
                        )}
                        {submitMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}