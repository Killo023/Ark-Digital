"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/", label: "Home" },
      { href: "/values", label: "Values" },
      { href: "/services", label: "Services" },
      { href: "/projects", label: "Projects" },
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
      className="bg-navy-dark text-slate-300 border-t border-navy-light"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Ark Digital Logo"
                width={280}
                height={160}
                className="h-[160px] w-auto md:h-[168px]"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Navigating the flood of data with integrity, security, and excellence.
              A software firm committed to stewardship and innovation.
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
                    className="text-sm text-slate-400 hover:text-gold transition-colors duration-200"
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
                    className="text-sm text-slate-400 hover:text-gold transition-colors duration-200"
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
                <Mail className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@underratedsecurity.com"
                  className="text-sm text-slate-400 hover:text-gold transition-colors duration-200"
                >
                  info@underratedsecurity.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  Serving clients worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-light">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">
              © {currentYear} Ark Digital. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Built with integrity and excellence
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
