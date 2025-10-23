import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Mail, Github, Linkedin, Heart } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/LILYSHEN-sudo/dag12y",
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/le-shen-/",
      color: "hover:text-blue-600",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: "mailto:leshen1.eng@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className="snap-start min-h-screen flex flex-col pt-32 bg-secondary/10"
    >
      <div className="container mx-auto px-4 w-full flex-1 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's connect and discuss how we can work together!
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-2xl">
              <CardHeader className="text-center">
                <CardTitle>Follow Me</CardTitle>
                <CardDescription>
                  Connect with me on social media and professional networks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg bg-secondary/50 text-muted-foreground transition-all hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4">Lily Shen</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Full Stack Developer passionate about creating innovative web
                  solutions and building amazing user experiences.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/dag12y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dagm-yibabe-46b85b353/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:dagimyibabe19@gmail.com"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="mb-4">Quick Links</h4>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("about")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      About Me
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("projects")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("skills")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      Skills
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4">Services</h4>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>UI/UX Design</li>
                  <li>Technical Consulting</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8 text-center">
              <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
                Made with <Heart className="h-4 w-4 text-red-400" /> by Dagm
                Yibabe © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
