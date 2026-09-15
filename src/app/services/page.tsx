import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Kicker from "@/components/Kicker";
import CheckPoint from "@/components/CheckPoint";
import HeroLogo from "@/components/HeroLogo";
import { Truck, Network, Headset, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Aksiaa Technologies",
  description: "Distribution, system integration and managed services from Aksiaa Technologies.",
};

const SERVICES = [
  {
    icon: Truck,
    title: "Distribution",
    text: "Aksiaa believes in staying ahead of change to build channel market success. We enable resellers to deliver, and customers to adopt, new technologies.",
    points: [
      "Multi-vendor product portfolios",
      "Channel enablement for resellers",
      "Faster technology adoption for end customers",
    ],
  },
  {
    icon: Network,
    title: "System integration",
    text: "We specialise in providing a full range of infrastructure solutions, services and consulting into networking, enterprise security and content delivery of applications.",
    points: [
      "Infrastructure design & consulting",
      "Networking and enterprise security integration",
      "Application content delivery",
    ],
  },
  {
    icon: Headset,
    title: "Managed services",
    text: "We provide comprehensive IT support services, resources and solutions to organisations, helping them build and maintain the networking environments they need to satisfy customers and outdistance competitors.",
    points: [
      "Ongoing IT support & resourcing",
      "Networking environment maintenance",
      "Operational reliability at scale",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="grid-backdrop border-b border-navy/10 md:flex md:min-h-[728px] md:flex-col md:justify-center">
        <Section className="grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <Kicker>What we do</Kicker>
            <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Services that carry your infrastructure end to end.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65">
              From distribution through system integration to ongoing
              managed support — one accountable partner across the full
              infrastructure lifecycle.
            </p>
          </div>
          <div className="mx-auto w-full max-w-xs">
            <HeroLogo />
          </div>
        </Section>
      </div>

      <Section className="space-y-10">
        {SERVICES.map(({ icon: Icon, title, text, points }, i) => (
          <div
            key={title}
            className={`grid gap-8 rounded-2xl border border-navy/10 bg-white p-8 md:grid-cols-[1fr_1fr] md:p-10 ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Icon size={24} strokeWidth={1.75} />
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{text}</p>
            </div>
            <div className={`flex flex-col justify-center gap-3 ${i % 2 === 1 ? "[direction:ltr]" : ""}`}>
              {points.map((p) => (
                <CheckPoint key={p} text={p} />
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section className="bg-white/60">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-navy/10 bg-white p-10 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Not sure which service fits?
          </h2>
          <p className="max-w-md text-sm text-ink/60">
            Tell us about your current setup and where you want to get to —
            we&apos;ll map it to the right mix of distribution, integration or
            managed support.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-royal"
          >
            Talk to our team <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
