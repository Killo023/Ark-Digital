"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  const phoneNumber = "+27794772031";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />
      <span className="sr-only">Chat on WhatsApp</span>
    </Link>
  );
}
