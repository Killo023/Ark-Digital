"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Zap, BarChart3, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black-light to-black pt-4 md:pt-8">
      <div className="absolute inset-0 z-[1]">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80"
          alt="GTM Analytics Background"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black-light/80 to-black/90" />
      </div>

      <div className="absolute inset-0 overflow-hidden z-[1]">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-yellow rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.06 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="visible"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={slideUp} className="mb-6">
            <div className="flex flex-col items-center justify-center mb-8 gap-4">
              <Image
                src="/images/Logo%20Text%20white.png"
                alt="Arc Digital"
                width={370}
                height={150}
                className="opacity-90"
                priority
              />
            </div>
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-yellow/10 backdrop-blur-sm rounded-full border border-yellow/30">
              <Zap className="h-4 w-4 text-yellow" />
              <span className="text-sm text-yellow font-medium">
                GTM & Revenue Automation Agency
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Predictable Revenue.{" "}
              <span className="text-yellow">Instant Lead Response.</span>
              <br />
              Automated Growth.
            </h1>
          </motion.div>

          <motion.p
            variants={slideUp}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We engineer automated GTM systems that replace manual admin with scalable growth engines — 
            helping South African and global B2B SMEs capture, qualify, and convert leads on autopilot.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12"
          >
            {[
              {
                icon: Zap,
                title: "Speed-to-Lead",
                description: "WhatsApp automation that qualifies and routes inbound leads in seconds, not hours",
              },
              {
                icon: BarChart3,
                title: "Outbound Pipelines",
                description: "Multi-channel sequences with data enrichment that fill your pipeline on autopilot",
              },
              {
                icon: MessageCircle,
                title: "CRM Sync",
                description: "Automated data flow between your tools — no more manual entry or silos",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                className="p-4 md:p-6 bg-black-light/30 backdrop-blur-sm rounded-lg border border-yellow/30 hover:border-yellow/70 transition-all duration-300"
              >
                <item.icon className="h-8 w-8 md:h-10 md:w-10 text-yellow mx-auto mb-3" />
                <h3 className="font-display text-sm md:text-base font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-yellow hover:bg-yellow-light text-black font-semibold px-8 py-6 text-base group"
            >
              <Link href="/contact">
                Book a GTM & Revenue Audit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-yellow text-yellow hover:bg-yellow/10 px-8 py-6 text-base"
            >
              <Link href="/services">See How It Works</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-yellow/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-yellow rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
