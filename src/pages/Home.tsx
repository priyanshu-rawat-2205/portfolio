import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Home() {
  return (
    <div className="bg-background px-4 py-8 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Priyanshu Rawat
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Passionate about building modern web applications and exploring new technologies.
              Turning complex problems into elegant solutions.
            </p>
            
            <div className="flex gap-4">
              <Button variant="default">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Abstract SVG Art */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 md:w-80 md:h-80"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00FFFF" /> {/* Cyan */}
                  <stop offset="50%" stopColor="#FF00FF" /> {/* Magenta */}
                  <stop offset="100%" stopColor="#FFFF00" /> {/* Yellow */}
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                fill="url(#blob-gradient)"
                filter="url(#glow)"
                className="opacity-90 dark:opacity-80 mix-blend-multiply dark:mix-blend-plus-lighter"
                d="M40,-62.6C54.3,-56.1,69.7,-49.1,77.4,-37.1C85.2,-25.1,85.2,-8.1,81.7,7.5C78.2,23.1,71.1,37.3,61.3,49.7C51.5,62.1,39,72.6,24.4,77.6C9.8,82.6,-6.9,82,-22.4,77.1C-37.9,72.2,-52.2,63,-63.3,50.4C-74.4,37.8,-82.3,21.8,-83.7,4.8C-85,-12.2,-79.9,-30.2,-69.4,-43.7C-58.9,-57.2,-43,-66.2,-28,-69.7C-13,-73.2,1.1,-71.2,13.8,-67.5C26.5,-63.8,37.8,-58.4,40,-62.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 