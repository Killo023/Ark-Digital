"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Calendar } from "lucide-react";
import { useState } from "react";
import { Project } from "@/lib/projects";
import { Card } from "@/components/ui/card";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Fallback placeholder SVG
  const placeholderSvg = `data:image/svg+xml,${encodeURIComponent(`<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-${project.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1A2B3C;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0A1B2C;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad-${project.id})"/>
    <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="36" fill="#D4AF37" text-anchor="middle" dy=".3em" font-weight="bold">${project.title}</text>
    <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="18" fill="#94A3B8" text-anchor="middle" dy=".3em">Visit: ${project.liveUrl || 'Project Site'}</text>
  </svg>`)}`;

  return (
    <motion.div
      variants={fadeIn}
      initial="visible"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-navy-light/50 hover:border-gold/50 transition-all duration-300 bg-navy-light/20 hover:bg-navy-light/30 cursor-pointer h-full">
        <Link href={`/projects/${project.slug}`} className="block h-full">
          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden bg-navy-dark">
            <Image
              src={imageError ? placeholderSvg : project.heroImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
              unoptimized={imageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gold/90 text-navy-dark text-xs font-semibold rounded-full backdrop-blur-sm">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 line-clamp-2">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center space-x-1 group-hover:text-gold transition-colors">
                <span>View Project</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
}
