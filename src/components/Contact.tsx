import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "alex.johnson@email.com",
      link: "mailto:alex.johnson@email.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com",
      username: "@alexjohnson"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com",
      username: "Alex Johnson"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://twitter.com",
      username: "@alexjohnson_dev"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 card-hover bg-card/50 backdrop-blur-sm animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="glass"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="glass resize-none"
                    placeholder="Tell me about your project, timeline, and how I can help..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full glow pulse-glow"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="p-6 card-hover bg-card/50 backdrop-blur-sm animate-scale-in">
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="text-primary mt-0.5 group-hover:text-primary-glow transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">
                        {info.title}
                      </div>
                      <div className="text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 card-hover bg-card/50 backdrop-blur-sm animate-scale-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                Follow Me
              </h3>
              
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="text-primary group-hover:text-primary-glow transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 card-hover bg-card/50 backdrop-blur-sm animate-scale-in" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm">Available for new projects</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Response time: Usually within 24 hours
                </div>
                <div className="text-sm text-muted-foreground">
                  Timezone: PST (UTC-8)
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new challenges and help bring innovative ideas to life. 
              Let's discuss how we can work together to achieve your goals.
            </p>
            <Button size="lg" className="glow">
              <Mail className="mr-2 h-4 w-4" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;