import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-40 right-20 w-12 h-12 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-primary rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          Abhiraj Panda
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Senior DevOps Engineer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Building robust, scalable infrastructure and automating deployment pipelines. 
          4.8 years of experience at PwC, passionate about cloud technologies and DevOps excellence.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('skills')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300 group">
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300 group">
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:abhiraj.panda@example.com"
             className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300 group">
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;