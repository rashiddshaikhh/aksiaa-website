import type { Metadata } from "next";
import Section from "@/components/Section";
import Kicker from "@/components/Kicker";
import HeroLogo from "@/components/HeroLogo";
import SolutionTabs from "@/components/SolutionTabs";
import SolutionsSubNav from "@/components/SolutionsSubNav";
import PhaseHeader from "@/components/PhaseHeader";
import PipelineStrip from "@/components/PipelineStrip";
import Reveal from "@/components/Reveal";
import SocFlow from "@/components/SocFlow";
import {
  Server, Waypoints, Gauge, Wifi, TrendingUp, Scale, ShieldCheck,
  Lock, KeyRound, ScanFace, LaptopMinimal, ShieldOff, Database,
  Boxes, Cloudy, CodeXml, Globe, HardDrive, MonitorSmartphone,
  FolderSync, Mail, RefreshCw, Radio, Router, Antenna,
  Search, ScanEye, Layers, Settings2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aksiaa Technologies | Solutions",
  description: "Network, security, cloud and IoT solutions, security operations and data protection from Aksiaa Technologies.",
};

export default function SolutionsPage() {
  return (
    <>
      <div className="grid-backdrop border-b border-navy/10 md:flex md:min-h-[728px] md:flex-col md:justify-center">
        <Section className="grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <Reveal>
            <Kicker>Our solutions</Kicker>
            <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Four connected pillars: network, security, cloud and IoT.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65">
              Pick a pillar to see what&apos;s inside, or scroll for the detailed
              frameworks we run on every engagement.
            </p>
          </Reveal>
          <div className="mx-auto w-full max-w-xs">
            <HeroLogo />
          </div>
        </Section>
      </div>

      <Section>
        <SolutionTabs />
      </Section>

      <SolutionsSubNav />

      {/* robust network infra */}
      <Section className="scroll-mt-28 bg-white/60" id="network">
        <Reveal>
          <Kicker>Network</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Robust Network Infra
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
            The switches, routers and wireless that carry every other workload -
            sized for real traffic, segmented for risk, and monitored so
            problems surface before users notice.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <PipelineStrip
            base="Enterprise Network Infrastructure"
            stops={[
              { icon: Server, label: "Networking infra", sub: "Switches, routers, firewall" },
              { icon: Waypoints, label: "Segmentation", sub: "& branch networking" },
              { icon: Gauge, label: "Performance monitoring" },
              { icon: Wifi, label: "Wireless solutions" },
              { icon: TrendingUp, label: "WAN optimization" },
              { icon: Scale, label: "Load balancers" },
              { icon: ShieldCheck, label: "Network access control" },
            ]}
          />
        </Reveal>
      </Section>

      {/* evolve in security */}
      <Section className="scroll-mt-28" id="security">
        <Reveal>
          <Kicker>Security</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Evolve in Security with us
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
            Perimeter, web, identity and device - each covered by dedicated
            tooling, tied together through a shared SIEM/SOAR so nothing sits
            in a silo waiting to be noticed.
          </p>
        </Reveal>
        <div className="mt-10">
          <PhaseHeader stages={["Perimeter", "Web", "Identity", "Device"]} />
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
            {[
              { icon: ShieldCheck, label: "NGFW", sub: "Bare metal" },
              { icon: Cloudy, label: "Cloud NGFW", sub: "Firewall in a VM" },
              { icon: Globe, label: "WAF / DNSSec", sub: "Web traffic security" },
              { icon: KeyRound, label: "MFA", sub: "Multi-factor auth" },
              { icon: ScanFace, label: "SSO", sub: "Login once" },
              { icon: LaptopMinimal, label: "NG endpoint", sub: "Antivirus & anti-malware" },
              { icon: Lock, label: "Encryption", sub: "Data at rest protection" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <Reveal key={label} delay={i * 0.05} y={12} className="group flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white text-royal transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-cyan-deep/50 group-hover:text-cyan-deep group-hover:shadow-md">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <p className="mt-2.5 text-xs font-semibold text-navy">{label}</p>
                <p className="text-[11px] text-ink/45">{sub}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-4">
            <div className="rounded-lg bg-navy px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-royal hover:shadow-[0_12px_24px_rgba(11,46,122,0.25)]">CSPM</div>
            <div className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-center text-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-deep/40 hover:shadow-md">
              <p className="font-semibold text-navy">SASE</p>
              <p className="mt-1 text-[11px] text-ink/50">ZTNA · SWG · RBI · CASB</p>
            </div>
            <div className="rounded-lg bg-navy px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-royal hover:shadow-[0_12px_24px_rgba(11,46,122,0.25)]">SIEM</div>
            <div className="rounded-lg bg-navy px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-royal hover:shadow-[0_12px_24px_rgba(11,46,122,0.25)]">SOAR</div>
          </div>
          <p className="mt-3 text-center text-xs font-medium text-ink/50">All feed into a single Security Operations Center</p>
        </div>
      </Section>

      {/* evolve in cloud */}
      <Section className="scroll-mt-28 bg-white/60" id="cloud">
        <Reveal>
          <Kicker>Cloud</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Evolve in Cloud with us
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
            Cloud-agnostic by design. We run workloads on whichever platform
            fits the job - AWS, Azure, Google Cloud or on-prem - and re-platform
            them again if the economics change.
          </p>
        </Reveal>
        <div className="mt-10">
          <PhaseHeader stages={["Migrate", "Optimize", "Evolve"]} />
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Server, label: "On-premises" },
              { icon: HardDrive, label: "IaaS", sub: "Lift & shift" },
              { icon: Boxes, label: "Containers" },
              { icon: CodeXml, label: "PaaS", sub: "Application service" },
              { icon: RefreshCw, label: "Serverless", sub: "Code as a service" },
              { icon: Globe, label: "SaaS", sub: "Cloud hosted service" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <Reveal key={label} delay={i * 0.05} y={12} className="group flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white text-royal transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-cyan-deep/50 group-hover:text-cyan-deep group-hover:shadow-md">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <p className="mt-2.5 text-xs font-semibold text-navy">{label}</p>
                {sub && <p className="text-[11px] text-ink/45">{sub}</p>}
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {["Rehost", "Refactor", "Rearchitect", "Rebuild", "Replace"].map((s, i) => (
              <div
                key={s}
                className="cursor-default rounded-lg py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(11,46,122,0.25)]"
                style={{ background: `linear-gradient(100deg, var(--cyan-deep), var(--navy) 160%)`, opacity: 0.55 + (i / 4) * 0.45 }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* evolve in iot */}
      <Section className="scroll-mt-28" id="iot">
        <Reveal>
          <Kicker>IoT</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Evolve in IoT with us
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
            From a single sensor to a citywide rollout - connectivity,
            hardware and the application layer, engineered as one stack
            instead of three separate vendors to coordinate.
          </p>
        </Reveal>
        <div className="mt-10">
          <PhaseHeader stages={["Sensors", "Gateways", "Network", "Application"]} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Radio, label: "Connectivity", sub: "LoRa · BLE · LTE · Wi-Fi — from radio planning to solution design" },
              { icon: MonitorSmartphone, label: "Sensors", sub: "Covering multiple use cases & industries" },
              { icon: Router, label: "Gateways", sub: "Indoor & outdoor, IP67 certified, multiple backhauls" },
              { icon: Antenna, label: "Network & application", sub: "Cloud SaaS or on-premises, with visualisation & analytics" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <Reveal key={label} delay={i * 0.06}>
                <div className="group h-full rounded-xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-deep/30 hover:shadow-[0_16px_32px_rgba(11,46,122,0.12)]">
                  <Icon size={22} className="text-cyan-deep transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6" strokeWidth={1.75} />
                  <p className="mt-3 text-sm font-semibold text-navy">{label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/55">{sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 rounded-full seam py-2.5 text-center text-sm font-semibold text-white">
            Secure AES payload
          </div>
        </div>
      </Section>

      {/* data backup */}
      <Section className="scroll-mt-28 bg-white/60" id="backup">
        <Reveal>
          <Kicker>Business continuity</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Data backup - BCP &amp; DR
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
            Prevent downtime with near-zero RPOs and RTOs for all users and applications.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <PipelineStrip
            base="Data at rest in India DC"
            stops={[
              { icon: Server, label: "On-premise servers" },
              { icon: HardDrive, label: "Virtual machines" },
              { icon: Cloudy, label: "Cloud servers" },
              { icon: Database, label: "Database" },
              { icon: FolderSync, label: "File / network shares" },
              { icon: Mail, label: "M365" },
              { icon: FolderSync, label: "File sync & share" },
            ]}
          />
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="rounded-lg border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:border-cyan-deep/40 hover:shadow-md">Priced per GB</div>
          <div className="rounded-lg border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:border-cyan-deep/40 hover:shadow-md">Priced per user / device</div>
        </div>
      </Section>
      <Section className="scroll-mt-28" id="posture">
        <Reveal>
          <Kicker>Cloud security posture</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Complete Cloud &amp; Security Posture
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
            One pane for cloud misconfigurations, identity risk and workload
            vulnerabilities - so security keeps pace with how fast the cloud
            footprint actually grows.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl" style={{ background: "linear-gradient(135deg, var(--cyan-deep), var(--navy) 120%)" }}>
            <ul className="divide-y divide-white/10">
              {[
                "Monitor AWS, Azure, Google Cloud, and Kubernetes",
                "Multi-cloud asset and network traffic visibility",
                "Risk-based prioritization of security issues with guided remediation",
                "Optimize spend and identify unusual activity",
                "Identify overprivileged user and role-based access",
                "Block vulnerabilities pre-deployment with DevOps integrations",
              ].map((item) => (
                <li key={item} className="cursor-default px-6 py-4 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:pl-8 sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* security operations center */}
      <Section className="scroll-mt-28 bg-white/60" id="soc">
        <Reveal>
          <Kicker>Security operations</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Security Operations Center
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
            Round-the-clock monitoring backed by real playbooks, not just an
            alert inbox - analysts who can tell a false positive from an
            actual incident.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-12">
          <SocFlow />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Hosting framework</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Boxes, label: "OCP", sub: "Container platform" },
                { icon: Cloudy, label: "Cloud", sub: "Public cloud" },
                { icon: Layers, label: "Hybrid", sub: "On-prem + cloud" },
                { icon: Settings2, label: "Managed", sub: "Run by us" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <Reveal key={label} delay={i * 0.05} y={10}>
                  <div className="group flex h-full flex-col items-center gap-1.5 rounded-lg border border-navy/15 bg-white px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-deep/40 hover:shadow-md">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan/15 text-royal transition-transform duration-300 group-hover:scale-110">
                      <Icon size={17} strokeWidth={1.75} />
                    </div>
                    <p className="text-xs font-semibold text-navy">{label}</p>
                    <p className="text-[10px] text-ink/45">{sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Services framework</p>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-ink/65 sm:grid-cols-3">
              {[
                "SOC architecture design", "SOC platforms deployment", "SOC platforms administration", "Log sources integration",
                "Threats detection", "Use cases development", "Alerting & reporting", "Monitoring",
                "Threat and attack response", "Forensics", "Red-blue teaming", "Compromise assessment",
              ].map((s) => (
                <p key={s} className="group flex items-start gap-2 transition-colors duration-200 hover:text-navy">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-deep transition-transform duration-200 group-hover:scale-150" /> {s}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* data security */}
      <Section className="scroll-mt-28" id="data-security">
        <Reveal>
          <Kicker>Intelligence-driven services</Kicker>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Data Security
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
            Testing, assessments and compliance work that stays current with
            how the threat landscape actually moves - not a once-a-year
            checkbox exercise.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Search, label: "Penetration testing" },
            { icon: ShieldCheck, label: "Security assessment" },
            { icon: ScanEye, label: "Compromise assessment" },
            { icon: ShieldOff, label: "Red teaming" },
            { icon: Gauge, label: "Readiness assessment" },
            { icon: Database, label: "Compliance auditing & consulting" },
          ].map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.05} y={12}>
              <div className="group flex items-center gap-3 rounded-xl border border-navy/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-deep/40 hover:shadow-md">
                <Icon size={20} className="shrink-0 text-cyan-deep transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                <span className="text-sm font-medium text-ink/75">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
