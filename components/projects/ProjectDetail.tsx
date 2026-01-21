"use client";

import Image from "next/image";
import { Calendar, ExternalLink, Github, Tag } from "lucide-react";
import { Project } from "@/lib/projects";
import { ProjectGallery } from "./ProjectGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import Link from "next/link";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideUp}
        className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-lg"
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-2 bg-gold text-navy-dark text-sm font-semibold rounded-full">
              {project.category}
            </span>
            <span className="px-4 py-2 bg-navy-light/80 backdrop-blur-sm text-white text-sm rounded-full flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl">
            {project.description}
          </p>
        </div>
      </motion.div>

      {/* Quick Info */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="flex flex-wrap gap-4"
      >
        {project.liveUrl && (
          <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Live Site
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Link>
          </Button>
        )}
      </motion.div>

      {/* Case Study Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Problem */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <Card className="bg-navy-light/20 border-navy-light/50 h-full">
            <CardHeader>
              <CardTitle className="text-gold">The Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">{project.problem}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <Card className="bg-navy-light/20 border-navy-light/50 h-full">
            <CardHeader>
              <CardTitle className="text-gold">Our Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">{project.solution}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Card className="bg-navy-light/20 border-navy-light/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gold">
              <Tag className="h-5 w-5" />
              <span>Technology Stack</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-navy-dark text-slate-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.backend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-navy-dark text-slate-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.techStack.tools && (
              <div>
                <h4 className="text-white font-semibold mb-2">Tools & Services</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-navy-dark text-slate-300 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Features */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
      >
        <Card className="bg-navy-light/20 border-navy-light/50">
          <CardHeader>
            <CardTitle className="text-gold">Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-gold mt-1">•</span>
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Challenges & Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <Card className="bg-navy-light/20 border-navy-light/50 h-full">
            <CardHeader>
              <CardTitle className="text-gold">Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-slate-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <Card className="bg-navy-light/20 border-navy-light/50 h-full">
            <CardHeader>
              <CardTitle className="text-gold">Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-slate-300">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Gallery */}
      {project.galleryImages.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
            Project Gallery
          </h2>
          <ProjectGallery images={project.galleryImages} projectTitle={project.title} />
        </motion.div>
      )}
    </div>
  );
}
