import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-navy to-navy-light flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">
          Project Not Found
        </h1>
        <p className="text-lg text-slate-300">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    </div>
  );
}
