import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Intern",
      company: "3HandShake pvt. ltd.",
      location: "Jaipur, Rajasthan, India",
      period: "2024 - 2025",
      type: "Internship",
      description: "Contributed to the development of a SaaS platform, focusing on both frontend and backend tasks. Collaborated with cross-functional teams to deliver high-quality features.",
      achievements: [
        "Developed 10+ features improving user engagement by 30%",
        "Collaborated with designers to enhance UI/UX",
        "Participated in code reviews and contributed to team knowledge sharing",
        "Optimized application performance, reducing load times by 20%"
      ],
      technologies: ["React", "Node.js", "Python", "Firebase", "Tailwind CSS"]
    },
    {
      title: "Full-Stack Developer",
      company: "Fonixtech Technologies",
      location: "Jaipur, Rajasthan, India",
      period: "2025 - Present",
      type: "Full-time",
      description: "Developed and maintained multiple client projects, Worked directly with clients to understand requirements and deliver solutions.",
      achievements: [
        "Built 5+ successful web applications from scratch",
        "Increased client satisfaction score to 95%",
        "Reduced bug reports by 50% through thorough testing",
        "Led a team of 3 junior developers"
      ],
      technologies: ["React", "Express.js", "MongoDB", 'Python', "PostgreSQL", "Tailwind CSS", "Node.js"]
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Apex University",
      location: "Jaipur, Rajasthan, India",
      period: "2023 - 2025",
      details: "Specialized in software development, algorithms, and data structures. Completed projects on web development and database management."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey through various roles, showcasing growth, leadership, and technical expertise.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-start to-gradient-end" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background glow" />
                
                <Card className="ml-20 p-6 card-hover bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 gradient-text">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="secondary" className="tech-badge">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-text-highlight">Key Achievements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="tech-badge text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-text-highlight">
            Education
          </h3>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="p-6 card-hover bg-card/50 backdrop-blur-sm animate-scale-in"
            >
              <h3 className="text-xl font-bold mb-2 gradient-text">
                {edu.degree}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span className="font-medium">{edu.school}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                {edu.details}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;