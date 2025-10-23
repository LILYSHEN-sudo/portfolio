import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  CalendarDays,
  MapPin,
  Building,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<
    "experience" | "education" | "certifications"
  >("experience");
  const experiences = [
    {
      title: "Software Engineer – IT Systems",
      company: "San Jose State University",
      location: "San Jose, CA",
      period: "2024 - Present",
      type: "Student Assistant",
      description:
        "Contributing to the university’s IT innovation by developing AI-powered helpdesk systems, automating troubleshooting workflows, and improving campus technology support efficiency.",
      achievements: [
        "Developed and deployed an AI-driven IT helpdesk assistant using GPT-4o, LangChain, and Chroma, enabling real-time troubleshooting and intelligent equipment booking through natural language interaction.",
        "Built a semantic retrieval pipeline by embedding internal IT knowledge into Chroma’s vector database, enabling conextual query matching and accurate issue resolution.",
        "Implemented multi-turn dialogue management with LangChain memory and prompt optimization, enhancing resonsiveness and improving staff and student support efficiency by 25%.",
      ],
      technologies: ["OpenAI API", "LangChain", "Chroma"],
    },
    {
      title: "Software Engineer",
      company: "Quantum Storm Co., Ltd.",
      location: "Wuhan, Hubei",
      period: "2022 - 2024",
      type: "Full-time",
      description:
        "Developing scalable backend systems and intelligent recommendation services, leading efforts to optimize microservice architecture and database performance for enterprise-scale applications",
      achievements: [
        "Collaborated with cross-functional teams to design and deploy scalable microservices on Kubernetes using Spring Boot, integrating RESTful APIs, Redis caching, and Elasticsearch for high-performance and full-text search capabilities.",
        "Designed and delivered recommendation systems as platform services by integrating Graph-based Neural Networks (GNN) with collaborative and content-based filtering, increasing user engagement by 20%",
        "Optimized MySQL, PostgreSQL, Redis, and Elasticsearch databases to enable real-time search, improve scalability, and reduce query latency and ensure stability for thousands of concurrent users.",
      ],
      technologies: ["Spring Boot", "React", "MySQL", "Elasticsearch", "Redis"],
    },
  ];

  const education = [
    {
      degree:
        "Master of Science in Engineering | Computer Science & Engineering",
      school: "San Jose State University",
      location: "San Jose, CA",
      period: "2024 - Present",
      description:
        "Pursuing a master‘s degree emphasizing the design and development of scalable software systems, cloud infrastructure, and AI-powered applications. GPA: 3.95/4.00",
      relevant: [
        "Data Structures and Algorithms",
        "Distributed Systems,",
        "Machine Learning on Graphs",
        "Operating Systems",
      ],
    },
    {
      degree:
        "Master of Engineering | Data Analysis & Urban Simulation Modeling",
      school: "Huazhong University of Science and Technology",
      location: "Wuhan, China",
      period: "2018 - 2025",
      description:
        "Completed a master’s degree specializing in data analytics, urban simulation, and computational modeling for smart city planning.",
      relevant: [
        "Urban Simulation",
        "Urban Data Visulization",
        "Geographic Information Systems",
      ],
    },
  ];

  const certifications = ["Kubernetes", "Machine Learning"];

  return (
    <section
      id="experience"
      className="snap-start h-screen overflow-y-auto pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">
              Experience &amp; Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              My professional journey and continuous learning path in software
              development.
            </p>

            {/* Toggle Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={activeTab === "experience" ? "default" : "outline"}
                onClick={() => setActiveTab("experience")}
                className="min-w-[140px]"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Experience
              </Button>
              <Button
                variant={activeTab === "education" ? "default" : "outline"}
                onClick={() => setActiveTab("education")}
                className="min-w-[140px]"
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                Education
              </Button>
              <Button
                variant={activeTab === "certifications" ? "default" : "outline"}
                onClick={() => setActiveTab("certifications")}
                className="min-w-[140px]"
              >
                <Award className="h-4 w-4 mr-2" />
                Certifications
              </Button>
            </div>
          </div>

          {/* Work Experience */}
          {activeTab === "experience" && (
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, achieveIndex) => (
                          <li key={achieveIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        {edu.school}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                    <div>
                      <h4 className="mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Certifications */}
          {activeTab === "certifications" && (
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                    >
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
