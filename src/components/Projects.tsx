import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Database,
  Zap,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import travelImg from "../assets/Travel_list.png";
import webSearchImg from "../assets/Web_search.png";
import splitImg from "../assets/Split_bill.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Travel Checklist",
      description:
        "A pre-trip packing checklist web application that helps you stay organized before every journey.You can customize lists based on your destination or trip type and check off items as you pack, ensuring you never forget essentials and making travel preparation simple and stress-free.",
      image: travelImg,
      category: "Frontend",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      features: [
        "Add and manage packing items",
        "Customizable quantity and item names",
        "Interactive checklist with progress tracking",
        "Clean, playful UI with travel-themed visuals",
        "Instant list clearing and smooth user experience",
      ],
      links: {
        live: "https://travel-list-lime-nine.vercel.app/",
        github: "https://github.com/LILYSHEN-sudo/Travel-list",
      },
      status: "Live",
      featured: false,
    },
    {
      id: 2,
      title: "Split-the-bill-calculator",
      description:
        "A simple and interactive bill-splitting application that helps friends track shared expenses and calculate balances instantly. Users can add friends, record expenses, and see who owes whom in real time, making group payments clear, fair, and stress-free.",
      image: splitImg,
      category: "Frontend",
      technologies: ["React", "JavaScript", "CSS", "State Management"],
      features: [
        "Add and manage friends dynamically",
        "Track individual expenses and shared costs",
        "Automatic balance calculation",
        "Color-coded debt indicators for quick insights",
        "Real-time UI updates using React state",
      ],
      links: {
        live: "https://bill-split-lily-shen.vercel.app/",
        github: "https://github.com/LILYSHEN-sudo/BillSplit",
      },
      status: "Live",
      featured: false,
    },
    {
      id: 3,
      title: "Web-Search-AI-Agent",
      description:
        "A full-stack application with a Python FastAPI backend and React frontend that can search the web and provide intelligent answers to your questions.",
      image: webSearchImg,
      category: "Full-Stack",
      technologies: ["Python", "React", "OpenAI", "RAG", "FastAPI"],
      features: [
        "Python async programming with FastAPI",
        "React frontend with TypeScript",
        "OpenAI-compatible API integration",
        "RAG (Retrieval-Augmented Generation)",
        "AI Agent architecture (ReAct pattern)",
      ],
      links: {
        live: "https://web-search-ai-agent-zuzl.vercel.app/",
        github: "https://github.com/LILYSHEN-sudo/Web-Search-AI-Agent",
      },
      status: "Live",
      featured: true,
    },
  ];
  const categories = [
    "Featured",
    "Full-Stack",
    "Frontend",
    "Mobile",
    "Tools",
    "All"
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : selectedCategory === "Featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="snap-start h-screen overflow-y-auto pt-32 pb-20 bg-secondary/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work and technical expertise across
              different domains and technologies.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2 rounded-full transition-all duration-200 mb-2
                  ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-background border-2 border-border hover:border-primary/50 hover:bg-primary/5"
                  }
                `}
              >
                {category === "Featured" && <Star className="h-4 w-4 mr-2" />}
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.featured && (
                      <Badge
                        variant="secondary"
                        className="bg-primary/90 text-primary-foreground"
                      >
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge
                      variant={
                        project.status === "Live" ? "default" : "secondary"
                      }
                      className={
                        project.status === "Live" ? "bg-green-500" : ""
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="flex-grow">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg flex-1">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs shrink-0">
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {project.links.live ? (
                        <Button asChild size="sm" className="flex-1">
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" className="flex-1" disabled>
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Python
                        </Button>
                      )}
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl mb-4">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
