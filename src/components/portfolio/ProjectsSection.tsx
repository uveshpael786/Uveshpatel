import { Eye, Brain, Layout, Palette, ExternalLink, Github, Folder } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'VisionAnalytica',
    subtitle: 'Computer Vision Application',
    description:
      'An intelligent image analysis platform leveraging Azure Cognitive Services for advanced computer vision capabilities.',
    techStack: ['Python', 'Azure Vision API', 'OpenCV', 'Flask'],
    achievements: [
      '95%+ accuracy in image classification',
      'Real-time object detection',
      'Custom model training',
    ],
    icon: Eye,
    category: 'AI/ML',
    accent: 'cyan',
  },
  {
    title: 'PredictIQ',
    subtitle: 'Predictive Analytics Engine',
    description:
      'A comprehensive predictive analytics platform that transforms raw data into actionable business insights.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    achievements: [
      '87% accuracy churn prediction',
      'Automated data pipeline',
      'Interactive dashboards',
    ],
    icon: Brain,
    category: 'AI/ML',
    accent: 'pink',
  },
  {
    title: 'TaskFlow Pro',
    subtitle: 'Full-Stack Task Management',
    description:
      'A modern, full-stack task management application featuring real-time updates and user authentication.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    achievements: [
      'Complete CRUD with RBAC',
      'Real-time notifications',
      'Responsive design',
    ],
    icon: Layout,
    category: 'Web Dev',
    accent: 'primary',
  },
  {
    title: 'DesignHub',
    subtitle: 'UI/UX Portfolio Platform',
    description:
      'A sleek portfolio platform designed to showcase UI/UX work, built from Figma designs to production.',
    techStack: ['React', 'Tailwind CSS', 'Figma', 'Framer Motion'],
    achievements: [
      'Pixel-perfect implementation',
      '20+ reusable components',
      '95+ Lighthouse score',
    ],
    icon: Palette,
    category: 'Web Dev',
    accent: 'cyan',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 matrix-bg opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-sm font-mono mb-4">
              {'<projects>'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan via-primary to-pink mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground font-mono">
              A showcase of my work in AI/ML and Web Development
            </p>
          </motion.div>

          {/* Projects - Alternating layout */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`grid md:grid-cols-5 gap-6 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Project number/icon side */}
                <motion.div 
                  className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`terminal-box p-8 text-center relative overflow-hidden group`}>
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${project.accent}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                    
                    <motion.div
                      className={`w-20 h-20 mx-auto rounded-2xl bg-${project.accent}/10 border border-${project.accent}/30 flex items-center justify-center mb-4 relative`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <project.icon className={`w-10 h-10 text-${project.accent}`} />
                    </motion.div>
                    
                    <span className="text-6xl font-bold text-muted/20 font-mono">
                      0{index + 1}
                    </span>
                    
                    <Badge className={`mt-2 bg-${project.accent}/20 text-${project.accent} border border-${project.accent}/30 font-mono`}>
                      {project.category}
                    </Badge>
                  </div>
                </motion.div>

                {/* Project details */}
                <div className={`md:col-span-3 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="terminal-box p-6 h-full">
                    <div className="flex items-center gap-2 mb-4 font-mono text-xs text-muted-foreground">
                      <Folder className="w-4 h-4 text-cyan" />
                      <span>~/{project.title.toLowerCase()}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-1 font-mono">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.subtitle}</p>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6 space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className={`text-${project.accent}`}>✓</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-card text-muted-foreground text-xs font-mono border border-border"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan/30 hover:border-cyan hover:bg-cyan/10 hover:text-cyan font-mono"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className={`bg-${project.accent}/20 hover:bg-${project.accent}/30 text-${project.accent} border border-${project.accent}/30 font-mono`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
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
