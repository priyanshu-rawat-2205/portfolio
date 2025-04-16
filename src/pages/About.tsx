import { motion } from "framer-motion";
import {Code, Brain, Globe, BookOpen, Coffee, FileBadge } from "lucide-react";
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
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">PHP</Badge>
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
                  <Badge variant="secondary">Bootstrap</Badge>
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
                  <Badge variant="secondary">MySQL/MariaDB</Badge>
                  <Badge variant="secondary">Flask</Badge>
                  <Badge variant="secondary">Laravel</Badge>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">Nginx</Badge>
                  <Badge variant="secondary">AWS Cloud</Badge>
                  <Badge variant="secondary">Jenkins</Badge>
                  <Badge variant="secondary">Networking</Badge>
                  <Badge variant="secondary">KVM/QEMU</Badge>
                </div>
              </Card>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Bachelor's in Technology (CSE)</h3>
                </div>
                <p className="text-muted-foreground">IPS College of Tech. & Mgmt. (7.49 CGPA)</p>
                <p className="text-muted-foreground">Gwalior (M.P.)</p>
                <Badge>2021 - 2025</Badge>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">High School (10th)</h3>
                </div>
                <p className="text-muted-foreground">Govt. Gorkhee H. S. School, (75%)</p>
                <p className="text-muted-foreground">Gwalior (M.P.)</p>
                <Badge>2017 - 2018</Badge>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Higher Secondary School (12th)</h3>
                </div>
                <p className="text-muted-foreground">Govt. Gorkhee H. S. School (75.5%)</p>
                <p className="text-muted-foreground">Gwalior (M.P.)</p>
                <Badge>2019 - 2020</Badge>
              </Card>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
                <div className="flex items-center gap-2">
                  <FileBadge className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    <a 
                      href="https://www.hackerrank.com/certificates/21313a5f93e6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Python (Basic)
                    </a>
                  </h3>
                </div>
                <p className="text-muted-foreground">Hackerank</p>
                <Badge>2024</Badge>
            </Card>

            <Card className="p-6">
                <div className="flex items-center gap-2">
                  <FileBadge className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    <a 
                      href="https://www.credly.com/badges/cfbaa78c-ef02-47c9-af04-11304b37f2c4/public_url" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      AWS Educate Introduction to Cloud 101
                    </a>
                  </h3>
                </div>
                <p className="text-muted-foreground">Amazon Web Services Training and Certification</p>
                <Badge>2024</Badge>
            </Card>

            <Card className="p-6">
                <div className="flex items-center gap-2">
                  <FileBadge className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    <a 
                      href="https://www.credly.com/badges/c8c89d28-4975-4c8a-b265-e5bb29de466d/public_url" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      AWS Educate Getting Started with Storage
                    </a>
                  </h3>
                </div>
                <p className="text-muted-foreground">Amazon Web Services Training and Certification</p>
                <Badge>2024</Badge>
            </Card>

            <Card className="p-6">
                <div className="flex items-center gap-2">
                  <FileBadge className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    <a 
                      href="https://www.credly.com/badges/e4f0b05c-531e-46dd-8cc6-ea9e68a8c39c/public_url" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      AWS Educate Getting Started with Compute
                    </a>
                  </h3>
                </div>
                <p className="text-muted-foreground">Amazon Web Services Training and Certification</p>
                <Badge>2024</Badge>
            </Card>

            <Card className="p-6">
                <div className="flex items-center gap-2">
                  <FileBadge className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    <a 
                      href="https://www.credly.com/badges/f1f805c0-e407-484e-ae2e-e4fcdfed392c/public_url" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      AWS Educate Getting Started with Networking
                    </a>
                  </h3>
                </div>
                <p className="text-muted-foreground">Amazon Web Services Training and Certification</p>
                <Badge>2024</Badge>
            </Card>

            <Card className="p-6">
                <div className="flex items-center gap-2">
                  <FileBadge className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    <a 
                      href="https://www.credly.com/badges/4946bd3c-b98f-44e8-8cfb-997197410b12/public_url" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      AWS Educate Getting Started with Databases
                    </a>
                  </h3>
                </div>
                <p className="text-muted-foreground">Amazon Web Services Training and Certification</p>
                <Badge>2024</Badge>
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
              <Badge variant="outline" className="text-base py-2 px-4">Music Production</Badge>
              <Badge variant="outline" className="text-base py-2 px-4">Creating New Technologies</Badge>
              <Badge variant="outline" className="text-base py-2 px-4">Writing Fiction Novels</Badge>
            </div>
          </section>
        </motion.div>
    </div>
  )
} 