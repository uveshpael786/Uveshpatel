import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/uveshpael786/',
    label: 'LinkedIn',
    color: 'hover:text-pink hover:border-pink',
  },
  {
    icon: Github,
    href: 'https://github.com/uveshpael786',
    label: 'GitHub',
    color: 'hover:text-cyan hover:border-cyan',
  },
  {
    icon: Mail,
    href: 'mailto:uveshpatel996@gmail.com',
    label: 'Email',
    color: 'hover:text-primary hover:border-primary',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Logo & tagline */}
            <div className="text-center md:text-left">
              <motion.a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-2xl font-bold gradient-text hover:opacity-80 transition-opacity font-mono mb-3"
                whileHover={{ scale: 1.05 }}
              >
                <Terminal className="w-6 h-6" />
                UP.dev
              </motion.a>
              <p className="text-muted-foreground text-sm">
                Building intelligent systems with passion
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-cyan transition-colors font-mono"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-card border border-border ${link.color} transition-all duration-300`}
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-cyan">©</span> {currentYear} Patel Uvesh <span className="text-cyan">//</span> All rights reserved
            </p>
            <motion.p 
              className="text-sm text-muted-foreground flex items-center gap-2 font-mono"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Crafted with <Heart className="w-4 h-4 text-pink fill-pink" /> using 
              <span className="text-cyan">React</span> + <span className="text-pink">Tailwind</span>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
