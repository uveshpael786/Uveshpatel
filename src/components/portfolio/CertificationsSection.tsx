import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const certifications = [
  {
    title: 'Build a Computer Vision App with Azure Cognitive Services',
    issuer: 'Microsoft / Coursera',
    date: '2024',
    description: 'Comprehensive training on Azure Cognitive Services for computer vision applications',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'SQL & Database Assessment',
    issuer: 'LearnTube.ai',
    date: '2024',
    description: 'Advanced SQL and database management certification',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Python Programming Bootcamp',
    issuer: 'LetsUpgrade',
    date: '2023',
    description: 'Intensive Python programming fundamentals and advanced concepts',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Figma Design Bootcamp',
    issuer: 'LetsUpgrade',
    date: '2023',
    description: 'UI/UX design principles and Figma tool mastery',
    color: 'from-pink-500 to-rose-500',
  },
];

export function CertificationsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="section-padding scroll-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg">
              Professional certifications and achievements
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border card-hover overflow-hidden group"
              >
                {/* Header gradient */}
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-muted-foreground text-sm mb-3">
                        {cert.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Issued: {cert.date}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto"
                        >
                          View Certificate
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
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
