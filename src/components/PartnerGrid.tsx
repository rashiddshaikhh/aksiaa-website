"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PARTNER_GROUPS, type Logo } from "@/data/partners";

function GridChip({ logo, i }: { logo: Logo; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (i % 12) * 0.035, ease: "easeOut" }}
      tabIndex={0}
      className="group/chip relative flex h-24 items-center justify-center rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_1px_2px_rgba(11,46,122,0.05)] outline-none transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-cyan-deep/40 hover:shadow-[0_18px_34px_rgba(11,46,122,0.16)] focus-visible:-translate-y-1.5 focus-visible:border-cyan-deep/40"
    >
      <div className="relative h-11 w-full">
        <Image
          src={`/images/partners/${logo.file}`}
          alt={logo.name}
          fill
          sizes="(min-width: 1024px) 160px, (min-width: 640px) 33vw, 45vw"
          className="object-contain"
        />
      </div>
      <span className="pointer-events-none absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-navy px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-lg transition-all duration-200 ease-out group-hover/chip:-translate-y-[calc(100%+8px)] group-hover/chip:opacity-100 group-focus-visible/chip:-translate-y-[calc(100%+8px)] group-focus-visible/chip:opacity-100">
        {logo.name}
        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-navy" />
      </span>
    </motion.div>
  );
}

export default function PartnerGrid() {
  return (
    <div className="space-y-14">
      {PARTNER_GROUPS.map((group, gi) => (
        <div key={group.title}>
          {gi > 0 && <div className="mb-10 h-px w-full bg-navy/10" />}
          <div className="flex items-center gap-2.5">
            <span className="h-4 w-1 rounded-full" style={{ background: "linear-gradient(180deg, var(--cyan-deep), var(--royal))" }} />
            <p className="text-xs font-semibold uppercase tracking-wide text-royal/80">
              {group.title}
            </p>
          </div>
          <p className="mt-1.5 pl-3.5 text-[12px] text-ink/40">{group.subtitle}</p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {group.logos.map((logo, i) => (
              <GridChip key={logo.name} logo={logo} i={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
