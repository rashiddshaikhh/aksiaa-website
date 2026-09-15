import Link from "next/link";
import {
  MapPin, Cpu, Factory, RadioTower, ShieldCheck, Lightbulb,
  Truck, Network, Headset, Server, CloudCog, ArrowRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Kicker from "@/components/Kicker";
import PartnerGrid from "@/components/PartnerGrid";
import CheckPoint from "@/components/CheckPoint";

const ABOUT_POINTS = [
  { icon: MapPin, text: "Headquartered in Mumbai, India" },
  { icon: Cpu, text: "5+ years of experience in IT infra services & solutions" },
  { icon: Factory, text: "Systems integrator & distributor of multiple product portfolios" },
  { icon: RadioTower, text: "Global IoT coverage through a wide range of connectivity partners" },
];

const SERVICES = [
  {
    icon: Truck,
    title: "Distribution",
    text: "Staying ahead of change to build channel market success — enabling resellers to deliver and customers to adopt new technologies.",
  },
  {
    icon: Network,
    title: "System integration",
    text: "A full range of infrastructure solutions, services and consulting across networking, enterprise security and application delivery.",
  },
  {
    icon: Headset,
    title: "Managed services",
    text: "Comprehensive IT support, resources and solutions that help you build and maintain the networking environment your business needs.",
  },
];

const SOLUTIONS = [
  { icon: Server, title: "Network", text: "Enterprise infra, performance monitoring, wireless & SD-WAN." },
  { icon: ShieldCheck, title: "Security", text: "Next-gen firewalls, endpoint security, SASE, SSO/MFA & SOAR." },
  { icon: CloudCog, title: "Cloud", text: "IaaS/PaaS/SaaS, migrations, automation & DevOps." },
  { icon: RadioTower, title: "IoT", text: "End-to-end IoT stack with global connectivity." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <div className="border-y border-navy/10 bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_POINTS.map(({ icon, text }) => (
            <CheckPoint key={text} icon={icon} text={text} />
          ))}
        </div>
      </div>

      <Section className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <Kicker>Who we are</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Certified experts, focused on secure and sustainable solutions.
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-ink/65">
            Aksiaa Technologies is a systems integrator and distributor of
            multiple product portfolios, with certified experts supporting a
            wide range of services. We build infrastructure our clients trust
            to stay online, stay protected, and scale without friction.
          </p>
          <Link
            href="/about"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-royal"
          >
            More about Aksiaa <ArrowRight size={15} />
          </Link>
        </div>
      </Section>

      <Section className="bg-white/60">
        <div className="max-w-xl">
          <Kicker>What we do</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Three ways we plug into your infrastructure.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-navy/10 bg-white p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{text}</p>
            </div>
          ))}
        </div>
        <Link
          href="/services"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-royal"
        >
          See all services <ArrowRight size={15} />
        </Link>
      </Section>

      <Section>
        <div className="max-w-xl">
          <Kicker>Our solutions</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Four pillars, one accountable partner.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-xl border border-navy/10 p-6 transition-colors hover:border-navy/30"
            >
              <Icon size={24} className="text-cyan-deep" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-base font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{text}</p>
            </div>
          ))}
        </div>
        <Link
          href="/solutions"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-royal"
        >
          Explore all solutions <ArrowRight size={15} />
        </Link>
      </Section>

      <Section className="bg-white/60" id="partners">
        <div className="max-w-xl">
          <Kicker>Trusted alliances</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Partners &amp; alliances
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            A cloud-agnostic approach backed by leading network, security and
            infrastructure product partners.
          </p>
        </div>
        <div className="mt-12">
          <PartnerGrid />
        </div>
      </Section>

      <Section>
        <div className="seam relative overflow-hidden rounded-2xl px-8 py-14 text-center sm:px-16">
          <div
            className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10"
            aria-hidden
          />
          <Lightbulb size={26} className="mx-auto text-white/90" strokeWidth={1.5} />
          <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
            Let&apos;s build infrastructure that doesn&apos;t blink.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/75">
            Tell us what you&apos;re running today and where you need to get to.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.03]"
          >
            Contact sales <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
