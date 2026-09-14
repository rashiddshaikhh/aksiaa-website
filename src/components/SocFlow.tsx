"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, PlayCircle, ScanEye, ShieldCheck, LucideIcon } from "lucide-react";

function Node({
  icon: Icon,
  label,
  x,
  y,
  tone = "dark",
  delay = 0,
}: {
  icon: LucideIcon;
  label: string;
  x: number;
  y: number;
  tone?: "dark" | "accent";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 sm:gap-2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-md sm:h-14 sm:w-14 sm:rounded-2xl ${
          tone === "dark" ? "text-white" : "bg-white text-cyan-deep ring-1 ring-cyan-deep/30"
        }`}
        style={tone === "dark" ? { background: "linear-gradient(135deg, var(--royal), var(--navy) 140%)" } : undefined}
      >
        <Icon size={18} strokeWidth={1.75} className="sm:hidden" />
        <Icon size={24} strokeWidth={1.75} className="hidden sm:block" />
      </div>
      <p className="whitespace-nowrap text-[11px] font-semibold text-navy sm:text-sm">{label}</p>
    </motion.div>
  );
}

function Line({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="url(#soc-grad)"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeDasharray="2.2 2.2"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    />
  );
}

export default function SocFlow() {
  return (
    <div>
      {/* diagram: percentage-positioned nodes + a matching non-uniform-scaled SVG for lines.
          Same topology at every breakpoint — nothing here depends on flex/grid reflow. */}
      <div className="relative mx-auto aspect-[5/4] w-full max-w-lg sm:aspect-[16/9] sm:max-w-2xl">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
          <defs>
            <linearGradient id="soc-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--cyan-deep)" />
              <stop offset="100%" stopColor="var(--navy)" />
            </linearGradient>
          </defs>
          <Line d="M 50 12 L 20 38" delay={0} />
          <Line d="M 50 12 L 80 38" delay={0.1} />
          <Line d="M 24 46 L 47 72" delay={0.25} />
          <Line d="M 76 46 L 53 72" delay={0.35} />
        </svg>

        <Node icon={ShieldCheck} label="SOC" x={50} y={10} tone="dark" delay={0.05} />
        <Node icon={LayoutDashboard} label="SIEM" x={16} y={40} delay={0.15} />
        <Node icon={PlayCircle} label="SOAR" x={84} y={40} delay={0.2} />
        <Node icon={ScanEye} label="Threat intel" x={50} y={76} tone="accent" delay={0.4} />
      </div>

      {/* what each node does, laid out as plain responsive text below the diagram */}
      <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
        <div className="rounded-xl border border-navy/10 bg-white p-5">
          <p className="font-display font-semibold text-navy">SIEM</p>
          <ul className="mt-2 space-y-1 text-sm text-ink/60">
            <li>Collect</li>
            <li>Index</li>
            <li>Analyze</li>
          </ul>
        </div>
        <div className="rounded-xl border border-navy/10 bg-white p-5 sm:text-right">
          <p className="font-display font-semibold text-navy">SOAR</p>
          <ul className="mt-2 space-y-1 text-sm text-ink/60">
            <li>Investigate</li>
            <li>Respond</li>
            <li>Run playbooks</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-ink/45">
        Threat intel feeds both SIEM and SOAR continuously — both report up into a single SOC.
      </p>
    </div>
  );
}