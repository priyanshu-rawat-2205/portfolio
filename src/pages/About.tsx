import { motion } from "framer-motion";
import {Code, Brain, Globe, Rocket, BookOpen, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <div>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Technical Skills */}
          <section className="space-y-6">
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Technical Skills</h2>
              <Button variant="ghost">Download Resume</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">SQL</Badge>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                  <Badge variant="secondary">Redux</Badge>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </Card>
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">Senior Full Stack Developer</h3>
                      <p className="text-muted-foreground">Tech Company Name</p>
                    </div>
                    <Badge>2021 - Present</Badge>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Led development of microservices architecture</li>
                    <li>Improved application performance by 40%</li>
                    <li>Mentored junior developers</li>
                  </ul>
                </div>
              </Card>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Project Name</h3>
                </div>
                <p className="text-muted-foreground">Brief project description highlighting key technologies and achievements.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </Card>
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Education & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Computer Science</h3>
                </div>
                <p className="text-muted-foreground">University Name</p>
                <Badge>2017 - 2021</Badge>
              </Card>
            </div>
          </section>

          {/* Interests */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Interests & Hobbies</h2>
            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="text-base py-2 px-4">
                <Coffee className="h-4 w-4 mr-2" />
                Open Source Contributing
              </Badge>
              <Badge variant="outline" className="text-base py-2 px-4">Tech Blogging</Badge>
              <Badge variant="outline" className="text-base py-2 px-4">AI/ML</Badge>
              <Badge variant="outline" className="text-base py-2 px-4">Cloud Computing</Badge>
            </div>
          </section>
        </motion.div>
    </div>
  )
} 