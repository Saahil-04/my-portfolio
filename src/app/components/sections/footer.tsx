import SocialLinks from '../ui/socialLinks';

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey',  href: '#journey' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Contact',  href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{ background: 'linear-gradient(to bottom, #060b14, #04080f)' }}
    >
      {/* Top separator with glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.3), rgba(59,130,246,0.2), transparent)',
      }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold mb-2 text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #3b82f6)' }}
            >
              Saahil.dev
            </h3>
            <p className="text-xs font-mono mb-4" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
              FULL STACK DEVELOPER
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Building fast, accessible, and visually sharp digital experiences — one component at a time.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Navigate
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Connect
            </p>
            <SocialLinks variant="footer" iconSize={20} spacing="space-x-4" />
            <p className="text-xs mt-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Open to new opportunities.<br />
              Let&apos;s build something great.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Saahil Vishwakarma · All rights reserved
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.12)' }}>
            Designed &amp; built with ♥ in Navi Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}