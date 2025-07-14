import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Alex Johnson
            </h3>
            <p className="text-muted-foreground text-sm">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} Alex Johnson. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;