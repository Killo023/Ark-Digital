import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Book a GTM & Revenue Audit",
  description: "Book a free GTM & Revenue Leak Audit with Arc Digital. We'll audit your pipeline, identify leaks, and show you the path to automated revenue.",
};

export default function ContactPage() {
  return <ContactForm />;
}
