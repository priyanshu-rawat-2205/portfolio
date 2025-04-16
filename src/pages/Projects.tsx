import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork, Eye, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

// You can add more projects to this array
const projects = [
  {
    title: "Project Name",
    description: "A comprehensive description of your project. Explain what problem it solves and what technologies were used.",
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com",
    stars: 25,
    forks: 8,
    watchers: 15,
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    topics: ["Web Development", "Full Stack", "Open Source"]
  },
  // Add more projects...
];

export function Projects() {
  return (
    <div className="min-h-screen bg-background px-4 py-12 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my open source projects and personal works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold hover:text-primary flex items-center gap-2 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        {project.title}
                      </a>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{project.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{project.watchers}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {project.topics.map((topic, i) => (
                      <Badge key={i} variant="outline" className="px-2 py-0.5 text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-end gap-4 pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 