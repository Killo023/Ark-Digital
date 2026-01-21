"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

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

    // Simulate form submission (replace with actual server action)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
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
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-navy to-navy-light pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80"
            alt="Contact Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-4">
              Ready to transform your digital presence? Let's discuss how we can help solve your business challenges.
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Fill out the form below or reach out directly. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&q=80"
            alt="Contact Form Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light/95 via-navy/90 to-navy-dark/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-navy-light/40 backdrop-blur-sm border-gold/20">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="h-16 w-16 text-gold mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Thank You!
                      </h3>
                      <p className="text-slate-300">
                        We've received your message and will get back to you soon.
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
                            className="bg-navy-dark/50 border-navy-light/50 text-white placeholder:text-slate-500 focus:border-gold"
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
                            className="bg-navy-dark/50 border-navy-light/50 text-white placeholder:text-slate-500 focus:border-gold"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="bg-navy-dark/50 border-navy-light/50 text-white placeholder:text-slate-500 focus:border-gold"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Phone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-navy-dark/50 border-navy-light/50 text-white placeholder:text-slate-500 focus:border-gold"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-white mb-2"
                        >
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-navy-light/50 bg-navy-dark/50 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                        >
                          <option value="">Select a service</option>
                          <option value="custom-software">Custom Software Development</option>
                          <option value="cloud-infrastructure">Cloud Infrastructure</option>
                          <option value="digital-transformation">Digital Transformation</option>
                          <option value="ai-integration">AI Integration</option>
                          <option value="security">Security Solutions</option>
                          <option value="consulting">Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-white mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="bg-navy-dark/50 border-navy-light/50 text-white placeholder:text-slate-500 focus:border-gold"
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-6 text-base"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
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
              <Card className="bg-navy-light/40 backdrop-blur-sm border-gold/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-display text-xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Email</h4>
                        <a
                          href="mailto:info@underratedsecurity.com"
                          className="text-slate-300 hover:text-gold transition-colors"
                        >
                          info@underratedsecurity.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Phone</h4>
                        <a
                          href="tel:+27794772031"
                          className="text-slate-300 hover:text-gold transition-colors"
                        >
                          +27 79 477 2031
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Location</h4>
                        <p className="text-slate-300">
                          Serving clients worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-navy-light/40 backdrop-blur-sm border-gold/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-display text-xl font-bold mb-4">
                    Response Time
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
