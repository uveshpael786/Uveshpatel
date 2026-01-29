import { GraduationCap, Calendar } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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

export function AboutSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding scroll-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                As a <span className="text-primary font-semibold">2nd-year Computer Engineering student</span> at 
                UPL University, I'm on a mission to bridge the gap between data and decisions. My journey into 
                Data Science began with curiosity and evolved into a passion for building intelligent systems 
                that solve real-world problems.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
                Currently interning as a <span className="text-primary font-semibold">Data Science Intern at 1stop.ai</span>, 
                I'm applying machine learning concepts to production scenarios, transforming theoretical knowledge 
                into practical solutions. My goal is to become a skilled <span className="text-primary font-semibold">Data Analyst 
                and AI-ML Engineer</span>, committed to advancing AI technologies that make a difference.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                Education Journey
              </h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-8">
                  {educationTimeline.map((edu, index) => (
                    <div key={index} className="relative pl-12 md:pl-16">
                      {/* Timeline dot */}
                      <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                      
                      <div className="bg-card rounded-xl p-5 border border-border card-hover">
                        <div className="flex items-center gap-2 text-sm text-primary mb-2">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
