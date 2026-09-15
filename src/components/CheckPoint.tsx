import { Check, LucideIcon } from "lucide-react";

type CheckPointProps = {
  icon?: LucideIcon;
  title?: string;
  text: string;
};

export default function CheckPoint({ icon: Icon = Check, title, text }: CheckPointProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-navy/10 bg-white px-4 py-3.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-paper text-cyan-deep">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        {title ? (
          <>
            <h3 className="font-display text-sm font-semibold text-ink">{title}</h3>
            <p className="mt-1 text-xs leading-snug text-ink/60">{text}</p>
          </>
        ) : (
          <p className="text-sm leading-snug text-ink/75">{text}</p>
        )}
      </div>
    </div>
  );
}
