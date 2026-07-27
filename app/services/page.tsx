import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Target, Database, Zap, BarChart3, Settings, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "Arc Digital — Speed-to-Lead WhatsApp Automation, Outbound Lead Gen Systems, CRM & Data Reconciliation for B2B SMEs.",
};

export default function ServicesPage() {
  const coreServices = [
    {
      icon: MessageCircle,
      title: "Speed-to-Lead & WhatsApp Automation",
      subtitle: "Capture every lead the moment they land",
      description: "Stop losing inbound leads to slow response times. We build WhatsApp-first automation systems that qualify, route, and engage prospects within seconds — not hours.",
      features: [
        "WhatsApp Business API integration with your existing number",
        "Smart qualification bots that capture intent & contact details",
        "Instant routing to the right sales rep or team",
        "Automated proposal, quote & brochure delivery via WhatsApp",
        "24/7 lead capture — even outside business hours",
        "Seamless CRM logging of every conversation",
      ],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1920&h=1080&fit=crop&q=80",
    },
    {
      icon: Target,
      title: "Outbound & Lead Gen Systems",
      subtitle: "Fill your pipeline on autopilot",
      description: "Stop manual prospecting. We build multi-channel outbound engines that find, enrich, and engage your ideal customers across email, LinkedIn, and SMS.",
      features: [
        "Multi-channel sequences (email + LinkedIn + SMS)",
        "B2B data enrichment & ICP-targeted list building",
        "AI-powered personalization at scale",
        "Automated follow-up cadences that never drop a lead",
        "A/B testing subject lines, copy & timing",
        "Performance dashboards with pipeline attribution",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80",
    },
    {
      icon: Database,
      title: "CRM & Data Reconciliation",
      subtitle: "One source of truth, zero manual entry",
      description: "Disconnected tools create data chaos. We automate the flow between your CRM, email, calendar, invoicing, and every tool in your stack — so your data is always clean, current, and actionable.",
      features: [
        "CRM-to-tool integrations (HubSpot, Salesforce, Pipedrive, etc.)",
        "Automated deduplication, enrichment & cleaning",
        "Real-time bidirectional sync across your entire sales stack",
        "Custom reporting dashboards with funnel visualization",
        "Lead scoring and routing automation",
        "Data migration and legacy system cleanup",
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black-light to-black pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&q=80"
            alt="Services Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black-light/90 to-black/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-yellow/10 backdrop-blur-sm rounded-full border border-yellow/30">
              <Zap className="h-4 w-4 text-yellow" />
              <span className="text-sm text-yellow font-medium">Automated GTM Systems</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              Three automation verticals engineered to eliminate manual overhead, 
              shorten response times, and turn your GTM into a revenue engine.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop&q=80"
            alt="Core Services Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-light/95 via-black/90 to-black-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-24">
            {coreServices.map((service, index) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-yellow" />
                  </div>
                  <p className="text-yellow font-display text-sm uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="text-white font-display text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-slate-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-yellow mr-2 mt-0.5 flex-shrink-0" />
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

      {/* Retainer Summary */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
            alt="Retainer Summary Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-light/95 via-black/90 to-black-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Start with a free audit, then choose the retainer that fits your growth stage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black-light/40 backdrop-blur-sm rounded-xl p-8 border border-yellow/20 text-center">
                <div className="w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-yellow" />
                </div>
                <h3 className="text-white font-display text-xl font-bold mb-3">1. Free GTM Audit</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We audit your current pipeline, identify leaks, and deliver a roadmap with 
                  expected ROI — no commitment required.
                </p>
              </div>
              <div className="bg-black-light/40 backdrop-blur-sm rounded-xl p-8 border border-yellow/20 text-center">
                <div className="w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-yellow" />
                </div>
                <h3 className="text-white font-display text-xl font-bold mb-3">2. We Build & Deploy</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Within days, not months. We configure your automation stack, integrate your tools, 
                  and go live with full testing.
                </p>
              </div>
              <div className="bg-black-light/40 backdrop-blur-sm rounded-xl p-8 border border-yellow/20 text-center">
                <div className="w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-yellow" />
                </div>
                <h3 className="text-white font-display text-xl font-bold mb-3">3. Revenue on Autopilot</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Monthly management, optimization, and support. Your GTM runs 24/7 — 
                  you focus on closing deals.
                </p>
              </div>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black-light/90 to-black/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black-light/40 backdrop-blur-sm rounded-2xl p-12 border border-yellow/20">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Find Your Revenue Leaks
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Book a free GTM & Revenue Leak Audit. We&apos;ll show you exactly where your pipeline is bleeding 
                and what an automated system would look like for your business.
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
        </div>
      </section>
    </div>
  );
}
