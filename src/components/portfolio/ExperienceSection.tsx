import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ExperienceSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding scroll-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Experience Card */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover relative overflow-hidden">
            {/* Status indicator */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-green-500 font-medium">Currently Working</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  Data Science Intern
                </h3>
                <p className="text-xl text-primary font-semibold mb-4">
                  1stop.ai
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2024 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Remote</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gaining hands-on experience in real-world data science applications, working with 
                  production-level machine learning models, and contributing to data-driven 
                  decision-making processes. Applying theoretical knowledge from academics to 
                  practical industry scenarios.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      Developing and implementing machine learning models for business insights
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      Data preprocessing, cleaning, and feature engineering
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      Collaborating with cross-functional teams on data-driven projects
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      Creating visualizations and reports for stakeholder presentations
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Analysis', 'Scikit-learn'].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/30"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
