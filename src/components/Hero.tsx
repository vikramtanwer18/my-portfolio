import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { useState } from "react";


const Hero = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [activeSection, setActiveSection] = useState('');
   
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };
    const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === '#top') {
      scrollToTop();
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };  

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${heroBackground})`,
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

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Content Section */}
          <div className="text-center lg:text-left order-1 lg:order-1 animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Vikram Tanwer</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <span className="text-text-highlight">Full-Stack Developer</span> crafting exceptional digital experiences
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl lg:max-w-none mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Passionate about building scalable web applications with modern technologies. 
              Specialized in React, Node.js, and Python.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <Button 
                onClick={() => handleNavClick('#contact')}
                size="lg" className="glow pulse-glow">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
               
                variant="outline" size="lg" className="glass">
                <Github className="mr-2 h-4 w-4" />
                <a href="https://github.com/vikramtanwer18" target="_blank" rel="noopener noreferrer">
                  View My Work
                </a>
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start animate-scale-in" style={{animationDelay: '0.4s'}}>
              <a href="https://github.com/vikramtanwer18" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/vikram-tanwer18/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:vikramtanwer18@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2 animate-fade-in">
            <div className="relative">
              {/* Profile Image Placeholder */}

              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30 flex items-center justify-center glass glow">
                <div className="w-full ">
               
                  <img src="/my-portfolio-img.jpeg" alt="Vikram Tanwer" className="bg-cover w-full rounded-full" />
 
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full glow animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full glow animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
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