import { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { Shield, Compass, Anchor } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Ark Digital develops custom business operation solutions. Workflows, automation, and operational systems tailored to how your business runs.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      
      {/* Mission Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-black-light to-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80"
            alt="Mission Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black-light/90 to-black/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
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
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Core Mission
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                To empower businesses through custom operational solutions that streamline workflows, automate processes, and build systems that fit how you actually work—driving efficiency, growth, and readiness for what comes next.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
              <div className="bg-black-light/30 backdrop-blur-sm rounded-lg overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
                    alt="Target Market"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Image
                      src="/images/Logo%20icon%20transparent%20background.png"
                      alt="Logo Icon"
                      width={40}
                      height={40}
                      className="opacity-60"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Target Market</h3>
                  <p className="text-slate-300 text-sm">
                    We focus on mid-sized to large enterprises seeking custom operational solutions—workflows, automation, and systems that drive efficiency and growth.
                  </p>
                </div>
              </div>
              <div className="bg-black-light/30 backdrop-blur-sm rounded-lg overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
                    alt="Agile-Scrum Methodology"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Image
                      src="/images/Logo%20icon%20transparent%20background.png"
                      alt="Logo Icon"
                      width={40}
                      height={40}
                      className="opacity-60"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Agile-Scrum Methodology</h3>
                  <p className="text-slate-300 text-sm">
                    Our Agile-Scrum methodology ensures efficient delivery by promoting collaboration, flexibility, and iterative progress, leading to higher customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="bg-black-light/30 backdrop-blur-sm rounded-lg overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&q=80"
                    alt="Innovative Solutions"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Image
                      src="/images/Logo%20icon%20transparent%20background.png"
                      alt="Logo Icon"
                      width={40}
                      height={40}
                      className="opacity-60"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Innovative Solutions</h3>
                  <p className="text-slate-300 text-sm">
                    We build custom operational systems that fit your business—workflows, automation, and process tools designed for how you work, not generic software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ARK Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black-light via-black to-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
            alt="Why Choose ARK Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-light/95 via-black/90 to-black/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
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
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose ARK Digital?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Specialists in custom business operation solutions—we build systems, workflows, and automation that fit how your business actually runs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="bg-black-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all hover:bg-black-light/50 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80"
                    alt="Stability & Security"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Shield className="h-8 w-8 text-yellow" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Image
                      src="/images/Logo%20icon%20transparent%20background.png"
                      alt="Logo Icon"
                      width={105}
                      height={105}
                      className="opacity-50"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-display text-xl font-bold mb-3">Stability & Security</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We prioritize reliability and security so your operational systems run without disruption. Built for stability, designed for the long run.
                  </p>
                </div>
              </div>
              
              <div className="bg-black-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all hover:bg-black-light/50 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80"
                    alt="Strategic Navigation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Compass className="h-8 w-8 text-yellow" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Image
                      src="/images/Logo%20icon%20transparent%20background.png"
                      alt="Logo Icon"
                      width={105}
                      height={105}
                      className="opacity-50"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-display text-xl font-bold mb-3">Strategic Navigation</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We map your operations first. Our team works with you to design the most efficient workflows and systems, avoiding bottlenecks and aligning with your goals.
                  </p>
                </div>
              </div>
              
              <div className="bg-black-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all hover:bg-black-light/50 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80"
                    alt="Modern Innovation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Anchor className="h-8 w-8 text-yellow" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Image
                      src="/images/Logo%20icon%20transparent%20background.png"
                      alt="Logo Icon"
                      width={105}
                      height={105}
                      className="opacity-50"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-display text-xl font-bold mb-3">Modern Innovation</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Modern technology applied to real operational challenges. Cloud, automation, and integration built around your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-black-light to-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&q=80"
            alt="Services Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black-light/90 to-black/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
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
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                Custom operational solutions—workflows, automation, and business systems—designed around your processes and built to scale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
              <div className="bg-black-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all hover:bg-black-light/50 group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80"
                    alt="Custom Business Operations"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Image
                      src="/images/Logo%20icon%20transparent%20background.png"
                      alt="Logo Icon"
                      width={105}
                      height={105}
                      className="opacity-50"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-display text-xl font-bold mb-3">Custom Business Operations</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Systems built around your workflows and processes. We solve operational bottlenecks with solutions that fit how you work.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start">
                      <span className="text-yellow mr-2">•</span>
                      <span>Workflow & Process Automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow mr-2">•</span>
                      <span>Operational Dashboards & Tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow mr-2">•</span>
                      <span>Business-Specific Systems</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-black-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all hover:bg-black-light/50 group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"
                    alt="Cloud Infrastructure"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Image
                      src="/images/Logo%20icon%20transparent%20background.png"
                      alt="Logo Icon"
                      width={105}
                      height={105}
                      className="opacity-50"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-display text-xl font-bold mb-3">Cloud Infrastructure</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Building scalable environments that grow with your user base. Deploy, scale, and optimize with confidence.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start">
                      <span className="text-yellow mr-2">•</span>
                      <span>Cloud Architecture Design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow mr-2">•</span>
                      <span>Scalable Infrastructure Setup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow mr-2">•</span>
                      <span>DevOps & CI/CD Pipelines</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-black-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all hover:bg-black-light/50 group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80"
                    alt="Digital Transformation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Image
                      src="/images/Logo%20icon%20transparent%20background.png"
                      alt="Logo Icon"
                      width={105}
                      height={105}
                      className="opacity-50"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-display text-xl font-bold mb-3">Digital Transformation</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Helping legacy businesses transition into the modern, data-driven era. Transform your operations with cutting-edge technology.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start">
                      <span className="text-yellow mr-2">•</span>
                      <span>Legacy System Modernization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow mr-2">•</span>
                      <span>AI Integration & Automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow mr-2">•</span>
                      <span>Data-Driven Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="/services"
                className="inline-block px-8 py-4 border-2 border-yellow text-yellow hover:bg-yellow hover:text-black font-semibold rounded-md transition-all text-lg"
              >
                Explore All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
