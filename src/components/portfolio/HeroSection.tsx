import { Github, Linkedin, Mail, Download, ChevronDown, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

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
      {/* Animated cyber background */}
      <div className="absolute inset-0 matrix-bg" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Floating orbs */}
      <motion.div 
        className="absolute top-20 left-[10%] w-72 h-72 bg-cyan/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-[10%] w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-sm font-mono">
                <Terminal className="w-4 h-4" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="text-foreground">Hi, I'm </span>
              <br />
              <span className="gradient-text">Patel Uvesh</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground font-mono mb-6"
            >
              {'<'}<span className="text-cyan">Computer_Engineer</span>{' / '}<span className="text-pink">Data_Scientist</span>{'>'}
            </motion.p>

            {/* Typing tagline */}
            <motion.div 
              variants={itemVariants}
              className="terminal-box px-6 py-4 mb-8 inline-block"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-pink" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="ml-1">terminal</span>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-primary typing-cursor font-mono">
                <span className="text-cyan mr-2">$</span>{displayText}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan via-primary to-pink text-background px-8 py-6 text-lg font-semibold glow-cyan transition-all duration-300 font-mono hover:scale-105"
                onClick={() => {
                  alert('Please upload your resume PDF to enable download');
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download_CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan/50 hover:border-cyan hover:bg-cyan/10 px-8 py-6 text-lg font-mono hover:scale-105 transition-all"
                onClick={scrollToAbout}
              >
                Explore_More
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-muted-foreground text-sm font-mono">Find me on:</span>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card border border-cyan/30 hover:border-cyan hover:bg-cyan/10 transition-all duration-300 glow-hover group"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-cyan transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile */}
          <motion.div 
            variants={scaleVariants}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div 
                className="absolute inset-[-20px] rounded-full border-2 border-dashed border-cyan/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-[-40px] rounded-full border border-pink/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/40 via-primary/40 to-pink/40 rounded-full blur-3xl scale-110 animate-pulse" />
              
              {/* Main avatar */}
              <div className="relative">
                <div className="absolute inset-[-4px] bg-gradient-to-r from-cyan via-primary to-pink rounded-full animate-[border-flow_3s_linear_infinite]" style={{ backgroundSize: '200% 100%' }} />
                <Avatar className="w-56 h-56 md:w-72 md:h-72 border-4 border-background relative">
                  <AvatarImage src="/profile.jpg" alt="Uvesh Patel" />
                  <AvatarFallback className="bg-card text-5xl md:text-6xl font-bold gradient-text">
                    UP
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 px-3 py-1.5 bg-card border border-cyan/50 rounded-lg font-mono text-xs text-cyan"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AI/ML
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-card border border-pink/50 rounded-lg font-mono text-xs text-pink"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                Data Science
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-label="Scroll to about section"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-cyan/70 hover:text-cyan transition-colors" />
        </motion.button>
      </div>
    </section>
  );
}
