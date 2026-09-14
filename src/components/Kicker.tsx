export default function Kicker({ children }: { children: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="relative block h-3 w-3">
        <span className="absolute inset-0 translate-x-[3px] bg-navy" />
        <span className="absolute inset-0 -translate-x-[1px] translate-y-[1px] bg-cyan" />
      </span>
      <span className="text-sm font-semibold text-royal/80">{children}</span>
    </div>
  );
}
