import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Users, Lightbulb, Target, User, Cpu, Globe, Server, Layout, Shield, GitBranch, Palette } from 'lucide-react';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFirebase,
  SiVercel,
  SiFigma,
  SiLinux,
  SiGraphql
} from 'react-icons/si';

const AboutSkills = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'skills'>('about');

  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented code that stands the test of time.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Player",
      description:
        "Collaborative approach to development with strong communication and leadership skills.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Problem Solver",
      description:
        "Creative thinking and analytical skills to tackle complex technical challenges.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results Driven",
      description:
        "Focused on delivering high-quality solutions that meet business objectives.",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React", color: "bg-blue-500 text-white", icon: <SiReact className="h-4 w-4" style={{ color: '#61DAFB' }} /> },
        { name: "TypeScript", color: "bg-blue-600 text-white", icon: <SiTypescript className="h-4 w-4" style={{ color: '#3178C6' }} /> },
        { name: "JavaScript", color: "bg-yellow-500 text-black", icon: <SiJavascript className="h-4 w-4" style={{ color: '#F7DF1E' }} /> },
        { name: "HTML5", color: "bg-orange-500 text-white", icon: <SiHtml5 className="h-4 w-4" style={{ color: '#E34F26' }} /> },
        { name: "CSS3", color: "bg-blue-400 text-white", icon: <SiCss3 className="h-4 w-4" style={{ color: '#1572B6' }} /> },
        { name: "Tailwind CSS", color: "bg-teal-500 text-white", icon: <SiTailwindcss className="h-4 w-4" style={{ color: '#06B6D4' }} /> },
        { name: "Next.js", color: "bg-gray-800 text-white", icon: <SiNextdotjs className="h-4 w-4" style={{ color: '#000000' }} /> },
        { name: "Vue.js", color: "bg-green-500 text-white", icon: <SiVuedotjs className="h-4 w-4" style={{ color: '#4FC08D' }} /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", color: "bg-green-600 text-white", icon: <SiNodedotjs className="h-4 w-4" style={{ color: '#339933' }} /> },
        { name: "Python", color: "bg-blue-600 text-white", icon: <SiPython className="h-4 w-4" style={{ color: '#3776AB' }} /> },
        { name: "Express.js", color: "bg-gray-700 text-white", icon: <SiExpress className="h-4 w-4" style={{ color: '#000000' }} /> },
        { name: "Django", color: "bg-green-700 text-white", icon: <SiDjango className="h-4 w-4" style={{ color: '#092E20' }} /> },
        { name: "RESTful APIs", color: "bg-purple-500 text-white", icon: <Server className="h-4 w-4" /> },
        { name: "GraphQL", color: "bg-pink-500 text-white", icon: <SiGraphql className="h-4 w-4" style={{ color: '#E10098' }} /> },
        { name: "MongoDB", color: "bg-green-600 text-white", icon: <SiMongodb className="h-4 w-4" style={{ color: '#47A248' }} /> },
        { name: "PostgreSQL", color: "bg-blue-700 text-white", icon: <SiPostgresql className="h-4 w-4" style={{ color: '#336791' }} /> }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Git", color: "bg-orange-500 text-white", icon: <SiGit className="h-4 w-4" style={{ color: '#F05032' }} /> },
        { name: "Docker", color: "bg-blue-600 text-white", icon: <SiDocker className="h-4 w-4" style={{ color: '#2496ED' }} /> },
        { name: "AWS", color: "bg-yellow-600 text-white", icon: <SiAmazon className="h-4 w-4" style={{ color: '#FF9900' }} /> },
        { name: "Firebase", color: "bg-orange-600 text-white", icon: <SiFirebase className="h-4 w-4" style={{ color: '#FFCA28' }} /> },
        { name: "Vercel", color: "bg-gray-800 text-white", icon: <SiVercel className="h-4 w-4" style={{ color: '#000000' }} /> },
        { name: "Figma", color: "bg-purple-500 text-white", icon: <SiFigma className="h-4 w-4" style={{ color: '#F24E1E' }} /> },
        { name: "VS Code", color: "bg-blue-500 text-white", icon: <Code className="h-4 w-4" style={{ color: '#007ACC' }} /> },
        { name: "Linux", color: "bg-yellow-500 text-black", icon: <SiLinux className="h-4 w-4" style={{ color: '#FCC624' }} /> }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "Problem Solving", color: "bg-green-500 text-white", icon: <Shield className="h-4 w-4" /> },
        { name: "Team Collaboration", color: "bg-blue-500 text-white", icon: <GitBranch className="h-4 w-4" /> },
        { name: "Communication", color: "bg-purple-500 text-white", icon: <Globe className="h-4 w-4" /> },
        { name: "Project Management", color: "bg-pink-500 text-white", icon: <Layout className="h-4 w-4" /> },
        { name: "Agile", color: "bg-blue-400 text-white", icon: <Code className="h-4 w-4" /> },
        { name: "Mentoring", color: "bg-teal-500 text-white", icon: <Palette className="h-4 w-4" /> }
      ]
    }
  ];



  return (
    <section id="about" className="snap-start h-screen overflow-y-auto pt-32 pb-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Toggle Buttons */}
          <div className="text-center mb-12">
            <div className="inline-flex gap-4 p-1 bg-background/50 rounded-lg border">
              <Button
                variant={activeTab === 'about' ? 'default' : 'outline'}
                onClick={() => setActiveTab('about')}
                className="min-w-[140px]"
              >
                <User className="h-4 w-4 mr-2" />
                About Me
              </Button>
              <Button
                variant={activeTab === 'skills' ? 'default' : 'outline'}
                onClick={() => setActiveTab('skills')}
                className="min-w-[140px]"
              >
                <Cpu className="h-4 w-4 mr-2" />
                Skills
              </Button>
            </div>
          </div>

          {/* About Content */}
          {activeTab === 'about' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">
                  About Me
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  I'm a passionate software developer and electrical
                  engineering student with a strong track record of
                  building innovative web applications and systems
                  that solve real-world problems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl md:text-3xl mb-6">
                    My Journey
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      My journey into software development began
                      during my early studies, where I discovered my
                      passion for coding and creating solutions that
                      make an impact. Since then, I've worked on a
                      variety of projects, including a hospital
                      management system and a modern attendance
                      tracking app, leading teams and delivering
                      results that simplify complex processes.
                    </p>
                    <p>
                      Over the years, I've earned recognition for my
                      academic excellence, including being one of
                      the top students in my country and
                      contributing to my community through volunteer
                      work and ICT initiatives. I'm driven by
                      continuous learning and staying ahead with the
                      latest technologies and best practices in both
                      software and hardware domains. I believe in
                      continuous learning and staying up-to-date
                      with the latest technologies and best
                      practices.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring
                      new technologies, contributing to open-source
                      projects, or sharing knowledge with the
                      developer community through blog posts and
                      mentoring.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg p-8 text-center">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-2xl">3+</h4>
                      <p className="text-muted-foreground">
                        Years Experience
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl">10+</h4>
                      <p className="text-muted-foreground">
                        Projects Completed
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl">15+</h4>
                      <p className="text-muted-foreground">
                        Technologies Mastered
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((item, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        {item.icon}
                      </div>
                      <h4 className="mb-3">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Skills Content */}
          {activeTab === 'skills' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Skills & Technologies</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Here are the technologies and skills I work with to create amazing digital experiences.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {skillCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {category.icon}
                        </div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            className="px-3 py-2 rounded-full text-sm bg-card border hover:shadow-md transition-all duration-200 group"
                            variant="secondary"
                          >
                            <div className="flex items-center gap-2">
                              {skill.icon && (
                                <span className="group-hover:scale-110 transition-transform duration-200">
                                  {skill.icon}
                                </span>
                              )}
                              <span className="text-foreground">{skill.name}</span>
                            </div>
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              

              {/* Current Learning */}
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Currently Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    I'm always expanding my skillset. Here's what I'm currently focusing on:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      "Machine Learning",
                      "Rust",
                      "Cloud",
                      "Python",
                      "AI/ML Integration"
                    ].map((skill, index) => (
                      <Badge key={index} variant="secondary" className="px-4 py-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
