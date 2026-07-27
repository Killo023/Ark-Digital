"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/projects", label: "Case Studies" },
      { href: "/contact", label: "Book an Audit" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-black text-slate-300 border-t border-yellow/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex flex-col items-start space-y-3">
              <Image
                src="/images/Logo%20side%20by%20side.png"
                alt="Arc Digital"
                width={400}
                height={180}
                className="h-[180px] w-auto"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Automated GTM systems, outbound pipelines, and speed-to-lead workflows 
              for B2B SMEs ready to scale.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-yellow mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@underratedsecurity.com"
                  className="text-sm text-slate-400 hover:text-yellow transition-colors duration-200"
                >
                  info@underratedsecurity.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Zap className="h-4 w-4 text-yellow mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  Serving clients in South Africa & globally
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-yellow/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} Arc Digital. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Automated GTM Systems — Predictable Revenue. Instant Lead Response. Automated Growth.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
