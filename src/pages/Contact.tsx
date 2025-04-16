import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, ExternalLink } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    description: "Drop me a line at",
    value: "dev.priyanshurawat@gmail.com",
    link: "mailto:dev.priyanshurawat@gmail.com",
  },
  {
    icon: <IconBrandLinkedin className="h-6 w-6" />,
    title: "LinkedIn",
    description: "Let's connect on",
    value: "linkedin.com/in/priyanshu-rawat-3251b4271",
    link: "https://www.linkedin.com/in/priyanshu-rawat-3251b4271/",
  },
  {
    icon: <IconBrandGithub className="h-6 w-6" />,
    title: "GitHub",
    description: "Check out my work on",
    value: "github.com/priyanshu-rawat-2205",
    link: "https://github.com/priyanshu-rawat-2205/",
  },
  {
    icon: <IconBrandX className="h-6 w-6" />,
    title: "X (Twitter)",
    description: "Follow me on",
    value: "@Mphibian22",
    link: "https://x.com/Mphibian22",
  },
];

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      {method.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        {method.title}
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                      <p className="text-sm font-medium">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                className="min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </Card>

        {/* Additional Info */}
        <div className="text-center text-muted-foreground">
          <p>Based in India</p>
          <p>Available for remote work worldwide</p>
        </div>
      </motion.div>
    </div>
  );
} 