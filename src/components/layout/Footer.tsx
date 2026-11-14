import { ArrowUp, Sparkles, CheckCircle2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border-subtle bg-surface/50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-muted">
        {/* Brand & Mission */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-text-main font-bold">
            <Sparkles className="w-4 h-4 text-violet-400" aria-hidden="true" />
            André Filipe Oliveira Dias
          </div>
          <span className="hidden sm:inline">•</span>
          <span>Candidatura Automação, AI & Sistemas Digitais — Evolt / ITS</span>
        </div>

        {/* Quality Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            WCAG 2.2 AA Acessível
          </span>
          <span className="flex items-center gap-1.5 text-cyan-400">
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            Core Web Vitals Otimizado
          </span>
          <span className="flex items-center gap-1.5 text-violet-400">
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            Vibe Coding
          </span>
        </div>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo da página"
          className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-surface-raised text-text-muted hover:text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-border-subtle/50 text-center text-[11px] text-text-muted">
        © {new Date().getFullYear()} André Filipe Oliveira Dias. Desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion.
      </div>
    </footer>
  );
}
