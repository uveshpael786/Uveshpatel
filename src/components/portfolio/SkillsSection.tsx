import { Code, Database, Brain, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['C', 'C++', 'Python', 'Java', 'C#', 'HTML', 'CSS'],
    color: 'text-blue-400',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['Node.js', 'React', 'Angular', 'NumPy', 'Pandas'],
    color: 'text-green-400',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['DBMS', 'SQL', 'Database Design'],
    color: 'text-yellow-400',
  },
  {
    title: 'Focus Areas',
    icon: Brain,
    skills: ['Data Science', 'Machine Learning', 'Computer Vision', 'Predictive Analytics'],
    isLearning: true,
    color: 'text-primary',
  },
];

export function SkillsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-card/30 scroll-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-secondary ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                    {category.isLearning && (
                      <span className="text-xs text-primary font-medium">
                        Currently Learning
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`px-3 py-1.5 text-sm bg-secondary/80 hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/50 transition-all duration-300 ${
                        category.isLearning ? 'border-primary/30' : ''
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Leadership', 'Team Management', 'Problem Solving', 'Communication', 'Adaptability'].map(
                (skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-4 py-2 text-sm border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
