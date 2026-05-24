interface SectionLabelProps {
  numero: string;
  label: string;
  className?: string;
}

export default function SectionLabel({
  numero,
  label,
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 text-xs font-mono tracking-[0.3em] uppercase text-gold mb-3 ${className}`}
    >
      <span className="text-rim">/</span>
      <span className="text-ink-3">{numero}</span>
      <span>{label}</span>
      <span className="flex-1 h-px bg-rim max-w-16" />
    </div>
  );
}
