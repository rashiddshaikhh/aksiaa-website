import type { Metadata } from "next";
import Section from "@/components/Section";
import Kicker from "@/components/Kicker";
import CheckPoint from "@/components/CheckPoint";
import HeroLogo from "@/components/HeroLogo";
import {
  MapPin, Cpu, Factory, RadioTower, ShieldCheck, Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aksiaa Technologies | About",
  description: "Aksiaa Technologies - a Mumbai-based systems integrator and distributor of network, security, cloud and IoT infrastructure.",
};

const POINTS = [
  { icon: MapPin, title: "Headquartered in Mumbai", text: "Based in India, working with clients across geographies." },
  { icon: Cpu, title: "5+ years in IT infra", text: "Experience across IT infrastructure services and solutions." },
  { icon: Factory, title: "Systems integrator & distributor", text: "Distributing and integrating multiple product portfolios." },
  { icon: RadioTower, title: "Global IoT coverage", text: "A wide range of connectivity partners powering global reach." },
  { icon: ShieldCheck, title: "Certified experts", text: "Trained specialists supporting a wide range of services." },
  { icon: Lightbulb, title: "Secure & sustainable", text: "Focused on building solutions that last and stay protected." },
];

export default function AboutPage() {
  return (
    <>
      <div className="grid-backdrop border-b border-navy/10 md:flex md:min-h-[728px] md:flex-col md:justify-center">
        <Section className="grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div>
            <Kicker>About Aksiaa</Kicker>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              A systems integrator built for infrastructure that has to work.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/65">
              Aksiaa Technologies Pvt. Ltd. distributes and integrates network,
              security, cloud and IoT products for organisations that need
              infrastructure they can rely on - supported by certified
              experts and a global bench of connectivity partners.
            </p>
          </div>
          <HeroLogo />
        </Section>
      </div>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map(({ icon, title, text }) => (
            <CheckPoint key={title} icon={icon} title={title} text={text} />
          ))}
        </div>
      </Section>

      <Section className="bg-white/60">
        <div className="seam rounded-2xl px-8 py-12 text-center sm:px-16">
          <p className="mx-auto max-w-2xl font-display text-xl font-medium leading-snug text-white sm:text-2xl">
            &ldquo;We stay ahead of change to build channel market success -
            enabling resellers to deliver, and customers to adopt, new
            technology with confidence.&rdquo;
          </p>
        </div>
      </Section>
    </>
  );
}
