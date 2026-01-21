"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Compass, Shield, Anchor } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp, staggerContainer, revealCurve } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black-light to-black pt-24 md:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80"
          alt="Software Development Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black-light/80 to-black/90" />
      </div>

      {/* Background decorative elements - hull-inspired curves */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow rounded-full blur-3xl"
        />
        
        {/* Logo Watermark */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Image
            src="/images/Logo%20icon%20transparent%20background.png"
            alt="Logo Watermark"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
        
        {/* Curved lines representing hull */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 opacity-20"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 Q300,100 600,150 T1200,100 L1200,200 Z"
            fill="currentColor"
            className="text-yellow"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="visible"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          {/* Main Heading */}
          <motion.div variants={slideUp} className="mb-6">
            <div className="flex flex-col items-center justify-center mb-6 gap-4">
              <Image
                src="/images/Logo%20Text%20white.png"
                alt="Ark Digital"
                width={370}
                height={150}
                className="opacity-90"
                priority
              />
            </div>
            <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-black-light/50 backdrop-blur-sm rounded-full border border-yellow/30">
              <Anchor className="h-4 w-4 text-yellow" />
              <span className="text-sm text-slate-300 font-medium">
                Software Excellence
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-yellow">Digital Solutions</span>
                <motion.span
                  variants={revealCurve}
                  className="absolute bottom-0 left-0 right-0 h-3 bg-yellow/20 -z-0"
                  style={{ transformOrigin: "bottom" }}
                />
              </span>
              <br />
              That Scale
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={slideUp}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming Businesses. Your Partner in Software Development. We are committed to pioneering digital solutions that empower businesses to thrive in an ever-changing technological landscape.
          </motion.p>

          {/* Value Propositions */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10"
          >
            {[
              {
                icon: Shield,
                title: "Stability & Security",
                description: "Clean code and architectural integrity for safe, reliable digital assets",
              },
              {
                icon: Compass,
                title: "Strategic Navigation",
                description: "We don&apos;t just build; we consult and find the most efficient path to your goals",
              },
              {
                icon: Anchor,
                title: "Modern Innovation",
                description: "Latest in cloud computing, AI integration, and full-stack development",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                className="p-4 md:p-6 bg-black-light/30 backdrop-blur-sm rounded-lg border border-yellow/30 hover:border-yellow/70 transition-all duration-300 relative"
              >
                <div className="absolute top-2 right-2 opacity-30">
                  <Image
                    src="/images/Logo%20icon%20transparent%20background.png"
                    alt="Logo Icon"
                    width={95}
                    height={95}
                  />
                </div>
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

          {/* CTA Buttons */}
          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-yellow hover:bg-yellow-light text-black font-semibold px-8 py-6 text-base group"
            >
              <Link href="/projects">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-yellow text-yellow hover:bg-yellow/10 px-8 py-6 text-base"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
