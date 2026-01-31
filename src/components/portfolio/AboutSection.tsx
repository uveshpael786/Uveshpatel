import { GraduationCap, Calendar, User, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const educationTimeline = [
  {
    year: '2023 - Present',
    degree: 'B.E. Computer Engineering',
    institution: 'UPL University of Sustainable Technology',
    details: 'Semester 4 | Focus: Data Science & AI/ML',
  },
  {
    year: '2021 - 2023',
    degree: '12th Standard',
    institution: 'MMMCT Aleef English Medium School',
    details: 'Marks: 68%',
  },
  {
    year: '2019 - 2021',
    degree: '10th Standard',
    institution: 'SVM School',
    details: 'Marks: 72% | Percentile: 80.53',
  },
];

const highlights = [
  { icon: User, label: '2nd Year Student', color: 'cyan' },
  { icon: Target, label: 'Data Science Focus', color: 'pink' },
  { icon: Zap, label: 'Currently Interning', color: 'primary' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

const slideLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-sm font-mono mb-4">
              {'<section id="about">'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Know <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan via-primary to-pink mx-auto rounded-full" />
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left - About text */}
            <motion.div variants={slideLeftVariants} className="lg:col-span-3 space-y-6">
              {/* Quick highlights */}
              <div className="flex flex-wrap gap-3 mb-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-${item.color}/30 font-mono text-sm`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon className={`w-4 h-4 text-${item.color}`} />
                    <span className="text-muted-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Main about card */}
              <div className="terminal-box p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6 font-mono text-xs text-muted-foreground">
                  <span className="w-3 h-3 rounded-full bg-pink" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2">~/about/readme.md</span>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="flex gap-3">
                    <span className="text-cyan font-mono shrink-0">01</span>
                    <span>
                      As a <span className="text-cyan font-semibold">2nd-year Computer Engineering student</span> at 
                      UPL University, I'm on a mission to bridge the gap between data and decisions.
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-cyan font-mono shrink-0">02</span>
                    <span>
                      My journey into Data Science began with curiosity and evolved into a passion for 
                      building <span className="text-pink font-semibold">intelligent systems</span> that solve real-world problems.
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-cyan font-mono shrink-0">03</span>
                    <span>
                      Currently interning as a <span className="text-primary font-semibold">Data Science Intern at 1stop.ai</span>, 
                      transforming theoretical knowledge into practical solutions.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Education Timeline */}
            <motion.div variants={slideRightVariants} className="lg:col-span-2">
              <div className="terminal-box p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan/10 border border-cyan/30">
                    <GraduationCap className="w-5 h-5 text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold font-mono">
                    Education<span className="text-cyan">.timeline</span>
                  </h3>
                </div>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan via-primary to-pink" />

                  <div className="space-y-6">
                    {educationTimeline.map((edu, index) => (
                      <motion.div 
                        key={index} 
                        className="relative pl-8"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.2 }}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-background border-2 border-cyan" />
                        
                        <div className="bg-card/50 rounded-lg p-4 border border-border hover:border-cyan/50 transition-colors">
                          <div className="flex items-center gap-2 text-xs text-cyan mb-1 font-mono">
                            <Calendar className="w-3 h-3" />
                            {edu.year}
                          </div>
                          <h4 className="font-semibold text-foreground text-sm mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-muted-foreground text-xs">{edu.institution}</p>
                          <p className="text-pink text-xs font-mono mt-1">{edu.details}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
