import { Mail, Linkedin, Github, Copy, Check, Send, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const email = 'uveshpatel996@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 matrix-bg opacity-40" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-sm font-mono mb-4">
              <MessageSquare className="w-4 h-4" />
              get in touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan via-primary to-pink mx-auto rounded-full" />
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left - Main CTA */}
            <motion.div variants={itemVariants}>
              <div className="terminal-box p-8 h-full">
                <div className="flex items-center gap-2 mb-6 font-mono text-xs text-muted-foreground">
                  <span className="w-3 h-3 rounded-full bg-pink" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2">contact.sh</span>
                </div>

                <Sparkles className="w-10 h-10 text-cyan mb-4" />
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Have a project in mind?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or chat about AI, Data Science, and technology.
                </p>

                <a href={`mailto:${email}`}>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan via-primary to-pink text-background font-semibold glow-cyan transition-all duration-300 font-mono hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right - Contact methods */}
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Email */}
              <motion.div 
                className="terminal-box p-5 group hover:border-cyan/50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan/10 border border-cyan/30 group-hover:glow-cyan transition-all">
                    <Mail className="w-6 h-6 text-cyan" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground font-mono mb-1">Email</p>
                    <p className="text-foreground font-mono truncate">{email}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
                    className="hover:bg-cyan/10 hover:text-cyan shrink-0"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/uveshpael786/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ x: 5 }}
              >
                <div className="terminal-box p-5 group hover:border-pink/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-pink/10 border border-pink/30 group-hover:glow-pink transition-all">
                      <Linkedin className="w-6 h-6 text-pink" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-mono mb-1">LinkedIn</p>
                      <p className="text-foreground font-mono">Connect with me</p>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/uveshpael786"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ x: 5 }}
              >
                <div className="terminal-box p-5 group hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:glow-purple transition-all">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-mono mb-1">GitHub</p>
                      <p className="text-foreground font-mono">Check my repos</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Career Goal */}
          <motion.div 
            variants={itemVariants}
            className="mt-12"
          >
            <div className="terminal-box p-6 text-center">
              <p className="text-lg text-foreground font-mono">
                <span className="text-cyan">{'> '}</span>
                "Aspiring <span className="text-pink font-semibold">Data Analyst & AI-ML Engineer</span>, 
                committed to advancing AI technologies."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
