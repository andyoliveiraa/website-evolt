import { ArrowDown, Cpu, Sparkles, MapPin, CheckCircle2, FileText, Send } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { CANDIDATE } from "../../data/candidateData";

interface HeroSectionProps {
  onOpenCVModal: () => void;
}

export function HeroSection({ onOpenCVModal }: HeroSectionProps) {
  return (
    <section id="sobre" className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Gradients (GPU-friendly) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-violet-600/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Context Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-raised border border-border-subtle shadow-sm mb-6">
          <Badge variant="violet" size="sm">
            <Sparkles className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
            Candidatura Evolt / ITS
          </Badge>
          <span className="text-xs text-text-muted font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Automação, AI & Sistemas Digitais
          </span>
        </div>

        {/* Impact Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-main [letter-spacing:-0.03em] leading-[1.1] max-w-4xl">
          Conecto sistemas, automatizo processos e construo com{" "}
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Vibe Coding & AI
          </span>
        </h1>

        {/* Subheadline (Max 65ch for reading ergonomics) */}
        <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-[65ch] leading-relaxed">
          Olá! Sou o <strong>{CANDIDATE.name}</strong>. Uno a fundamentação técnica em Informática Web, Móvel e na Nuvem (UBI),
          experiência prática em CMS e o poder das ferramentas de AI de última geração para eliminar tarefas repetitivas, integrar
          e-commerce e acelerar a produtividade no setor da manufatura aditiva e impressão 3D.
        </p>

        {/* Availability Box */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 p-2.5 rounded-xl bg-surface/80 border border-border-subtle text-xs sm:text-sm text-text-muted">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            Disponibilidade Total
          </span>
          <span className="text-border-strong">•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
            Presencial na Sede (Vila de Cucujães / Aveiro) ou Remoto
          </span>
          <span className="text-border-strong">•</span>
          <span className="text-violet-400 font-medium">Motivado para 1ª Oportunidade em Informática</span>
        </div>

        {/* CTA Cluster */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#automacao" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 shadow-violet-500/25">
              <Cpu className="w-5 h-5 mr-1" aria-hidden="true" />
              Ver Casos & Automações
              <ArrowDown className="w-4 h-4 ml-1" aria-hidden="true" />
            </Button>
          </a>

          <Button variant="secondary" size="lg" onClick={onOpenCVModal} className="w-full sm:w-auto">
            <FileText className="w-5 h-5 mr-1 text-violet-400" aria-hidden="true" />
            Ver CV Digital Completo
          </Button>

          <a href="#contacto" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Send className="w-4 h-4 mr-1 text-cyan-400" aria-hidden="true" />
              Contactar
            </Button>
          </a>
        </div>

        {/* Stats / Trust Ribbon */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-border-subtle">
          <div className="p-4 rounded-xl bg-surface/50 border border-border-subtle/50 text-center">
            <div className="text-2xl font-bold text-violet-400">UBI</div>
            <div className="text-xs text-text-muted mt-1">Informática Web, Móvel & Nuvem</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border-subtle/50 text-center">
            <div className="text-2xl font-bold text-cyan-400">+1 Ano</div>
            <div className="text-xs text-text-muted mt-1">Gestão Web criacovilha.pt</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border-subtle/50 text-center">
            <div className="text-2xl font-bold text-emerald-400">Vibe Coding</div>
            <div className="text-xs text-text-muted mt-1">Claude Code, Cursor & Copilot</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border-subtle/50 text-center">
            <div className="text-2xl font-bold text-violet-400">Turno & Vendas</div>
            <div className="text-xs text-text-muted mt-1">Liderança Operacional & CRM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
