"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stat = { value: "5+", label: "years delivering IT infrastructure" };

export default function Hero() {
  return (
    <div className="relative overflow-hidden grid-backdrop">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-royal">
            Systems integrator &amp; distributor · Mumbai, India
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl md:text-[3.4rem]">
            Infrastructure that keeps your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">business online</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-cyan/50 -z-0" />
            </span>{" "}
            and secure.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/65 md:text-lg">
            Aksiaa Technologies designs, distributes and manages network,
            security, cloud and IoT infrastructure for organisations that
            can&apos;t afford downtime — backed by certified experts and a
            global partner bench.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-royal"
            >
              Talk to our team
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-navy/50"
            >
              Explore solutions
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div
              className="absolute inset-6 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(135deg, var(--navy) 0%, var(--royal) 55%, var(--cyan-deep) 100%)",
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              }}
            />
            <div className="absolute left-8 top-[46%] h-14 w-24 bg-cyan/70" />
            <div className="absolute right-10 top-[58%] h-9 w-14 bg-navy/80" />

            {[
              { top: "6%", left: "-4%", value: stat.value, label: stat.label },
              { bottom: "8%", right: "-8%", value: "24/7", label: "managed & SOC monitoring" },
            ].map((card, i) => (
              <motion.div
                key={card.value}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className="absolute w-40 rounded-xl border border-navy/10 bg-white p-4 shadow-lg"
                style={{
                  top: "top" in card ? card.top : undefined,
                  bottom: "bottom" in card ? card.bottom : undefined,
                  left: "left" in card ? card.left : undefined,
                  right: "right" in card ? card.right : undefined,
                }}
              >
                <p className="font-display text-2xl font-semibold text-navy">{card.value}</p>
                <p className="mt-1 text-xs leading-snug text-ink/55">{card.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
