"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Send, CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, slideUp } from "@/lib/animations";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black-light to-black pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80"
            alt="Contact Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black-light/90 to-black/95" />
        </div>
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Book Your Free <span className="text-yellow">GTM & Revenue Audit</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-4">
              We&apos;ll audit your current pipeline, identify every revenue leak, and deliver a clear 
              roadmap for an automated GTM system — no commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.div variants={fadeIn} className="flex items-center gap-2 text-sm text-slate-400 bg-black-light/30 px-4 py-2 rounded-full border border-yellow/20">
                <Calendar className="h-4 w-4 text-yellow" />
                <span>30-min discovery call</span>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center gap-2 text-sm text-slate-400 bg-black-light/30 px-4 py-2 rounded-full border border-yellow/20">
                <CheckCircle2 className="h-4 w-4 text-yellow" />
                <span>Custom audit report</span>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center gap-2 text-sm text-slate-400 bg-black-light/30 px-4 py-2 rounded-full border border-yellow/20">
                <ArrowRight className="h-4 w-4 text-yellow" />
                <span>ROI roadmap delivered</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&q=80"
            alt="Contact Form Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-light/95 via-black/90 to-black-light/95" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-black-light/40 backdrop-blur-sm border-yellow/20">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="h-16 w-16 text-yellow mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Audit Request Received!
                      </h3>
                      <p className="text-slate-300">
                        We&apos;ll review your details and reach out within 24 hours to schedule your free GTM audit.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-yellow"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-yellow"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Company *
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-yellow"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Phone *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-yellow"
                            placeholder="+27 79 477 2031"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-white mb-2"
                        >
                          What are you most interested in? *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2"
                        >
                          <option value="">Select an area</option>
                          <option value="speed-to-lead">Speed-to-Lead & WhatsApp Automation</option>
                          <option value="outbound">Outbound & Lead Gen Systems</option>
                          <option value="crm">CRM & Data Reconciliation</option>
                          <option value="full-audit">Full GTM & Revenue Audit</option>
                          <option value="other">Other / Not Sure Yet</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-white mb-2"
                        >
                          Tell us about your current pipeline & challenges *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-yellow"
                          placeholder="What tools are you using? What's your biggest revenue bottleneck? ..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-yellow hover:bg-yellow-light text-black font-semibold py-6 text-base"
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Book My Free Audit
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-black-light/40 backdrop-blur-sm border-yellow/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-display text-xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-yellow" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Email</h4>
                        <a
                          href="mailto:info@arkdigital.solutions"
                          className="text-slate-300 hover:text-yellow transition-colors text-sm"
                        >
                          info@arkdigital.solutions
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-yellow" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Phone / WhatsApp</h4>
                        <a
                          href="tel:+27794772031"
                          className="text-slate-300 hover:text-yellow transition-colors text-sm"
                        >
                          +27 79 477 2031
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-yellow" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Location</h4>
                        <p className="text-slate-300 text-sm">
                          Serving clients in South Africa and globally
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black-light/40 backdrop-blur-sm border-yellow/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-display text-xl font-bold mb-4">
                    What Happens Next?
                  </h3>
                  <ol className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow font-bold">1.</span>
                      <span>We review your submission within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow font-bold">2.</span>
                      <span>We schedule a 30-min discovery call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow font-bold">3.</span>
                      <span>We conduct a full pipeline audit (free)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow font-bold">4.</span>
                      <span>We deliver your custom ROI roadmap</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
