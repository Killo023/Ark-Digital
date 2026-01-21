"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackToProjects() {
  return (
    <div className="mb-8">
      <Link
        href="/projects"
        className="inline-flex items-center text-slate-300 hover:text-gold transition-colors group"
        onClick={(e) => {
          // Double-check: ensure we're going to /projects
          const target = e.currentTarget.getAttribute("href");
          if (target !== "/projects") {
            e.preventDefault();
            window.location.href = "/projects";
          }
        }}
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </Link>
    </div>
  );
}
