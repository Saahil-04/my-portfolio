import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const links = [
  { href: 'https://github.com/Saahil-04', icon: FiGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/saahil-vishwakarma-7a5943288/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://x.com/SaahilV_04', icon: FiTwitter, label: 'Twitter' },
  { href: 'mailto:digital.saahilsvishwakarma@gmail.com', icon: FiMail, label: 'Email' },
];

type Variant = 'navbar' | 'footer' | 'contact';

const variantStyles: Record<Variant, string> = {
  navbar: 'blobity-magnetic p-2 rounded-full bg-gray-800 hover:bg-cyan-700 transition-colors',
  footer: 'text-gray-400 hover:text-white transition-colors',
  contact: 'bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors',
};

const variantSpacing: Record<Variant, string> = {
  navbar: 'space-x-4',
  footer: 'space-x-6',
  contact: 'space-x-4',
};

interface SocialLinksProps {
  variant?: Variant;
  iconSize?: number;
  only?: string[];
  className?: string;
  spacing?: string;
}

const SocialLinks = ({
  variant = 'navbar',
  iconSize = 24,
  only = ['GitHub', 'LinkedIn', 'Twitter', 'Email'],
  className = '',
  spacing,
}: SocialLinksProps) => (
  <div className={`flex ${spacing ?? variantSpacing[variant]} ${className}`}>
    {links
      .filter(link => only.includes(link.label))
      .map(link => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          aria-label={link.label}
          className={variantStyles[variant]}
          whileHover={variant === 'navbar' ? { scale: 1.2, rotate: 10 } : variant === 'contact' ? { y: -5 } : undefined}
          whileTap={variant === 'navbar' ? { scale: 0.9 } : undefined}
        >
          {link.icon({ size: iconSize })}
        </motion.a>
      ))}
  </div>
);

export default SocialLinks;