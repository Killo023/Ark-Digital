import { Metadata } from "next";
import Image from "next/image";
import { Zap, Target, Shield, Users, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Arc Digital",
  description: "Arc Digital is a lean GTM & Revenue Automation Agency. We deploy high-impact automations in days, not months.",
};

export default function ValuesPage() {
  const values = [
    {
      icon: Zap,
      title: "Speed Over Perfection",
      description: "We ship fast. While traditional agencies spend months in discovery, we deploy working automations in days. We believe in iterative improvement driven by real data, not endless speculation.",
      details: [
        "Week-long deployment cycles, not months",
        "Iterative builds with real-time feedback",
        "Data-driven optimization from day one",
      ],
    },
    {
      icon: Target,
      title: "Revenue-First Thinking",
      description: "Every automation we build ties directly to revenue. If it doesn't shorten response time, increase pipeline velocity, or reduce manual overhead, we don't build it.",
      details: [
        "Pipeline-focused automation design",
        "Clear ROI metrics on every deployment",
        "Zero fluff — only revenue-impacting work",
      ],
    },
    {
      icon: Shield,
      title: "Technical Integrity",
      description: "We're engineers who build systems that last. Clean integrations, secure data handling, and scalable architectures are non-negotiable. Your GTM stack should be built on solid foundations.",
      details: [
        "Secure, compliant integrations",
        "Clean, maintainable automation logic",
        "Scalable architectures that grow with you",
      ],
    },
    {
      icon: Users,
      title: "Partnership, Not Consulting",
      description: "We don't hand you a 50-page PDF and walk away. We embed with your team, understand your workflows, and build systems that your people actually want to use. Your success is our retention metric.",
      details: [
        "Embedded team collaboration",
        "Knowledge transfer & team training",
        "Ongoing optimization & support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black-light to-black pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
            alt="About Arc Digital Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black-light/90 to-black/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-yellow">Arc Digital</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              We&apos;re a lean team of technical operators who build automated GTM systems for 
              B2B SMEs in South Africa and globally. We deploy in days, optimise continuously, 
              and measure everything against revenue impact.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
            alt="Values Grid Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-light/95 via-black/90 to-black-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {values.map((value, index) => {
              const valueImages = [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
                "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&q=80",
              ];
              return (
                <div
                  key={value.title}
                  className="bg-black-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow/20 hover:border-yellow/50 transition-all hover:bg-black-light/50 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={valueImages[index % valueImages.length]}
                      alt={value.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-yellow/30 transition-colors">
                      <value.icon className="h-8 w-8 text-yellow" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-white font-display text-xl font-bold mb-3">
                      {value.title}
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {value.description}
                    </p>
                    <ul className="space-y-2">
                      {value.details.map((detail) => (
                        <li key={detail} className="flex items-start text-sm text-slate-400">
                          <span className="text-yellow mr-2 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
            alt="Process Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-light/95 via-black/90 to-black-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              We don&apos;t do drawn-out discovery phases or 6-month delivery timelines. 
              Here&apos;s what it looks like to work with us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black-light/30 backdrop-blur-sm rounded-lg border border-yellow/20 p-6 text-left">
                <div className="text-yellow font-display text-3xl font-bold mb-2">01</div>
                <h3 className="text-white font-display font-bold mb-2">Audit</h3>
                <p className="text-sm text-slate-400">We review your pipeline, tools, and processes. Free, no commitment.</p>
              </div>
              <div className="bg-black-light/30 backdrop-blur-sm rounded-lg border border-yellow/20 p-6 text-left">
                <div className="text-yellow font-display text-3xl font-bold mb-2">02</div>
                <h3 className="text-white font-display font-bold mb-2">Build</h3>
                <p className="text-sm text-slate-400">We configure and deploy your automation stack. Typically within a week.</p>
              </div>
              <div className="bg-black-light/30 backdrop-blur-sm rounded-lg border border-yellow/20 p-6 text-left">
                <div className="text-yellow font-display text-3xl font-bold mb-2">03</div>
                <h3 className="text-white font-display font-bold mb-2">Optimize</h3>
                <p className="text-sm text-slate-400">Monthly retainer with continuous monitoring, tweaks, and scaling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop&q=80"
            alt="CTA Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black-light/90 to-black/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your GTM Engine?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Start with a free audit. We&apos;ll show you exactly where your pipeline is leaking and how to fix it.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow hover:bg-yellow-light text-black font-semibold px-8 py-6 text-base group"
            >
              <Link href="/contact">
                Book Your Free Audit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
