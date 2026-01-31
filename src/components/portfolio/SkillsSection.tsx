import { Code, Database, Brain, Layers, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['C', 'C++', 'Python', 'Java', 'C#', 'HTML', 'CSS'],
    color: 'cyan',
    description: 'Core programming languages',
  },
  {
    title: 'Frameworks',
    icon: Layers,
    skills: ['Node.js', 'React', 'Angular', 'NumPy', 'Pandas'],
    color: 'pink',
    description: 'Libraries & frameworks',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['DBMS', 'SQL', 'Database Design'],
    color: 'primary',
    description: 'Data management',
  },
  {
    title: 'Focus Areas',
    icon: Brain,
    skills: ['Data Science', 'Machine Learning', 'Computer Vision', 'Predictive Analytics'],
    color: 'cyan',
    description: 'Currently mastering',
    isLearning: true,
  },
];

const softSkills = ['Leadership', 'Team Management', 'Problem Solving', 'Communication', 'Adaptability'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 matrix-bg opacity-40" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-pink/10 border border-pink/30 text-pink text-sm font-mono mb-4">
              {'<skills>'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan via-primary to-pink mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid - Bento style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`terminal-box p-6 group hover:border-${category.color}/50 transition-all duration-300 ${
                  index === 3 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-${category.color}/10 border border-${category.color}/30`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  {category.isLearning && (
                    <span className="flex items-center gap-1 text-xs text-cyan font-mono">
                      <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                      Learning
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1 font-mono">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">{category.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + skillIndex * 0.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className={`px-3 py-1.5 text-xs bg-card hover:bg-${category.color}/10 border border-border hover:border-${category.color}/50 transition-all duration-300 font-mono cursor-default`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div 
            variants={cardVariants}
            className="mt-12"
          >
            <div className="terminal-box p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-pink/10 border border-pink/30">
                  <Sparkles className="w-5 h-5 text-pink" />
                </div>
                <h3 className="text-xl font-bold font-mono">
                  Soft<span className="text-pink">.skills</span>
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="px-6 py-3 text-sm border-gradient bg-gradient-to-r from-cyan/5 via-primary/5 to-pink/5 border-primary/30 hover:border-primary/60 transition-all font-mono"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
