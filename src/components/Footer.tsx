import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Vikram Tanwer
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-Stack Developer passionate about creating exceptional digital experiences. 
              Always learning, always building, always improving.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/vikramtanwer18" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vikram-tanwer18/" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:vikramtanwer18@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-text-highlight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-text-highlight">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Full-Stack Solutions</li>
              <li>API Development</li>
              <li>Consulting</li>
              <li>Code Review</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Vikram Tanwer. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> and lots of coffee
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;