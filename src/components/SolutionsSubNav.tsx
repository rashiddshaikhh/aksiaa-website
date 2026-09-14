"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { id: "network", label: "Network" },
  { id: "security", label: "Security" },
  { id: "cloud", label: "Cloud" },
  { id: "iot", label: "IoT" },
  { id: "backup", label: "Backup & DR" },
  { id: "posture", label: "Cloud posture" },
  { id: "soc", label: "SOC" },
  { id: "data-security", label: "Data security" },
];

export default function SolutionsSubNav() {
  const [activeId, setActiveId] = useState(ITEMS[0].id);

  useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[57px] z-40 border-b border-navy/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 py-2.5">
        {ITEMS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-navy text-white"
                  : "text-ink/55 hover:-translate-y-0.5 hover:bg-white hover:text-navy"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
