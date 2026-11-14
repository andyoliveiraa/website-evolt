import {
  Sparkles,
  Github,
  ExternalLink,
  Code2,
  Search,
  CheckCircle2,
  Cpu,
  Heart,
  Terminal,
} from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function EngineeringShowcase() {
  const engineeringPillars = [
    {
      id: "antigravity",
      icon: Cpu,
      title: "Desenvolvimento com Google Antigravity",
      subtitle: "Vibe Coding & Engenharia de Contexto",
      badgeColor: "violet" as const,
      description:
        "Esta aplicação web foi integralmente arquitetada e desenvolvida com recurso ao Google Antigravity — o ambiente agente de Inteligência Artificial da Google concebido para engenharia de software avançada. Através de metodologias modernas de Vibe Coding, orquestração de subagentes autónomos e controlo rigoroso de contexto técnico, transformei requisitos complexos num produto digital rápido, acessível (WCAG 2.2 AA) e com arquitetura escalável em React e TypeScript.",
      highlights: [
        "Iteração ágil assistida por IA de última geração (Google DeepMind)",
        "Validação de performance em tempo real (Core Web Vitals)",
        "Zero boilerplate inútil: código limpo, semântico e tipado",
      ],
    },
    {
      id: "automation-discovery",
      icon: Search,
      title: "Descoberta da Vaga por Automações Próprias",
      subtitle: "Sistemas 'projecto-emprego' (Gemini) & 'career-ops' (Claude)",
      badgeColor: "cyan" as const,
      description:
        "A própria identificação e qualificação desta oportunidade na Evolt resultou de sistemas de automação concebidos por mim: o 'projecto-emprego', uma plataforma autónoma em Python/FastAPI que emprega modelos Google Gemini para web scraping massivo e matching inteligente de competências; e o 'career-ops', que orquestra modelos Claude para triagem estratégica de oportunidades alinhadas com o meu perfil técnico. A automação não é apenas um conceito teórico no meu currículo — é a ferramenta prática que utilizo para resolver desafios reais.",
      highlights: [
        "Scraping multicanal em Python com parsing preditivo",
        "Avaliação de compatibilidade por LLMs (Google Gemini + Claude)",
        "Notificações instantâneas via webhooks para ação rápida",
      ],
    },
    {
      id: "dedication-passion",
      icon: Heart,
      title: "Projetos Reais, Dedicação & Vocação Tecnológica",
      subtitle: "Construção Exclusiva para a Evolt / ITS",
      badgeColor: "emerald" as const,
      description:
        "Este portfólio não é um modelo pré-fabricado nem uma montra abstrata: foi concebido de raiz exclusivamente para esta candidatura, alimentado a 100% por dados verídicos e projetos em produção (CriaCovilhã, bots de gestão assíncrona, campanhas reais na PowerPC e Opticalia). Representa horas dedicadas de arquitetura, resolução de problemas e otimização visual, demonstrando na prática o princípio orientador: o entusiasmo autêntico pela informática e pela criação técnica converte o esforço contínuo em prazer de realização.",
      highlights: [
        "100% concebido e direcionado para as necessidades da Evolt",
        "Demonstração prática de autonomia, rigor e iniciativa",
        "Compromisso total de entrega presencial ou remota",
      ],
    },
  ];

  return (
    <section id="engenharia" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge variant="violet" size="sm">
          <Sparkles className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
          Behind the Build • Engenharia de Software & IA
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mt-4 tracking-tight [letter-spacing:-0.03em]">
          Como Este Portfólio Foi Construído: Vibe Coding com Google Antigravity
        </h2>
        <p className="text-text-muted mt-3 text-base sm:text-lg leading-relaxed max-w-[65ch]">
          Uma demonstração prática e transparente de como combino inteligência artificial de fronteira,
          pensamento sistémico e paixão pela informática para entregar valor concreto.
        </p>

        {/* GitHub Live Repository Banner Card */}
        <div className="mt-8 w-full max-w-2xl p-4 sm:p-5 rounded-2xl bg-surface-raised border border-violet-500/30 shadow-xl shadow-violet-500/5 hover:border-violet-500/60 transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-xl bg-violet-500/15 text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/25">
              <Github className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">
                  Código Aberto no GitHub
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono font-medium">
                  Repositório Público
                </span>
              </div>
              <h3 className="text-sm font-mono font-semibold text-text-main mt-0.5">
                andyoliveiraa / website-evolt
              </h3>
              <p className="text-xs text-text-muted mt-0.5">
                Inspecione o histórico de commits, a arquitetura modular e o código-fonte desta aplicação.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/andyoliveiraa/website-evolt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0"
          >
            <Button variant="primary" size="sm" className="w-full sm:w-auto shadow-violet-500/20">
              <Github className="w-4 h-4 mr-1.5" aria-hidden="true" />
              Ver Código no GitHub
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
            </Button>
          </a>
        </div>
      </div>

      {/* 3 Pillars Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {engineeringPillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Card
              key={pillar.id}
              glow={pillar.badgeColor}
              className="p-6 sm:p-8 bg-surface-raised/50 hover:bg-surface-raised/80 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Subtitle */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border-subtle flex items-center justify-center text-text-main">
                    <Icon className="w-6 h-6 text-violet-400" aria-hidden="true" />
                  </div>
                  <Badge variant={pillar.badgeColor} size="sm">
                    {pillar.id === "antigravity"
                      ? "Google DeepMind"
                      : pillar.id === "automation-discovery"
                      ? "Automação Prática"
                      : "Dedicação Total"}
                  </Badge>
                </div>

                <span className="text-xs font-mono text-text-muted block">
                  {pillar.subtitle}
                </span>
                <h3 className="text-xl font-bold text-text-main mt-1 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed mt-4">
                  {pillar.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="mt-6 pt-5 border-t border-border-subtle space-y-2">
                {pillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Formal Quote & Commitment Statement Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-surface-raised via-surface to-surface-raised border border-border-subtle">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/15 text-violet-400 flex items-center justify-center shrink-0 mt-1">
              <Terminal className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-base font-bold text-text-main">
                A Filosofia Por Trás Desta Apresentação
              </h4>
              <p className="text-sm text-text-muted mt-1 leading-relaxed max-w-3xl">
                <em>
                  "Acredito firmemente que a melhor forma de demonstrar capacidade em automação, inteligência artificial e
                  sistemas digitais não é descrever teorias, mas construir soluções funcionais de ponta a ponta. A máxima
                  popular 'quem corre por gosto não se cansa' traduz-se aqui num compromisso sério: a paixão intrínseca pela
                  engenharia de software e inovação garante que cada problema técnico na Evolt será encarado com dedicação,
                  rigor e entusiasmo diário."
                </em>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="https://github.com/andyoliveiraa/website-evolt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Code2 className="w-4 h-4 mr-1.5" aria-hidden="true" />
                Explorar Arquitetura
              </Button>
            </a>
            <a href="#contacto" className="w-full sm:w-auto">
              <Button variant="primary" size="sm" className="w-full sm:w-auto">
                Agendar Entrevista
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
