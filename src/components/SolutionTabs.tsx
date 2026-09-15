"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Network, ShieldCheck, CloudCog, RadioTower, LucideIcon } from "lucide-react";
import CheckPoint from "@/components/CheckPoint";

type Tab = {
  key: string;
  label: string;
  icon: LucideIcon;
  blurb: string;
  items: string[];
};

const TABS: Tab[] = [
  {
    key: "network",
    label: "Network",
    icon: Network,
    blurb: "The wired and wireless backbone everything else runs on.",
    items: [
      "Enterprise network infrastructure",
      "Performance monitoring",
      "Wireless solutions",
      "SD-WAN solutions",
    ],
  },
  {
    key: "security",
    label: "Security",
    icon: ShieldCheck,
    blurb: "Layered protection from the perimeter down to the device.",
    items: [
      "Next-gen firewalls",
      "End-point security",
      "SSO / MFA / IDAM & SOAR solutions",
      "Mobile, web & email security",
      "SASE",
    ],
  },
  {
    key: "cloud",
    label: "Cloud",
    icon: CloudCog,
    blurb: "Move, run and optimise workloads across any cloud.",
    items: [
      "Core & web infrastructure",
      "IaaS, PaaS & SaaS solutions",
      "Cloud migrations",
      "Cloud automation",
      "DevOps",
    ],
  },
  {
    key: "iot",
    label: "IoT",
    icon: RadioTower,
    blurb: "Sensors to dashboards, with global connectivity built in.",
    items: [
      "End-to-end IoT stack",
      "Global connectivity",
      "Multiple use cases",
      "Smart parking, asset & people tracking, and more",
    ],
  },
];

export default function SolutionTabs() {
  const [active, setActive] = useState(TABS[0].key);
  const current = TABS.find((t) => t.key === active) ?? TABS[0];
  const activeIndex = TABS.findIndex((t) => t.key === active);

  return (
    <div className="grid gap-8 md:grid-cols-[290px_1fr]">
      <div
        role="tablist"
        aria-label="Solution pillars"
        className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0"
      >
        {TABS.map((tab, i) => {
          const isActive = tab.key === active;
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.key)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                  e.preventDefault();
                  setActive(TABS[(i + 1) % TABS.length].key);
                } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  setActive(TABS[(i - 1 + TABS.length) % TABS.length].key);
                }
              }}
              className={`group relative flex shrink-0 items-start gap-3 overflow-hidden rounded-xl px-4 py-4 text-left transition-colors duration-200 md:min-w-0 ${
                isActive ? "text-white" : "text-navy/70 hover:text-navy"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="solution-tab-pill"
                  className="absolute inset-0 rounded-xl bg-navy"
                  style={{ background: "linear-gradient(115deg, var(--navy), var(--royal) 140%)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {!isActive && (
                <span className="absolute inset-0 rounded-xl border border-navy/15 transition-all duration-200 group-hover:border-cyan-deep/40 group-hover:bg-white group-hover:shadow-[0_8px_20px_rgba(11,46,122,0.08)]" />
              )}
              <span
                className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                  isActive ? "bg-white/15" : "bg-cyan/15 text-royal group-hover:scale-105"
                }`}
              >
                <Icon
                  size={17}
                  strokeWidth={1.75}
                  className={`transition-transform duration-300 ease-out ${isActive ? "scale-105" : "group-hover:-rotate-6"}`}
                />
              </span>
              <span className="relative z-10 min-w-0 flex-1">
                <span className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-bold tabular-nums ${isActive ? "text-white/50" : "text-navy/30"}`}>
                    0{i + 1}
                  </span>
                  <span className="text-sm font-semibold">{tab.label}</span>
                </span>
                <span
                  className={`mt-0.5 hidden text-xs leading-snug md:block ${
                    isActive ? "text-white/70" : "text-ink/40"
                  }`}
                >
                  {tab.blurb}
                </span>
              </span>
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                className={`relative z-10 mt-1 shrink-0 transition-all duration-300 ease-out ${
                  isActive
                    ? "translate-x-0 opacity-70"
                    : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-40"
                }`}
              />
            </button>
          );
        })}

        {/* progress dots, mobile-friendly */}
        <div className="mt-1 hidden items-center gap-1.5 px-1 md:flex">
          {TABS.map((tab) => (
            <span
              key={tab.key}
              className={`h-1 rounded-full transition-all duration-300 ${
                tab.key === active ? "w-6 bg-cyan-deep" : "w-1.5 bg-navy/15"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        layout
        transition={{ layout: { duration: 0.32, ease: "easeInOut" } }}
        className="relative min-h-[320px] overflow-hidden rounded-xl border border-navy/10 bg-white p-8 shadow-[0_1px_2px_rgba(11,46,122,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(11,46,122,0.08)]"
      >
        {/* subtle progress bar keyed to which pillar is active */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-navy/5">
          <motion.div
            className="h-full"
            style={{ background: "linear-gradient(90deg, var(--cyan-deep), var(--royal))" }}
            initial={false}
            animate={{ width: `${((activeIndex + 1) / TABS.length) * 100}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current.key}
            layout
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            {/* faint watermark icon for depth */}
            <current.icon
              size={140}
              strokeWidth={1}
              className="pointer-events-none absolute -right-6 -top-6 text-navy/[0.04]"
            />

            <div className="relative flex items-center gap-3">
              <motion.div
                key={`icon-${current.key}`}
                initial={{ scale: 0.6, rotate: -12, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan/20 text-royal"
              >
                <current.icon size={22} strokeWidth={1.75} />
              </motion.div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy">{current.label}</h3>
                <p className="text-xs text-ink/45">{current.blurb}</p>
              </div>
            </div>

            <ul className="relative mt-6 grid gap-3 sm:grid-cols-2">
              {current.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.045, ease: "easeOut" }}
                  className="transition-transform duration-200 hover:translate-x-1"
                >
                  <CheckPoint text={item} />
                </motion.li>
              ))}
            </ul>

            <div className="relative mt-7 flex items-center justify-between border-t border-navy/10 pt-5">
              <p className="text-xs text-ink/40">
                Want the deeper dive on {current.label.toLowerCase()}? Scroll down for the full framework.
              </p>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-royal transition-colors hover:text-cyan-deep"
              >
                Talk to us
                <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
