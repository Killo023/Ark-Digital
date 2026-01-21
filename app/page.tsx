import { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { Shield, Compass, Anchor } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Ark Digital - A software firm focused on integrity, security, and navigating the flood of data.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      
      {/* Mission Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-navy-dark via-navy to-navy-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80"
            alt="Mission Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Core Mission
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                To empower businesses through innovative digital solutions that enhance efficiency, drive growth, and ensure sustainability in an evolving technological landscape, ultimately preparing them for future challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
              <div className="bg-navy-light/30 backdrop-blur-sm rounded-lg p-6 border border-navy-light/50 hover:border-gold/50 transition-all">
                <div className="text-gold text-4xl mb-4">🎯</div>
                <h3 className="text-white font-semibold text-lg mb-2">Target Market</h3>
                <p className="text-slate-300 text-sm">
                  We focus on mid-sized to large enterprises, seeking innovative solutions to drive efficiency and growth through robust digital transformation strategies.
                </p>
              </div>
              <div className="bg-navy-light/30 backdrop-blur-sm rounded-lg p-6 border border-navy-light/50 hover:border-gold/50 transition-all">
                <div className="text-gold text-4xl mb-4">🔄</div>
                <h3 className="text-white font-semibold text-lg mb-2">Agile-Scrum Methodology</h3>
                <p className="text-slate-300 text-sm">
                  Our Agile-Scrum methodology ensures efficient delivery by promoting collaboration, flexibility, and iterative progress, leading to higher customer satisfaction.
                </p>
              </div>
              <div className="bg-navy-light/30 backdrop-blur-sm rounded-lg p-6 border border-navy-light/50 hover:border-gold/50 transition-all">
                <div className="text-gold text-4xl mb-4">💡</div>
                <h3 className="text-white font-semibold text-lg mb-2">Innovative Solutions</h3>
                <p className="text-slate-300 text-sm">
                  We provide customized, cutting-edge technology services that enhance operational effectiveness and address the increasing demand for tailored digital transformation solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ARK Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-navy-light via-navy to-navy-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
            alt="Why Choose ARK Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light/95 via-navy/90 to-navy-dark/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose ARK Digital?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                A premier software development firm dedicated to building resilient, future-proof digital solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="bg-navy-light/40 backdrop-blur-sm rounded-xl p-8 border border-gold/20 hover:border-gold/50 transition-all hover:bg-navy-light/50">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-white font-display text-xl font-bold mb-3">Stability & Security</h3>
                <p className="text-slate-300 leading-relaxed">
                  We prioritize clean code and architectural integrity, ensuring your digital assets are safe, reliable, and built to last. Every line of code is crafted with security and stability in mind.
                </p>
              </div>
              
              <div className="bg-navy-light/40 backdrop-blur-sm rounded-xl p-8 border border-gold/20 hover:border-gold/50 transition-all hover:bg-navy-light/50">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Compass className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-white font-display text-xl font-bold mb-3">Strategic Navigation</h3>
                <p className="text-slate-300 leading-relaxed">
                  We don't just build; we consult. Our team helps you find the most efficient path to your digital goals, avoiding common pitfalls and optimizing for success.
                </p>
              </div>
              
              <div className="bg-navy-light/40 backdrop-blur-sm rounded-xl p-8 border border-gold/20 hover:border-gold/50 transition-all hover:bg-navy-light/50">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Anchor className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-white font-display text-xl font-bold mb-3">Modern Innovation</h3>
                <p className="text-slate-300 leading-relaxed">
                  Utilizing the latest in cloud computing, AI integration, and full-stack development. We stay ahead of the curve to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-navy-dark via-navy to-navy-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&q=80"
            alt="Services Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                Comprehensive software solutions designed to solve specific business challenges and drive digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
              <div className="bg-navy-light/40 backdrop-blur-sm rounded-xl p-8 border border-gold/20 hover:border-gold/50 transition-all hover:bg-navy-light/50 group">
                <div className="text-gold text-5xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                <h3 className="text-white font-display text-xl font-bold mb-3">Custom Software Development</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Tailored applications designed to solve specific business bottlenecks. We build exactly what you need, when you need it.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Web & Mobile Applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>API Development & Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Custom Business Solutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-navy-light/40 backdrop-blur-sm rounded-xl p-8 border border-gold/20 hover:border-gold/50 transition-all hover:bg-navy-light/50 group">
                <div className="text-gold text-5xl mb-4 group-hover:scale-110 transition-transform">☁️</div>
                <h3 className="text-white font-display text-xl font-bold mb-3">Cloud Infrastructure</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Building scalable environments that grow with your user base. Deploy, scale, and optimize with confidence.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Cloud Architecture Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Scalable Infrastructure Setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>DevOps & CI/CD Pipelines</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-navy-light/40 backdrop-blur-sm rounded-xl p-8 border border-gold/20 hover:border-gold/50 transition-all hover:bg-navy-light/50 group">
                <div className="text-gold text-5xl mb-4 group-hover:scale-110 transition-transform">🔄</div>
                <h3 className="text-white font-display text-xl font-bold mb-3">Digital Transformation</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Helping legacy businesses transition into the modern, data-driven era. Transform your operations with cutting-edge technology.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Legacy System Modernization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>AI Integration & Automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Data-Driven Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="/services"
                className="inline-block px-8 py-4 border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark font-semibold rounded-md transition-all text-lg"
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
