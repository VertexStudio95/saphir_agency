/* Mockups purement statiques — aucune animation */

function BrowserMockup() {
  return (
    <div className="w-full max-w-[320px] mx-auto rounded-sm border border-rim/70 bg-surface overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      {/* Barre navigateur */}
      <div className="flex items-center gap-2 px-4 py-3 bg-base border-b border-rim/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 mx-3 bg-rim/30 rounded-sm h-5 flex items-center px-3">
          <span className="text-xs text-ink-3 font-mono">saphiragency.fr</span>
        </div>
      </div>

      {/* Contenu simulé */}
      <div className="p-5 space-y-3">
        <div className="h-5 w-2/3 bg-gold/30 rounded-sm" />
        <div className="space-y-2">
          <div className="h-2.5 w-full bg-rim/50 rounded-sm" />
          <div className="h-2.5 w-4/5 bg-rim/50 rounded-sm" />
          <div className="h-2.5 w-3/4 bg-rim/50 rounded-sm" />
          <div className="h-2.5 w-2/3 bg-rim/50 rounded-sm" />
        </div>
        <div className="flex gap-2 pt-1">
          <div className="h-7 w-24 bg-gold/40 rounded-sm" />
          <div className="h-7 w-20 bg-rim/30 rounded-sm" />
        </div>
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="h-14 bg-rim/20 rounded-sm border border-rim/30" />
          <div className="h-14 bg-rim/20 rounded-sm border border-rim/30" />
          <div className="h-14 bg-rim/20 rounded-sm border border-rim/30" />
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="w-[160px] mx-auto">
      <div
        className="relative w-full rounded-[2rem] border-[2.5px] border-gold/30 bg-[#0d1829] overflow-hidden shadow-[0_20px_60px_rgba(201,168,76,0.12),0_20px_60px_rgba(0,0,0,0.6)]"
        style={{ aspectRatio: "9/18" }}
      >
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-rim/60 rounded-full z-10" />

        {/* Écran */}
        <div className="absolute inset-0 flex flex-col pt-8 p-3 gap-2">
          <div className="h-4 w-3/4 bg-gold/30 rounded-sm mx-auto" />
          <div className="flex-1 bg-surface rounded-sm mt-1 p-2 space-y-2">
            <div className="h-3 w-full bg-rim/40 rounded-sm" />
            <div className="h-3 w-5/6 bg-rim/30 rounded-sm" />
            <div className="h-3 w-full bg-gold/20 border border-gold/20 rounded-sm" />
            <div className="h-3 w-full bg-gold/20 border border-gold/20 rounded-sm" />
            <div className="h-5 w-full bg-gold/35 rounded-sm mt-1" />
            <div className="h-1.5 w-full bg-rim/30 rounded-full mt-2 overflow-hidden">
              <div className="h-full w-[72%] bg-gold/60 rounded-full" />
            </div>
          </div>
        </div>

        {/* Barre home */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-rim/70 rounded-full" />
      </div>
    </div>
  );
}

function TerminalMockup() {
  const lines = [
    { prefix: "$ ", text: "git push origin main", gold: true },
    { prefix: "", text: "▶  Building...", muted: true },
    { prefix: "", text: "✓  Compiled in 1.2s (Turbopack)", green: true },
    { prefix: "", text: "✓  TypeScript — 0 errors", green: true },
    { prefix: "", text: "✓  Tests passed  (42/42)", green: true },
    { prefix: "", text: "▶  Deploying to Vercel...", muted: true },
    { prefix: "", text: "✓  Live → saphiragency.fr", gold: true },
  ];

  return (
    <div className="w-full max-w-[320px] mx-auto rounded-sm border border-rim/70 bg-[#070d18] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
      {/* Barre titre */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0a1120] border-b border-rim/40">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-ink-3 font-mono ml-2">terminal — saphir-agency</span>
      </div>

      {/* Lignes */}
      <div className="p-5 font-mono text-xs space-y-2">
        {lines.map((l, i) => (
          <div
            key={i}
            className={
              l.gold ? "text-gold" : l.green ? "text-green-400" : "text-ink-3"
            }
          >
            {l.prefix && <span className="text-gold/70">{l.prefix}</span>}
            {l.text}
          </div>
        ))}
        {/* Curseur statique */}
        <div className="flex items-center gap-1 text-gold/70">
          <span>$ </span>
          <span className="inline-block w-2 h-3.5 bg-gold/80 align-middle" />
        </div>
      </div>
    </div>
  );
}

type MockupType = "browser" | "phone" | "terminal";

interface Props {
  type: MockupType;
  label: string;
}

export default function ServiceMockup({ type, label }: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      {type === "browser" && <BrowserMockup />}
      {type === "phone" && <PhoneMockup />}
      {type === "terminal" && <TerminalMockup />}
      <p className="text-xs font-mono tracking-[0.2em] uppercase text-ink-3">
        {label}
      </p>
    </div>
  );
}
