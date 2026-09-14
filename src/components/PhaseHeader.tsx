"use client";

import { motion } from "framer-motion";

const START = "#17b9cc"; // cyan-deep
const END = "#0b2e7a"; // navy

function lerpColor(a: string, b: string, t: number) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ar = (pa >> 16) & 255, ag = (pa >> 8) & 255, ab = pa & 255;
  const br = (pb >> 16) & 255, bg = (pb >> 8) & 255, bb = pb & 255;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `rgb(${rr}, ${rg}, ${rb})`;
}

export default function PhaseHeader({ stages }: { stages: string[] }) {
  const notch = 20;
  return (
    <div className="flex" style={{ paddingRight: notch }}>
      {stages.map((stage, i) => {
        const t = i / Math.max(stages.length - 1, 1);
        const color = lerpColor(START, END, t);
        const isFirst = i === 0;
        const clip = isFirst
          ? `polygon(0 0, calc(100% - ${notch}px) 0, 100% 50%, calc(100% - ${notch}px) 100%, 0 100%)`
          : `polygon(0 0, calc(100% - ${notch}px) 0, 100% 50%, calc(100% - ${notch}px) 100%, 0 100%, ${notch}px 50%)`;
        return (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
            whileHover={{ y: -2 }}
            className="group relative flex-1 cursor-default py-3.5 text-center text-sm font-semibold text-white transition-all duration-300"
            style={{
              background: color,
              clipPath: clip,
              marginLeft: isFirst ? 0 : -notch,
              zIndex: i + 1,
              paddingLeft: isFirst ? 0 : notch,
            }}
          >
            <span className="relative z-10">{stage}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
