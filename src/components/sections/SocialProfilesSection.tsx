import { Github, Linkedin, ExternalLink, Code2, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function SocialProfilesSection() {
  return (
    <section id="perfis" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge variant="cyan" size="sm">
          <Globe className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
          Presença Digital & Redes Oficiais
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mt-4 tracking-tight [letter-spacing:-0.03em]">
          GitHub & LinkedIn Profissional
        </h2>
        <p className="text-text-muted mt-3 text-base sm:text-lg leading-relaxed max-w-[65ch]">
          Acompanhe o meu código-fonte, repositórios de automação e histórico profissional nas duas principais
          plataformas técnicas do ecossistema tecnológico.
        </p>
      </div>

      {/* 2-Column High-Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* GitHub Card */}
        <Card
          glow="violet"
          className="p-6 sm:p-8 bg-surface-raised/50 hover:bg-surface-raised/80 flex flex-col justify-between border-border-strong relative overflow-hidden group"
        >
          {/* Subtle Ambient Background Watermark */}
          <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Github className="w-56 h-56 text-white" aria-hidden="true" />
          </div>

          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform">
                  <Github className="w-8 h-8" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-violet-400 font-semibold uppercase tracking-wider">
                      Desenvolvimento & Código
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mt-0.5">
                    GitHub
                  </h3>
                  <span className="text-xs font-mono text-text-muted block mt-0.5">
                    @andyoliveiraa
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Ativo
              </span>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Acesso aberto aos meus repositórios de programação, utilitários de scraping com IA, bots assíncronos e
              ao código-fonte completo deste portfólio concebido com o Google Antigravity.
            </p>

            {/* Featured Repositories List */}
            <div className="space-y-2.5 p-4 rounded-xl bg-surface/70 border border-border-subtle mb-6">
              <span className="text-xs font-bold text-text-main uppercase tracking-wider block mb-2">
                Repositórios em Destaque:
              </span>
              <div className="flex items-center justify-between text-xs text-text-muted hover:text-text-main transition-colors">
                <span className="font-mono text-violet-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                  website-evolt
                </span>
                <span className="text-[11px] text-text-muted">Portfólio Antigravity & React</span>
              </div>
              <div className="flex items-center justify-between text-xs text-text-muted hover:text-text-main transition-colors">
                <span className="font-mono text-cyan-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                  projecto-emprego
                </span>
                <span className="text-[11px] text-text-muted">Scraper Inteligente + Gemini</span>
              </div>
              <div className="flex items-center justify-between text-xs text-text-muted hover:text-text-main transition-colors">
                <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                  bot-discord-ems
                </span>
                <span className="text-[11px] text-text-muted">Dashboard Assíncrono + Relatórios PDF</span>
              </div>
              <div className="flex items-center justify-between text-xs text-text-muted hover:text-text-main transition-colors">
                <span className="font-mono text-amber-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                  painel-vps
                </span>
                <span className="text-[11px] text-text-muted">Gestão Linux CLI / Nginx</span>
              </div>
            </div>
          </div>

          <div>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {["Python", "TypeScript", "React", "Linux", "FastAPI", "Git", "Google Gemini"].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-surface border border-border-subtle text-text-muted font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/andyoliveiraa"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="primary" size="md" className="w-full shadow-violet-500/20">
                <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                Explorar Perfil no GitHub
                <ExternalLink className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
              </Button>
            </a>
          </div>
        </Card>

        {/* LinkedIn Card */}
        <Card
          glow="cyan"
          className="p-6 sm:p-8 bg-surface-raised/50 hover:bg-surface-raised/80 flex flex-col justify-between border-border-strong relative overflow-hidden group"
        >
          {/* Subtle Ambient Background Watermark */}
          <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Linkedin className="w-56 h-56 text-[#0A66C2]" aria-hidden="true" />
          </div>

          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2] shadow-xl group-hover:scale-105 transition-transform">
                  <Linkedin className="w-8 h-8" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      Rede & Percurso Profissional
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mt-0.5">
                    LinkedIn
                  </h3>
                  <span className="text-xs font-mono text-text-muted block mt-0.5">
                    /in/andrexxdias
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                <Sparkles className="w-3 h-3 text-cyan-400" aria-hidden="true" />
                Conecte-se
              </span>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Consulte o meu perfil formal de carreira, competências certificadas, percurso em comunicação e
              marketing, e recomendações de desempenho operacional.
            </p>

            {/* Profile Highlights */}
            <div className="space-y-3 p-4 rounded-xl bg-surface/70 border border-border-subtle mb-6">
              <span className="text-xs font-bold text-text-main uppercase tracking-wider block mb-1">
                Destaques do Perfil:
              </span>
              <div className="flex items-start gap-2 text-xs text-text-muted">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Candidatura Evolt / ITS:</strong> Automação, Inteligência Artificial, Vibe Coding & Sistemas Digitais.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-text-muted">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Formação & Frequência:</strong> UBI (Informática Web, Móvel e na Nuvem) e EPM (Comunicação e Marketing).
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-text-muted">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Disponibilidade Imediata:</strong> Presencial on-site em Cucujães/Aveiro, híbrido ou teletrabalho.
                </span>
              </div>
            </div>
          </div>

          <div>
            {/* Professional Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {[
                "Sistemas Digitais",
                "Automação",
                "Vibe Coding",
                "Comunicação Assertiva",
                "Gestão Operacional",
                "Networking",
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-surface border border-border-subtle text-text-muted font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/andrexxdias/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="secondary" size="md" className="w-full border-cyan-500/30 hover:border-cyan-400">
                <Linkedin className="w-4 h-4 mr-2 text-[#0A66C2]" aria-hidden="true" />
                Conectar no LinkedIn
                <ExternalLink className="w-3.5 h-3.5 ml-2 text-cyan-400" aria-hidden="true" />
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
