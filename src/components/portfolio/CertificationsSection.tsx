import { Award, Eye, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const certifications = [
  {
    title: 'Figma Design Bootcamp',
    issuer: 'LetsUpgrade',
    date: 'Jan 2026',
    description: 'UI/UX design principles and Figma tool mastery',
    image: '/certificates/figma-bootcamp.png',
    color: 'pink',
  },
  {
    title: 'Computer Vision with Azure',
    issuer: 'Microsoft / Coursera',
    date: 'Sep 2024',
    description: 'Building computer vision apps with Azure Cognitive Services',
    image: '/certificates/azure-computer-vision.png',
    color: 'cyan',
  },
  {
    title: 'Python Bootcamp',
    issuer: 'LetsUpgrade',
    date: 'Jan 2026',
    description: 'Intensive Python programming fundamentals',
    image: '/certificates/python-bootcamp.png',
    color: 'primary',
  },
  {
    title: 'SQL & Database Assessment',
    issuer: 'LearnTube.ai',
    date: 'July 2025',
    description: 'Advanced SQL and database management',
    image: '/certificates/sql-database.png',
    color: 'cyan',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4">
              <Shield className="w-4 h-4" />
              verified achievements
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan via-primary to-pink mx-auto rounded-full" />
          </motion.div>

          {/* Certifications - Horizontal scrollable on mobile, grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <div className={`terminal-box h-full p-5 group hover:border-${cert.color}/50 transition-all duration-300`}>
                  {/* Icon */}
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-${cert.color}/10 border border-${cert.color}/30 flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 10 }}
                  >
                    <Award className={`w-7 h-7 text-${cert.color}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-1 font-mono leading-tight">
                    {cert.title}
                  </h3>
                  <p className={`text-${cert.color} text-sm font-mono mb-2`}>
                    @{cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-xs mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground font-mono">
                      {cert.date}
                    </span>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`text-${cert.color} hover:bg-${cert.color}/10 p-0 h-auto font-mono text-xs`}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-[90vw] p-0 overflow-hidden bg-transparent border-none shadow-none">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={cert.image}
                            alt={`${cert.title} Certificate`}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
