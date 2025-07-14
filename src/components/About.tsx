import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and modern standards."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Passionate about tackling complex challenges and finding elegant solutions."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with designers, developers, and stakeholders."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and exceptional user experience."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With 4.8 years of experience as a Senior DevOps Engineer at PwC, I specialize in 
              building and maintaining robust cloud infrastructure, CI/CD pipelines, and 
              automated deployment systems. My journey began with a passion for optimizing 
              software delivery processes and ensuring system reliability at scale.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of automation, infrastructure as code, and continuous 
              improvement. Whether working on complex enterprise cloud migrations or 
              streamlining deployment workflows, I approach every challenge with systematic 
              thinking and a commitment to operational excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not optimizing infrastructure, you can find me exploring new cloud 
              technologies, contributing to DevOps communities, or mentoring teams on 
              best practices in automation and system reliability.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;