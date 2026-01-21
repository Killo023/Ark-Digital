import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Code, Cloud, RefreshCw, Shield, Zap, Database, Smartphone, Globe, BarChart3, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack development, AI integration, security solutions, cloud infrastructure, and digital transformation services.",
};

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "We create tailored software solutions that align with your business goals, enhancing operational efficiency and driving digital innovation through user-friendly interfaces and robust functionalities.",
      features: [
        "Tailored software solutions",
        "Business goal alignment",
        "Operational efficiency enhancement",
        "User-friendly interfaces",
        "Robust functionalities",
        "Digital innovation",
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&q=80",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & DevOps",
      description: "Our cloud infrastructure services provide scalable solutions with seamless integration, ensuring high availability and performance. We implement DevOps best practices to streamline processes, enhancing collaboration and reducing time-to-market.",
      features: [
        "Scalable cloud solutions",
        "Seamless integration",
        "High availability and performance",
        "DevOps best practices",
        "Streamlined processes",
        "Reduced time-to-market",
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80",
    },
    {
      icon: RefreshCw,
      title: "Digital Transformation Consulting",
      description: "We guide organizations in navigating their digital transformation journey, leveraging technology to improve customer experiences, operational agility, and overall business performance through strategic insights and actionable plans.",
      features: [
        "Digital transformation guidance",
        "Customer experience improvement",
        "Operational agility enhancement",
        "Strategic insights",
        "Actionable plans",
        "Business performance optimization",
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&q=80",
    },
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Comprehensive security audits, penetration testing, and secure coding practices.",
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Machine learning models, AI-powered automation, and intelligent system integration.",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Database design, data migration, analytics, and business intelligence solutions.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native iOS and Android apps, cross-platform solutions, and mobile optimization.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites with SEO optimization and performance tuning.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data visualization, reporting dashboards, and business intelligence tools.",
    },
    {
      icon: Lock,
      title: "Compliance & Security",
      description: "GDPR compliance, security audits, and regulatory requirement implementation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-navy to-navy-light pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              Innovative solutions for business transformation. We provide customized, cutting-edge technology services that enhance operational effectiveness.
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              ARK DIGITAL focuses on mid-sized to large enterprises, seeking innovative solutions to drive efficiency and growth through robust digital transformation strategies tailored to their unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop&q=80"
            alt="Main Services Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h2 className="text-white font-display text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-300">
                        <span className="text-gold mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
            alt="Additional Services Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light/95 via-navy/90 to-navy-dark/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Additional Capabilities
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Beyond our core services, we offer specialized solutions to meet your unique needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {additionalServices.map((service, index) => {
                const serviceImages = [
                  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80",
                ];
                return (
                  <div
                    key={service.title}
                    className="bg-navy-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all hover:bg-navy-light/50 group"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={serviceImages[index % serviceImages.length]}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                      <div className="absolute top-3 right-3 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <service.icon className="h-5 w-5 text-gold" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-white font-display text-lg font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop&q=80"
            alt="CTA Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Image Showcase */}
            <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&q=80"
                  alt="Team"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&q=80"
                  alt="Development"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&q=80"
                  alt="Innovation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="bg-navy-light/40 backdrop-blur-sm rounded-2xl p-12 border border-gold/20">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how our services can help solve your business challenges and drive growth.
              </p>
              <div className="bg-navy-dark/50 rounded-lg p-6 border border-gold/20 max-w-2xl mx-auto mb-8">
                <h3 className="text-white font-display text-lg font-bold mb-2">Our Methodology</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our Agile-Scrum methodology ensures efficient delivery of projects by promoting collaboration, flexibility, and iterative progress, ultimately leading to higher customer satisfaction and successful outcomes.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-base group"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
