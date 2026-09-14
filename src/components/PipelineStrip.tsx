import { ChevronUp, LucideIcon } from "lucide-react";

export type PipelineStop = {
  icon: LucideIcon;
  label: string;
  sub?: string;
};

export default function PipelineStrip({
  stops,
  base,
}: {
  stops: PipelineStop[];
  base: string;
}) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-7 lg:gap-6">
        {stops.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="group flex flex-col items-center text-center">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-navy/15 bg-white text-royal shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:border-transparent group-hover:text-white group-hover:shadow-[0_14px_28px_rgba(11,46,122,0.22)]">
              <span
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, var(--cyan-deep), var(--navy) 140%)" }}
              />
              <Icon size={24} strokeWidth={1.75} className="relative z-10" />
            </div>
            <p className="mt-3 text-sm font-semibold text-navy transition-colors duration-200 group-hover:text-royal">{label}</p>
            {sub && <p className="mt-0.5 text-xs text-ink/50">{sub}</p>}
          </div>
        ))}
      </div>

      {/* per-column pointers showing everything above feeds into the base below — only shown once stops sit in a single row */}
      <div className="mt-3 hidden lg:grid" style={{ gridTemplateColumns: `repeat(${stops.length}, minmax(0,1fr))`, gap: "1.5rem" }}>
        {stops.map((s) => (
          <div key={s.label} className="flex justify-center text-cyan-deep/50">
            <ChevronUp size={14} strokeWidth={2.5} />
          </div>
        ))}
      </div>

      <div className="relative mt-1 h-2 overflow-hidden rounded-full">
        <div className="absolute inset-0 rounded-full seam" />
      </div>
      <p className="mt-3 text-center text-sm font-medium text-navy/80">{base}</p>
    </div>
  );
}
