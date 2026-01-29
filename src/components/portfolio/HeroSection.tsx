import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const taglines = [
  'Transforming Data into Intelligence',
  'AI/ML Enthusiast & Problem Solver',
  'Building Intelligent Systems',
  'From Data to Decisions',
];

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/uveshpael786/',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/uveshpael786',
    label: 'GitHub',
  },
  {
    icon: Mail,
    href: 'mailto:uveshpatel996@gmail.com',
    label: 'Email',
  },
];

export function HeroSection() {
  const { displayText } = useTypingEffect(taglines, 80, 40, 2500);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple/10" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-110" />
            <Avatar className="w-40 h-40 md:w-52 md:h-52 border-4 border-primary/50 glow-purple relative">
              <AvatarImage src="/profile.jpg" alt="Uvesh Patel" />
              <AvatarFallback className="bg-secondary text-4xl md:text-5xl font-bold gradient-text">
                UP
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Patel </span>
              <span className="gradient-text">Uvesh</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Computer Engineering Student | Data Science Intern
            </p>
          </div>

          {/* Typing tagline */}
          <div className="h-12 flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-primary typing-cursor">
              {displayText}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 glow-purple-hover"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-purple glow-purple-hover transition-all duration-300"
            onClick={() => {
              // Resume download - placeholder
              alert('Please upload your resume PDF to enable download');
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
