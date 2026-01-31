import { Briefcase, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const responsibilities = [
  'Developing and implementing machine learning models for business insights',
  'Data preprocessing, cleaning, and feature engineering',
  'Collaborating with cross-functional teams on data-driven projects',
  'Creating visualizations and reports for stakeholder presentations',
];

const techStack = ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Analysis', 'Scikit-learn'];

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

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4">
              {'<experience>'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan via-primary to-pink mx-auto rounded-full" />
          </motion.div>

          {/* Experience Card - New layout */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-pink/5 rounded-3xl" />
            
            <div className="terminal-box p-0 overflow-hidden">
              {/* Top bar */}
              <div className="bg-card/80 border-b border-cyan/20 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                  <span className="w-3 h-3 rounded-full bg-pink" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2">experience.log</span>
                </div>
                <motion.div 
                  className="flex items-center gap-2"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan" />
                  <span className="text-xs text-cyan font-mono">CURRENTLY ACTIVE</span>
                </motion.div>
              </div>

              <div className="p-6 md:p-10">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left - Company info */}
                  <div className="md:col-span-1">
                    <motion.div
                      className="sticky top-24"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan/10 via-primary/10 to-pink/10 border border-cyan/20">
                        <div className="w-16 h-16 rounded-xl bg-card border border-cyan/30 flex items-center justify-center mb-4 glow-cyan">
                          <Briefcase className="w-8 h-8 text-cyan" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-2 font-mono">
                          Data Science Intern
                        </h3>
                        <p className="text-xl text-pink font-semibold mb-4 font-mono">
                          @1stop.ai
                        </p>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4 text-cyan" />
                            <span>2024 - Present</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 text-pink" />
                            <span>Remote</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right - Details */}
                  <div className="md:col-span-2 space-y-6">
                    {/* Description */}
                    <div className="terminal-box p-5">
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="text-cyan font-mono">// </span>
                        Gaining hands-on experience in real-world data science applications, working with 
                        production-level machine learning models, and contributing to data-driven 
                        decision-making processes.
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 font-mono flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-cyan" />
                        Key Responsibilities
                      </h4>
                      <div className="grid gap-3">
                        {responsibilities.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border hover:border-cyan/30 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 font-mono flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-pink" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.8 + index * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-cyan/10 text-cyan border border-cyan/30 font-mono text-xs px-3 py-1.5"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
