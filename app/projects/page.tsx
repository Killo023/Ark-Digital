import { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of software solutions. From healthcare to legal services, we deliver excellence across industries.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-navy to-navy-light">
      {/* Hero Section with Background */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
            alt="Projects Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Showcasing excellence across industries. Each project represents our commitment to integrity, security, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80"
            alt="Projects Grid Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light/95 via-navy/90 to-navy-dark/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </div>
  );
}
