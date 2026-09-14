"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PARTNER_GROUPS as GROUPS, type Logo, type Group } from "@/data/partners";

function LogoChip({ logo }: { logo: Logo }) {
  return (
    <div
      tabIndex={0}
      className="group/chip relative mx-2.5 flex h-24 w-[156px] shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_1px_2px_rgba(11,46,122,0.05)] outline-none transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.04] hover:border-cyan-deep/40 hover:shadow-[0_18px_34px_rgba(11,46,122,0.16)] focus-visible:-translate-y-1.5 focus-visible:border-cyan-deep/40 active:scale-[0.98]"
    >
      <div className="relative h-11 w-full">
        <Image
          src={`/images/partners/${logo.file}`}
          alt={logo.name}
          fill
          sizes="140px"
          className="object-contain"
        />
      </div>

      {/* tooltip */}
      <span className="pointer-events-none absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-navy px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-lg transition-all duration-200 ease-out group-hover/chip:-translate-y-[calc(100%+8px)] group-hover/chip:opacity-100 group-focus-visible/chip:-translate-y-[calc(100%+8px)] group-focus-visible/chip:opacity-100">
        {logo.name}
        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-navy" />
      </span>
    </div>
  );
}

function MarqueeRow({ group }: { group: Group }) {
  const [inView, setInView] = useState(true);
  const [hovered, setHovered] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const running = inView && !hovered;

  return (
    <div>
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-royal/80">
          {group.title}
        </p>
        <p className="mt-1 text-[12px] text-ink/40">{group.subtitle}</p>
      </div>

      <div
        ref={rowRef}
        className="marquee-row relative overflow-hidden py-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="marquee-track"
          style={{
            animationDirection: group.reverse ? "reverse" : "normal",
            animationDuration: `${group.duration}s`,
            animationPlayState: running ? "running" : "paused",
          }}
        >
          {[...group.logos, ...group.logos].map((logo, i) => (
            <LogoChip key={`${group.title}-${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white via-white/70 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-white via-white/70 to-transparent sm:w-24" />
      </div>
    </div>
  );
}

export default function PartnerMarquee() {
  return (
    <div className="space-y-14">
      {GROUPS.map((group, gi) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: gi * 0.12, ease: "easeOut" }}
        >
          <MarqueeRow group={group} />
        </motion.div>
      ))}
    </div>
  );
}
