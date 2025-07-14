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
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive applications using cutting-edge technologies. My journey 
              began with a curiosity about how websites work, and it has evolved into a 
              passion for crafting digital experiences that matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean, efficient code and user-centered design. 
              Whether working on a complex enterprise application or a simple landing page, 
              I approach every project with attention to detail and a commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
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