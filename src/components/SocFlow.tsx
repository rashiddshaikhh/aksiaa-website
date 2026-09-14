"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  PlayCircle,
  ScanEye,
  ShieldCheck,
  LucideIcon,
  Database,
  SearchCheck,
  BarChart3,
  Radar,
  Zap,
  ListChecks,
} from "lucide-react";

/* ---------- diagram node ---------- */

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
  tone?: "dark" | "accent" | "hub";
  delay?: number;
}) {
  const isHub = tone === "hub";
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
        className={`relative flex items-center justify-center rounded-xl shadow-md ring-1 sm:rounded-2xl ${
          isHub
            ? "h-12 w-12 sm:h-16 sm:w-16 ring-cyan-deep/40"
            : "h-10 w-10 sm:h-14 sm:w-14 ring-transparent"
        } ${tone === "accent" ? "bg-white text-cyan-deep ring-cyan-deep/30" : "text-white"}`}
        style={
          tone !== "accent"
            ? {
                background: isHub
                  ? "linear-gradient(135deg, var(--cyan-deep), var(--navy) 130%)"
                  : "linear-gradient(135deg, var(--royal), var(--navy) 140%)",
              }
            : undefined
        }
      >
        {isHub && (
          <span className="absolute -inset-1 -z-10 rounded-2xl bg-cyan-deep/15 blur-md" />
        )}
        <Icon size={isHub ? 20 : 18} strokeWidth={1.75} className="sm:hidden" />
        <Icon size={isHub ? 28 : 24} strokeWidth={1.75} className="hidden sm:block" />
      </div>
      <p
        className={`whitespace-nowrap font-display font-semibold text-navy ${
          isHub ? "text-xs sm:text-base" : "text-[11px] sm:text-sm"
        }`}
      >
        {label}
      </p>
    </motion.div>
  );
}

/* ---------- static "these are linked" line (no direction) ---------- */

function ConnectionLine({ d }: { d: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="var(--navy)"
      strokeOpacity={0.14}
      strokeWidth="0.45"
      strokeDasharray="1.6 2.4"
      strokeLinecap="round"
    />
  );
}

/* ---------- animated "data flows this way" arrow ---------- */

function FlowArrow({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="url(#soc-grad)"
      strokeWidth="0.85"
      strokeLinecap="round"
      markerEnd="url(#soc-arrowhead)"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    />
  );
}

export default function SocFlow() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm text-ink/55">
          One detection loop, four moving parts: SIEM and SOAR trade evidence in real time, threat
          intel primes both, and everything reports up into a single SOC.
        </p>
      </div>

      {/* legend */}
      <div className="mt-4 flex items-center justify-center gap-5 text-[11px] text-ink/50 sm:text-xs">
        <span className="flex items-center gap-1.5">
          <span className="h-px w-5 border-t border-dashed border-navy/30" />
          connected
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="h-0.5 w-5 rounded-full"
            style={{ background: "linear-gradient(90deg, var(--cyan-deep), var(--navy))" }}
          />
          data flow
        </span>
      </div>

      {/* diagram: percentage-positioned nodes + a matching non-uniform-scaled SVG for lines.
          Same topology at every breakpoint — nothing here depends on flex/grid reflow. */}
      <div className="relative mx-auto mt-6 aspect-[5/4] w-full max-w-lg sm:aspect-[16/9] sm:max-w-2xl">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
          <defs>
            <linearGradient id="soc-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--cyan-deep)" />
              <stop offset="100%" stopColor="var(--navy)" />
            </linearGradient>
            <marker
              id="soc-arrowhead"
              markerWidth="3.2"
              markerHeight="3.2"
              refX="2.6"
              refY="1.6"
              orient="auto-start-reverse"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L3.2,1.6 L0,3.2 Z" fill="var(--navy)" />
            </marker>
          </defs>

          {/* connections: who is linked to whom (SOC↔SIEM, SOC↔SOAR, SIEM↔SOAR, SIEM↔Threat intel, SOAR↔Threat intel) */}
          <ConnectionLine d="M 50 11 L 16 42" />
          <ConnectionLine d="M 50 11 L 84 42" />
          <ConnectionLine d="M 20 44 L 80 44" />
          <ConnectionLine d="M 18 46 L 47 77" />
          <ConnectionLine d="M 82 46 L 53 77" />

          {/* flow: the direction data actually moves */}
          <FlowArrow d="M 47 13 Q 34 24 20 39" delay={0.05} />
          <FlowArrow d="M 22 43 Q 50 52 78 43" delay={0.2} />
          <FlowArrow d="M 80 39 Q 64 22 54 13" delay={0.35} />
          <FlowArrow d="M 45 73 Q 30 58 19 47" delay={0.5} />
          <FlowArrow d="M 55 73 Q 71 58 81 47" delay={0.6} />
        </svg>

        <Node icon={ShieldCheck} label="SOC" x={50} y={9} tone="hub" delay={0.05} />
        <Node icon={LayoutDashboard} label="SIEM" x={16} y={44} delay={0.15} />
        <Node icon={PlayCircle} label="SOAR" x={84} y={44} delay={0.2} />
        <Node icon={ScanEye} label="Threat intel" x={50} y={79} tone="accent" delay={0.4} />
      </div>

      {/* what each node does */}
      <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
        <div className="group rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
          <div
            className="mb-3 h-1 w-10 rounded-full"
            style={{ background: "linear-gradient(90deg, var(--royal), var(--navy))" }}
          />
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 text-navy">
              <LayoutDashboard size={18} strokeWidth={1.9} />
            </span>
            <p className="font-display text-base font-semibold text-navy">SIEM</p>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-ink/65">
            <li className="flex items-center gap-2">
              <Database size={15} className="shrink-0 text-cyan-deep" /> Collect
            </li>
            <li className="flex items-center gap-2">
              <SearchCheck size={15} className="shrink-0 text-cyan-deep" /> Index
            </li>
            <li className="flex items-center gap-2">
              <BarChart3 size={15} className="shrink-0 text-cyan-deep" /> Analyze
            </li>
          </ul>
        </div>

        <div className="group rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:text-right">
          <div
            className="mb-3 ml-auto h-1 w-10 rounded-full"
            style={{ background: "linear-gradient(90deg, var(--cyan-deep), var(--royal))" }}
          />
          <div className="flex items-center gap-2.5 sm:flex-row-reverse">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 text-navy">
              <PlayCircle size={18} strokeWidth={1.9} />
            </span>
            <p className="font-display text-base font-semibold text-navy">SOAR</p>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-ink/65">
            <li className="flex items-center gap-2 sm:flex-row-reverse">
              <Radar size={15} className="shrink-0 text-cyan-deep" /> Investigate
            </li>
            <li className="flex items-center gap-2 sm:flex-row-reverse">
              <Zap size={15} className="shrink-0 text-cyan-deep" /> Respond
            </li>
            <li className="flex items-center gap-2 sm:flex-row-reverse">
              <ListChecks size={15} className="shrink-0 text-cyan-deep" /> Run playbooks
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-ink/45">
        Threat intel arms SIEM and SOAR with fresh indicators · SIEM hands confirmed detections to
        SOAR · SOAR reports resolution back up to the SOC.
      </p>
    </div>
  );
}
