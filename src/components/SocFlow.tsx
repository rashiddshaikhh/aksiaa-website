"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, PlayCircle, ScanEye, ShieldCheck, LucideIcon } from "lucide-react";

function FlowCard({
  icon: Icon,
  title,
  items,
  align = "left",
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
  align?: "left" | "right";
}) {
  return (
    <div
      className={`group rounded-xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-deep/30 hover:shadow-[0_16px_32px_rgba(11,46,122,0.12)] ${
        align === "right" ? "md:text-right" : ""
      }`}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white transition-transform duration-300 group-hover:scale-110 ${
          align === "right" ? "md:ml-auto" : ""
        }`}
      >
        <Icon size={20} />
      </div>
      <p className="mt-3 font-display font-semibold text-navy">{title}</p>
      <ul className="mt-3 space-y-1.5 text-sm text-ink/60">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default function SocFlow() {
  return (
    <div>
      <div className="grid items-start gap-10 md:grid-cols-3">
        <FlowCard icon={LayoutDashboard} title="SIEM" items={["Collect", "Index", "Analyze"]} />

        <div className="flex flex-col items-center gap-2 pt-6 text-center">
          <ScanEye size={28} className="animate-pulse text-cyan-deep" strokeWidth={1.5} />
          <p className="text-sm font-semibold text-navy">Threat intel</p>
          <p className="text-xs text-ink/50">feeds both SIEM and SOAR continuously</p>
        </div>

        <FlowCard icon={PlayCircle} title="SOAR" items={["Investigate", "Respond", "Run playbooks"]} align="right" />
      </div>

      {/* converging connectors into SOC */}
      <div className="relative mx-auto mt-2 h-16 max-w-2xl md:h-20">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <motion.path
            d="M 17 0 L 50 34"
            fill="none"
            stroke="url(#soc-grad)"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeDasharray="2 2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.path
            d="M 83 0 L 50 34"
            fill="none"
            stroke="url(#soc-grad)"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeDasharray="2 2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="soc-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--cyan-deep)" />
              <stop offset="100%" stopColor="var(--navy)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
        className="mx-auto flex w-fit items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(11,46,122,0.3)]"
        style={{ background: "linear-gradient(115deg, var(--cyan-deep), var(--navy) 140%)" }}
      >
        <ShieldCheck size={16} />
        Security Operations Center
      </motion.div>
    </div>
  );
}
