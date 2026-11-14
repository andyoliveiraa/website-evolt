import * as React from "react";
import {
  Globe,
  Terminal,
  Palette,
  Cpu,
  ExternalLink,
  Calculator,
  Layers,
  Github,
  Bot,
  Server,
  Activity,
  FileSpreadsheet,
  Code2,
} from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { PROJECTS } from "../../data/candidateData";

export function ProjectsBento() {
  // Calculadora 3D State (Evolt Special)
  const [material, setMaterial] = React.useState<"PLA" | "PETG" | "ABS" | "Resina">("PETG");
  const [weightGrams, setWeightGrams] = React.useState<number>(180);
  const [printHours, setPrintHours] = React.useState<number>(6);
  const [markupMultiplier, setMarkupMultiplier] = React.useState<number>(2.5);

  const materialPrices = {
    PLA: 0.02, // 20€/kg
    PETG: 0.024, // 24€/kg
    ABS: 0.026, // 26€/kg
    Resina: 0.045, // 45€/kg
  };

  const energyCostPerHour = 0.05; // ~200W a 0.25€/kWh
  const materialCost = weightGrams * materialPrices[material];
  const energyCost = printHours * energyCostPerHour;
  const totalProductionCost = materialCost + energyCost;
  const suggestedPrice = totalProductionCost * markupMultiplier;

  // GitHub Repositories
  const githubProjects = PROJECTS.filter((p) => p.githubUrl);

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge variant="violet" size="sm">
          <Layers className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
          Projetos & Casos Reais
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mt-4 tracking-tight [letter-spacing:-0.03em]">
          Execução Técnica, Automações & Código de Produção
        </h2>
        <p className="text-text-muted mt-3 text-base sm:text-lg leading-relaxed max-w-[65ch]">
          Uma seleção prática de projetos em produção e repositórios open-source: de plataformas com tráfego real a bots,
          ferramentas SaaS com IA e painéis de orquestração para VPS.
        </p>
      </div>

      {/* Primary Highlights: CéuInquieto & Calculadora 3D Evolt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-8">
        {/* Card 1: CéuInquieto (criacovilha.pt) - 7 cols */}
        <Card glow="violet" className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <Globe className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-main">Plataforma Web CéuInquieto</h3>
                  <span className="text-xs text-text-muted font-mono">criacovilha.pt • Produção Ativa</span>
                </div>
              </div>
              <a
                href="https://criacovilha.pt/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 font-semibold p-1.5 rounded-lg hover:bg-surface-raised transition-colors"
              >
                Visitar Site
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* Print / Screenshot do Website Real */}
            <a
              href="https://criacovilha.pt/"
              target="_blank"
              rel="noreferrer"
              className="my-4 block relative rounded-xl overflow-hidden border border-border-subtle group/img hover:border-violet-500/40 transition-all shadow-md bg-black/40"
            >
              <img
                src="/images/criacovilha-preview.png"
                alt="Captura de ecrã do website oficial criacovilha.pt"
                className="w-full h-44 sm:h-52 object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-3">
                <span className="text-[11px] font-mono text-violet-300 flex items-center gap-1.5 bg-surface/90 px-2.5 py-1 rounded-md border border-border-subtle backdrop-blur-sm shadow-sm">
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  https://criacovilha.pt/ • Ver Online
                </span>
              </div>
            </a>

            <p className="text-sm text-text-muted leading-relaxed mt-2">
              Administração técnica contínua e manutenção do portal oficial da associação. Gestão de infraestrutura em WordPress,
              implementação de design responsivo, troubleshooting em tempo real de plugins e sincronização multimédia com a redação.
            </p>

            <div className="mt-4 space-y-2">
              {PROJECTS[0].impactMetrics.map((metric) => (
                <div key={metric} className="flex items-center gap-2 text-xs text-text-main">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
            {PROJECTS[0].tags.map((tag) => (
              <Badge key={tag} variant="neutral" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Card 2: Calculadora Interativa de Impressão 3D (Evolt Special) - 5 cols */}
        <Card glow="emerald" className="lg:col-span-5 bg-surface-raised/50 border-emerald-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-text-main">
                      Calculadora de Produção 3D
                    </h3>
                    <Badge variant="emerald" size="sm">Evolt Special</Badge>
                  </div>
                  <span className="text-xs text-text-muted font-mono">
                    Estimador Dinâmico de Filamento & Margem
                  </span>
                </div>
              </div>
              <Calculator className="w-5 h-5 text-emerald-400 hidden sm:block" aria-hidden="true" />
            </div>

            <p className="text-xs text-text-muted leading-relaxed mb-6">
              Demonstração prática de raciocínio de negócio para o setor de fabrico aditivo da Evolt: ajuste os parâmetros para
              calcular os custos de impressão e o preço final de venda recomendado.
            </p>

            {/* Interactive Calculator Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              {/* Material */}
              <div>
                <label htmlFor="material-select" className="text-text-muted block mb-1">Material do Filamento:</label>
                <select
                  id="material-select"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value as any)}
                  className="w-full bg-surface border border-border-strong rounded-lg px-3 py-2 text-text-main focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  <option value="PLA">PLA Standard (20€/kg)</option>
                  <option value="PETG">PETG Industrial (24€/kg)</option>
                  <option value="ABS">ABS Técnico (26€/kg)</option>
                  <option value="Resina">Resina Tough (45€/L)</option>
                </select>
              </div>

              {/* Markup */}
              <div>
                <label htmlFor="markup-select" className="text-text-muted block mb-1">Margem Operacional:</label>
                <select
                  id="markup-select"
                  value={markupMultiplier}
                  onChange={(e) => setMarkupMultiplier(parseFloat(e.target.value))}
                  className="w-full bg-surface border border-border-strong rounded-lg px-3 py-2 text-text-main focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  <option value="2.0">2.0x (Custo x 2)</option>
                  <option value="2.5">2.5x (Recomendado Evolt)</option>
                  <option value="3.0">3.0x (Peças Complexas)</option>
                </select>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex justify-between text-text-muted mb-1">
                  <span>Peso Estimado:</span>
                  <span className="text-emerald-400 font-bold">{weightGrams}g</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="800"
                  step="10"
                  value={weightGrams}
                  onChange={(e) => setWeightGrams(parseInt(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>

              {/* Hours Slider */}
              <div>
                <div className="flex justify-between text-text-muted mb-1">
                  <span>Tempo de Máquina:</span>
                  <span className="text-emerald-400 font-bold">{printHours}h</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="36"
                  step="1"
                  value={printHours}
                  onChange={(e) => setPrintHours(parseInt(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Results Summary Box */}
            <div className="mt-6 p-4 rounded-xl bg-black/50 border border-emerald-500/20 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div>
                <span className="text-[10px] text-text-muted block">Custo Filamento</span>
                <span className="text-sm font-bold text-text-main font-mono">
                  {materialCost.toFixed(2)}€
                </span>
              </div>
              <div>
                <span className="text-[10px] text-text-muted block">Custo Energia</span>
                <span className="text-sm font-bold text-text-main font-mono">
                  {energyCost.toFixed(2)}€
                </span>
              </div>
              <div>
                <span className="text-[10px] text-text-muted block">Custo Produção</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">
                  {totalProductionCost.toFixed(2)}€
                </span>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-1 border border-emerald-500/30">
                <span className="text-[10px] text-emerald-300 font-semibold block">Preço Sugerido</span>
                <span className="text-base font-extrabold text-emerald-400 font-mono">
                  {suggestedPrice.toFixed(2)}€
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* GitHub Open-Source Projects Section */}
      <div className="mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border-subtle">
          <div>
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-text-main" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-text-main">
                Repositórios GitHub & Automações de Código
              </h3>
            </div>
            <p className="text-sm text-text-muted mt-1">
              Sistemas desenvolvidos em Python, FastAPI, Web Scraping e Bots com dashboards web e integração de IA.
            </p>
          </div>
          <a
            href="https://github.com/andyoliveiraa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-xl bg-surface-raised border border-border-subtle hover:border-violet-500/40 text-text-muted hover:text-text-main transition-colors w-fit"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            github.com/andyoliveiraa
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* 4 GitHub Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubProjects.map((project) => {
            const getIcon = (name: string) => {
              switch (name) {
                case "Bot":
                  return <Bot className="w-5 h-5" aria-hidden="true" />;
                case "FileSpreadsheet":
                  return <FileSpreadsheet className="w-5 h-5" aria-hidden="true" />;
                case "Server":
                  return <Server className="w-5 h-5" aria-hidden="true" />;
                case "Activity":
                  return <Activity className="w-5 h-5" aria-hidden="true" />;
                default:
                  return <Code2 className="w-5 h-5" aria-hidden="true" />;
              }
            };

            const getGlow = (cat: string) => {
              if (cat === "Sistemas & AI") return "violet" as const;
              return "cyan" as const;
            };

            return (
              <Card
                key={project.id}
                glow={getGlow(project.category)}
                className="flex flex-col justify-between bg-surface-raised/40 hover:bg-surface-raised/70"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                        {getIcon(project.iconName)}
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-text-main leading-tight">
                          {project.title}
                        </h4>
                        <span className="text-xs text-cyan-400 font-mono block mt-0.5">
                          {project.subtitle}
                        </span>
                      </div>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver repositório ${project.title} no GitHub`}
                      className="p-2 rounded-lg bg-surface border border-border-subtle hover:border-violet-500/40 text-text-muted hover:text-text-main transition-colors shrink-0"
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mt-3">
                    {project.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {project.impactMetrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-2 text-xs text-text-main">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="text-text-muted font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-surface border border-border-subtle text-text-muted font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
                  >
                    <span>Repositório</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Academic & Multimedia Bento (UBI & Creative Assets) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Python UBI */}
        <Card glow="cyan" className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Terminal className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main">Automação & Python (UBI)</h3>
                <span className="text-xs text-text-muted font-mono">Linux CLI & APIs REST</span>
              </div>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mt-4">
              Desenvolvimento de scripts para automatizar tarefas de rotina, análise de ficheiros estruturados (JSON/CSV) e
              interação com endpoints. Criação de utilitários de sistema e manipulação de bases de dados relacionais MySQL.
            </p>

            <div className="mt-4 space-y-2">
              {PROJECTS[1].impactMetrics.map((metric) => (
                <div key={metric} className="flex items-center gap-2 text-xs text-text-main">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
            {PROJECTS[1].tags.map((tag) => (
              <Badge key={tag} variant="neutral" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Multimedia & AI Assets */}
        <Card glow="violet" className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Palette className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main">Design & Asset Generation</h3>
                <span className="text-xs text-text-muted font-mono">Adobe Suite + AI Visual Workflows</span>
              </div>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mt-4">
              Formação em Comunicação & Marketing com domínio prático de Photoshop, Lightroom e Premiere Pro. Preparação de imagens
              de produto para e-commerce e utilização de geradores de imagem para acelerar mockups e assets de interface.
            </p>

            <div className="mt-4 space-y-2">
              {PROJECTS[2].impactMetrics.map((metric) => (
                <div key={metric} className="flex items-center gap-2 text-xs text-text-main">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
            {PROJECTS[2].tags.map((tag) => (
              <Badge key={tag} variant="neutral" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
