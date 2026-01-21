import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { BackToProjects } from "@/components/projects/BackToProjects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-navy to-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Back Button */}
        <BackToProjects />

        {/* Project Detail */}
        <ProjectDetail project={project} />
      </div>
    </div>
  );
}
