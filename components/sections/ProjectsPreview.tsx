"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/animations";

export function ProjectsPreview() {
  // Show first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black-light via-black to-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
          alt="Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-light/95 via-black/90 to-black/95" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex flex-col items-center justify-center mb-6 gap-0">
            <Image
              src="/images/Logo%20icon%20transparent%20background.png"
              alt="Ark Digital Icon"
              width={150}
              height={150}
              className="opacity-80 -mb-6"
            />
            <Image
              src="/images/Logo%20Text%20white.png"
              alt="Ark Digital"
              width={270}
              height={120}
              className="opacity-80 -mt-6"
            />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Explore our recent work. Each project demonstrates our commitment to excellence, security, and innovation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-yellow text-yellow hover:bg-yellow/10 px-8 py-6 text-base group"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
