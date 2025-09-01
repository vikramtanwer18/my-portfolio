import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 gradient-bg opacity-20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary rounded-full glow float`}
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Alex Johnson</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up">
            <span className="text-text-highlight">Full-Stack Developer</span> crafting exceptional digital experiences
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Passionate about building scalable web applications with modern technologies. 
            Specialized in React, Node.js, and cloud architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="glow pulse-glow">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="glass">
              <Github className="mr-2 h-4 w-4" />
              View My Work
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;