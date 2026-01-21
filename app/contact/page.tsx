import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ark Digital. We'd love to hear from you.",
};

export default function ContactPage() {
  return <ContactForm />;
}
