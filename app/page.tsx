import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Clock, Zap, BarChart3, MessageCircle, Database, Layers, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Arc Digital — GTM & Revenue Automation Agency. Predictable revenue, instant lead response, automated growth for B2B SMEs.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* The Problem / The Fix */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-black-light to-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80"
            alt="Data Center Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black-light/90 to-black/95" />
        </div>
        <Reveal className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Your Revenue Has a Leak.{" "}
                <span className="text-yellow">We&apos;ll Find It.</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Most B2B SMEs lose 40-60% of inbound leads because they respond too late, 
                rely on manual follow-ups, or have disconnected tools. We fix that.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Reveal delay={0.1} direction="left" className="bg-red-950/20 backdrop-blur-sm rounded-lg border border-red-500/20 p-8">
                <h3 className="font-display text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  The Old Way
                </h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">• Manual lead sorting and email ping-pong</li>
                  <li className="flex items-start gap-2">• Hours wasted on CRM data entry</li>
                  <li className="flex items-start gap-2">• No follow-up automation — leads go cold</li>
                  <li className="flex items-start gap-2">• Disconnected tools creating data silos</li>
                  <li className="flex items-start gap-2">• Sales and marketing operating in silos</li>
                </ul>
              </Reveal>
              <Reveal delay={0.2} direction="right" className="bg-green-950/20 backdrop-blur-sm rounded-lg border border-yellow/30 p-8">
                <h3 className="font-display text-lg font-bold text-yellow mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  The Arc Digital Fix
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">• Inbound leads qualified & routed in seconds via WhatsApp</li>
                  <li className="flex items-start gap-2">• Automated CRM sync — zero manual entry</li>
                  <li className="flex items-start gap-2">• Multi-channel sequences that nurture 24/7</li>
                  <li className="flex items-start gap-2">• Unified data pipeline across all your tools</li>
                  <li className="flex items-start gap-2">• Full-funnel visibility with actionable analytics</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Core Services */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black-light via-black to-black-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80"
            alt="Services Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-light/95 via-black/90 to-black-light/95" />
        </div>
        <Reveal className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Core Services
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Three automation verticals that eliminate manual overhead and turn your GTM into a revenue engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
              <Reveal delay={0.1} className="bg-black-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all hover:bg-black-light/50 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop&q=80"
                    alt="WhatsApp Automation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-yellow/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MessageCircle className="h-7 w-7 text-yellow" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-display text-xl font-bold mb-3">Speed-to-Lead & WhatsApp Automation</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                    Instant qualification, routing, and response for every inbound lead — right inside WhatsApp.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>WhatsApp Business API integration</span></li>
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>Automated lead qualification bots</span></li>
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>Smart routing to sales teams</span></li>
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>Instant proposal & quote delivery</span></li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="bg-black-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all hover:bg-black-light/50 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
                    alt="Outbound Systems"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-yellow/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Target className="h-7 w-7 text-yellow" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-display text-xl font-bold mb-3">Outbound & Lead Gen Systems</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                    Multi-channel pipelines with data enrichment that fill your pipeline on autopilot.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>Email + LinkedIn + SMS sequences</span></li>
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>B2B data enrichment & list building</span></li>
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>AI-powered personalization</span></li>
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>A/B testing & performance analytics</span></li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.3} className="bg-black-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow/30 hover:border-yellow/70 transition-all hover:bg-black-light/50 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"
                    alt="CRM Reconciliation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-yellow/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Database className="h-7 w-7 text-yellow" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-display text-xl font-bold mb-3">CRM & Data Reconciliation</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                    Automating data flow between your tools — no more manual entry, duplicates, or silos.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>CRM-to-tool integrations (HubSpot, Salesforce, etc.)</span></li>
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>Automated deduplication & cleaning</span></li>
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>Real-time sync across sales stack</span></li>
                    <li className="flex items-start"><span className="text-yellow mr-2">•</span><span>Custom reporting dashboards</span></li>
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-yellow text-yellow hover:bg-yellow/10 px-8 py-6 text-base group"
                >
                  <Link href="/services">
                    Explore All Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* Retainer Framework */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-black-light to-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&q=80"
            alt="Retainer Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black-light/90 to-black/95" />
        </div>
        <Reveal className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Choose Your <span className="text-yellow">Growth Track</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Monthly retainers designed for South African (ZAR) and international (USD) clients. 
                Pick the tier that matches your revenue ambition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Reveal delay={0.1} direction="left" className="bg-black-light/40 backdrop-blur-sm rounded-xl border border-yellow/30 hover:border-yellow/70 transition-all overflow-hidden">
                <div className="bg-yellow/10 px-8 py-6 border-b border-yellow/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="h-5 w-5 text-yellow" />
                    <h3 className="font-display text-xl font-bold text-white">Phase 2: Core Growth</h3>
                  </div>
                  <p className="text-sm text-slate-400">Mid-tier — for businesses ready to automate their GTM engine</p>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm text-slate-400">Starting from</p>
                    <p className="text-3xl font-bold text-white">R18,500<span className="text-base text-slate-400 font-normal">/mo</span></p>
                    <p className="text-sm text-slate-500">or $1,000/mo for international</p>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><span className="text-yellow mt-1">•</span><span>Speed-to-lead WhatsApp bot setup & management</span></li>
                    <li className="flex items-start gap-2"><span className="text-yellow mt-1">•</span><span>Single outbound channel (email or LinkedIn)</span></li>
                    <li className="flex items-start gap-2"><span className="text-yellow mt-1">•</span><span>CRM-tool sync (up to 3 integrations)</span></li>
                    <li className="flex items-start gap-2"><span className="text-yellow mt-1">•</span><span>Monthly performance report</span></li>
                    <li className="flex items-start gap-2"><span className="text-yellow mt-1">•</span><span>Dedicated support (email)</span></li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-yellow hover:bg-yellow-light text-black font-semibold"
                  >
                    <Link href="/contact">Start Core Growth</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.2} direction="right" className="bg-black-light/40 backdrop-blur-sm rounded-xl border border-yellow/50 hover:border-yellow-100 transition-all overflow-hidden relative">
                <div className="absolute top-4 right-4 bg-yellow text-black text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <div className="bg-yellow/15 px-8 py-6 border-b border-yellow/30">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-yellow" />
                    <h3 className="font-display text-xl font-bold text-white">Phase 3: Full-Stack Scale</h3>
                  </div>
                  <p className="text-sm text-slate-400">Premium — end-to-end revenue operations for high-growth teams</p>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm text-slate-400">Starting from</p>
                    <p className="text-3xl font-bold text-white">R38,000<span className="text-base text-slate-400 font-normal">/mo</span></p>
                    <p className="text-sm text-slate-500">or $2,200/mo for international</p>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><span className="text-yellow mt-1">•</span><span>Everything in Core Growth, plus:</span></li>
                    <li className="flex items-start gap-2"><span className="text-yellow mt-1">•</span><span>Multi-channel outbound (email + LinkedIn + SMS)</span></li>
                    <li className="flex items-start gap-2"><span className="text-yellow mt-1">•</span><span>Full CRM audit, rebuild & ongoing reconciliation</span></li>
                    <li className="flex items-start gap-2"><span className="text-yellow mt-1">•</span><span>Custom analytics dashboard & funnel tracking</span></li>
                    <li className="flex items-start gap-2"><span className="text-yellow mt-1">•</span><span>Quarterly strategy calls & priority support</span></li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-yellow hover:bg-yellow-light text-black font-semibold"
                  >
                    <Link href="/contact">Go Full-Stack Scale</Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="text-center mt-10">
                <p className="text-slate-400 text-sm">
                  All retainers include a free GTM & Revenue Leak Audit to identify exactly where your pipeline is bleeding.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* About Arc Digital / Social Proof */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black-light via-black to-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
            alt="Team Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-light/95 via-black/90 to-black/95" />
        </div>
        <Reveal className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Lean Team. <span className="text-yellow">Massive Impact.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              We&apos;re a small, agile crew of technical operators who have built and scaled revenue systems 
              for businesses across South Africa and globally. We don&apos;t do bloated agencies or 6-month 
              delivery timelines. We deploy high-impact automations in days, not months.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <Reveal delay={0.1} className="bg-black-light/30 backdrop-blur-sm rounded-lg border border-yellow/20 p-6">
                <p className="text-3xl font-bold text-yellow mb-1">5+</p>
                <p className="text-sm text-slate-400">Years in B2B Tech</p>
              </Reveal>
              <Reveal delay={0.15} className="bg-black-light/30 backdrop-blur-sm rounded-lg border border-yellow/20 p-6">
                <p className="text-3xl font-bold text-yellow mb-1">50+</p>
                <p className="text-sm text-slate-400">Automations Deployed</p>
              </Reveal>
              <Reveal delay={0.2} className="bg-black-light/30 backdrop-blur-sm rounded-lg border border-yellow/20 p-6">
                <p className="text-3xl font-bold text-yellow mb-1">3 Days</p>
                <p className="text-sm text-slate-400">Average Onboarding</p>
              </Reveal>
              <Reveal delay={0.25} className="bg-black-light/30 backdrop-blur-sm rounded-lg border border-yellow/20 p-6">
                <p className="text-3xl font-bold text-yellow mb-1">ZAR + USD</p>
                <p className="text-sm text-slate-400">Local & Global Clients</p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-yellow text-yellow hover:bg-yellow/10 px-8 py-6 text-base group"
              >
                <Link href="/projects">
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* Projects Preview */}
      <ProjectsPreview />

      {/* Final CTA */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-black-light to-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop&q=80"
            alt="CTA Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black-light/90 to-black/95" />
        </div>
        <Reveal className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Stop <span className="text-yellow">Losing Revenue</span> to Leaky Pipelines?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Book a free GTM & Revenue Leak Audit. We&apos;ll audit your current pipeline, identify the leaks, 
              and show you exactly what an automated GTM system would look like for your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow hover:bg-yellow-light text-black font-semibold px-10 py-7 text-lg group"
            >
              <Link href="/contact">
                Book Your Free Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-sm text-slate-500 mt-4">
              No commitment. No sales pitch. Just a clear roadmap to automated revenue.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
