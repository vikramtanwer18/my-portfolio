import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 95 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "Django", level: 75 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "FastAPI", level: 80 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 90 },
        { name: "Redis", level: 70 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git", level: 95 },
        { name: "GitHub Actions", level: 70 },
        { name: "Linux", level: 60 }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer",
    "React Professional Certificate",
    "Node.js Application Developer",
    "Google Cloud Professional"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks to build exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="p-6 card-hover bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-gradient-start to-gradient-end h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        {/* <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-text-highlight">
            Certifications & Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={cert} 
                variant="secondary" 
                className="px-4 py-2 text-sm glass animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div> */}

        {/* Tools & Technologies */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-center text-text-highlight">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "VS Code", "Figma", "Postman", "Slack", "Notion", 
              "Microsoft Suite", "Vite", "ESLint", "Prettier", "Cursor"
            ].map((tool, index) => (
              <span 
                key={tool} 
                className="tech-badge animate-scale-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;