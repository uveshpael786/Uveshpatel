import { Eye, Brain, Layout, Palette, ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    title: 'VisionAnalytica',
    subtitle: 'Computer Vision Application',
    description:
      'An intelligent image analysis platform leveraging Azure Cognitive Services for advanced computer vision capabilities. Enables real-time image classification, object detection, and visual content understanding.',
    techStack: ['Python', 'Azure Vision API', 'OpenCV', 'Flask'],
    achievements: [
      'Implemented 95%+ accuracy in image classification',
      'Real-time object detection and tracking',
      'Custom model training for specific use cases',
    ],
    icon: Eye,
    category: 'AI/ML',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'PredictIQ',
    subtitle: 'Predictive Analytics Engine',
    description:
      'A comprehensive predictive analytics platform that transforms raw data into actionable business insights. Built with advanced machine learning algorithms for customer behavior prediction and trend analysis.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    achievements: [
      'Developed customer churn prediction model with 87% accuracy',
      'Automated data preprocessing pipeline',
      'Interactive dashboards for business intelligence',
    ],
    icon: Brain,
    category: 'AI/ML',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'TaskFlow Pro',
    subtitle: 'Full-Stack Task Management',
    description:
      'A modern, full-stack task management application featuring real-time updates, user authentication, and an intuitive interface. Built with the MERN stack for optimal performance and scalability.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    achievements: [
      'Complete CRUD functionality with role-based access',
      'Real-time notifications and updates',
      'Responsive design for all devices',
    ],
    icon: Layout,
    category: 'Web Development',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'DesignHub',
    subtitle: 'UI/UX Portfolio Platform',
    description:
      'A sleek portfolio platform designed to showcase UI/UX work, built from Figma designs to production-ready code. Features a modern component library and smooth animations.',
    techStack: ['React', 'Tailwind CSS', 'Figma', 'Framer Motion'],
    achievements: [
      'Pixel-perfect Figma to code implementation',
      'Reusable component library with 20+ components',
      'Optimized performance with 95+ Lighthouse score',
    ],
    icon: Palette,
    category: 'Web Development',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export function ProjectsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-card/30 scroll-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg">
              A showcase of my work in AI/ML and Web Development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border card-hover group overflow-hidden"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-4">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.subtitle}</p>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-secondary/80 text-muted-foreground text-xs"
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
                      className="flex-1 border-border hover:border-primary hover:text-primary"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
