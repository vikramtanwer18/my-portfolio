import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Building responsive, modern web applications with the latest technologies and best practices."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Creating seamless experiences across all devices, from mobile to desktop."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Designing scalable APIs and database architectures for robust applications."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development from concept to deployment and maintenance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 1+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-text-highlight">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              Started as a curious computer science student, I've evolved into a versatile developer 
              who thrives on learning new technologies and solving challenging problems. My experience 
              spans from startups to enterprise-level applications.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe in writing clean, maintainable code and creating user experiences that are 
              both functional and delightful. When I'm not coding, you'll find me exploring new 
              frameworks.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {["Problem Solver", "Team Player", "Continuous Learner", "Innovation Enthusiast"].map((trait) => (
                <span key={trait} className="tech-badge">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4 gradient-text">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold text-primary">5+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Years Experience</span>
                  <span className="font-semibold text-primary">1+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Happy Clients</span>
                  <span className="font-semibold text-primary">5+</span>
                </div>
                {/* <div className="flex justify-between">
                  <span className="text-muted-foreground">Coffee Consumed</span>
                  <span className="font-semibold text-primary">1+</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 card-hover bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-primary mb-4 flex justify-center">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold mb-3 text-center">
                {service.title}
              </h4>
              <p className="text-muted-foreground text-center text-sm">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;