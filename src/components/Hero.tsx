import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImg from "../assets/profile.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="snap-start h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Photo */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-2xl"></div>
                <img
                  src={profileImg}
                  alt="Profile"
                  className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-background"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Hi
                </span>
                <span
                  className="inline-block animate-wave"
                  style={{ fontSize: "1em" }}
                >
                  👋
                </span>
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  , I'm Lily
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
                Software Developer
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                Passionate about creating innovative web applications and
                solving complex problems with clean, efficient code.
                Specializing in React, Node.js, and modern web technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="w-full sm:w-auto"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start items-center space-x-6">
                <a
                  href="https://github.com/LILYSHEN-sudo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/le-shen-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:leshen1.eng@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                  asChild
                >
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
