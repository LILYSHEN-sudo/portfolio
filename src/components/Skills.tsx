import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch, 
  Palette, 
  Shield,
  Cloud,
  Layout
} from 'lucide-react';
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

const Skills = () => {
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
      icon: <Database className="h-6 w-6" />,
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

  const highlights = [
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "Responsive Design",
      description: "Creating beautiful, mobile-first interfaces that work seamlessly across all devices."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security First",
      description: "Implementing robust security measures and best practices in every application."
    },
    {
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      title: "Version Control",
      description: "Expert in Git workflows, branching strategies, and collaborative development."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Focus",
      description: "Strong eye for design with experience in creating intuitive user experiences."
    }
  ];

  return (
    <section id="skills" className="snap-start h-screen overflow-y-auto py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Skills &amp; Technologies</h2>
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

          {/* Key Highlights */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-center mb-8">Key Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {highlight.icon}
                    </div>
                    <h4 className="mb-3">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
      </div>
    </section>
  );
};

export default Skills;