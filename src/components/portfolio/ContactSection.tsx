import { Mail, Linkedin, Github, Copy, Check, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>();

  const email = 'uveshpatel996@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-card/30 scroll-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 text-lg max-w-xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or just have a conversation about AI, Data Science, and technology.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10 card-hover">
            {/* Email */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-xl font-semibold text-foreground">Email Me</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg text-muted-foreground">{email}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={copyEmail}
                  className="hover:bg-primary/10 hover:text-primary"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/uveshpael786/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full border-border hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </a>
              <a
                href="https://github.com/uveshpael786"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full border-border hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Follow on GitHub
                </Button>
              </a>
            </div>

            {/* CTA */}
            <a href={`mailto:${email}`}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-purple glow-purple-hover transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Me a Message
              </Button>
            </a>
          </div>

          {/* Career Goal */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
            <p className="text-lg text-foreground italic">
              "Aspiring <span className="text-primary font-semibold">Data Analyst & AI-ML Engineer</span>, 
              committed to advancing AI technologies that make a real-world impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
