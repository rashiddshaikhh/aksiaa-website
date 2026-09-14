import type { Metadata } from "next";
import Section from "@/components/Section";
import Kicker from "@/components/Kicker";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Globe, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Aksiaa Technologies",
  description: "Get in touch with Aksiaa Technologies — sales@aksiaa.com, Mumbai, India.",
};

const DETAILS = [
  { icon: Mail, label: "Email", value: "sales@aksiaa.com", href: "mailto:sales@aksiaa.com" },
  { icon: Globe, label: "Website", value: "www.aksiaa.com", href: "https://aksiaa.com" },
  { icon: MapPin, label: "Headquarters", value: "Mumbai, India" },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export default function ContactPage() {
  return (
    <div className="grid-backdrop">
      <Section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Kicker>Get in touch</Kicker>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Let&apos;s talk infrastructure.
          </h1>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/65">
            Whether it&apos;s a network refresh, a security review, a cloud
            migration or an IoT rollout — tell us where you are today.
          </p>

          <div className="mt-10 space-y-5">
            {DETAILS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-navy hover:text-royal">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-ink/80">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </Section>
    </div>
  );
}
