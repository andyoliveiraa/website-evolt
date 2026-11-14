import * as React from "react";
import { Play, RotateCcw, CheckCircle2, Bot, Sparkles, Terminal } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

interface WorkflowStep {
  id: number;
  title: string;
  category: string;
  iconName: string;
  description: string;
  statusText: string;
  outputPayload?: string;
}

export function AutomationShowcase() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [isSimulating, setIsSimulating] = React.useState<boolean>(false);
  const [simulationFinished, setSimulationFinished] = React.useState<boolean>(false);

  const steps: WorkflowStep[] = [
    {
      id: 1,
      title: "Gatilho: Encomenda 3D Recebida",
      category: "WooCommerce / Webhook",
      iconName: "ShoppingCart",
      description: "Cliente finaliza encomenda de engrenagem técnica em PETG na loja online da Evolt.",
      statusText: "Webhook disparado com payload de pedido #EV-9842",
      outputPayload: JSON.stringify(
        {
          order_id: "EV-9842",
          client: "TechSolutions Lda",
          item: "Suporte Eixo Industrial (PETG Carbon)",
          filament_grams: 185,
          infill: "40%",
          timestamp: new Date().toISOString(),
        },
        null,
        2
      ),
    },
    {
      id: 2,
      title: "Validação & Script Python",
      category: "Automação / Python CLI",
      iconName: "Terminal",
      description: "Script Python valida ficheiro 3D, confere stock de bobinas de filamento e calcula tempo de máquina.",
      statusText: "Ficheiro verificado: 6h35m estimadas • Bobina PETG #04 reservada",
      outputPayload: JSON.stringify(
        {
          validation_status: "SUCCESS",
          slicing_profile: "0.2mm_Quality_PETG",
          estimated_hours: 6.58,
          layer_count: 840,
          filament_cost_eur: 5.92,
        },
        null,
        2
      ),
    },
    {
      id: 3,
      title: "Notificação & Registo de Produção",
      category: "Integração / API & Database",
      iconName: "Zap",
      description: "Atualização imediata de base de dados e notificação automática para o canal de operações.",
      statusText: "Notificação despachada • Status atualizado para 'Na Fila de Produção'",
      outputPayload: JSON.stringify(
        {
          channel: "#evolt-fabrico-3d",
          message: "Nova ordem validada para impressora #3D-Farm-03",
          db_sync: "COMPLETE",
        },
        null,
        2
      ),
    },
    {
      id: 4,
      title: "Fila de Impressão 3D Despachada",
      category: "Manufatura Aditiva / IoT",
      iconName: "Layers",
      description: "Trabalho pronto para arranque com temperaturas pré-configuradas (240°C bico / 75°C cama).",
      statusText: "Pronto para arranque • Zero intervenção manual de dados",
      outputPayload: JSON.stringify(
        {
          printer_id: "Bambu-X1C-03",
          status: "READY_FOR_PRINT",
          bed_temp: 75,
          nozzle_temp: 240,
        },
        null,
        2
      ),
    },
  ];

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationFinished(false);
    setActiveStep(1);

    const timer1 = setTimeout(() => setActiveStep(2), 1200);
    const timer2 = setTimeout(() => setActiveStep(3), 2400);
    const timer3 = setTimeout(() => {
      setActiveStep(4);
      setIsSimulating(false);
      setSimulationFinished(true);
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  const resetSimulation = () => {
    setActiveStep(0);
    setIsSimulating(false);
    setSimulationFinished(false);
  };

  return (
    <section id="automacao" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge variant="cyan" size="sm">
          <Bot className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
          Mentalidade de Automação & Vibe Coding
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mt-4 tracking-tight [letter-spacing:-0.03em]">
          Eliminar Fricção, Ligar Ferramentas & Acelerar Resultados
        </h2>
        <p className="text-text-muted mt-3 text-base sm:text-lg leading-relaxed max-w-[65ch]">
          Demonstração prática de como encaro fluxos de trabalho na Evolt: transformar passos repetitivos em pipelines
          automáticos, integrando e-commerce, scripts utilitários e plataformas de produção.
        </p>
      </div>

      {/* Simulator Card Container */}
      <Card className="p-6 sm:p-8 bg-surface-raised/60 border-border-strong relative overflow-hidden mb-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-border-subtle">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <h3 className="text-xl font-bold text-text-main">
                Simulador Interativo: Pipeline de Encomenda 3D ➔ Produção
              </h3>
            </div>
            <p className="text-sm text-text-muted mt-1">
              Clique para testar o fluxo de dados em tempo real com validação automática de encomenda e despacho.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {!isSimulating && !simulationFinished && (
              <Button variant="cyan" size="md" onClick={runSimulation}>
                <Play className="w-4 h-4 mr-1.5 fill-current" aria-hidden="true" />
                Disparar Simulação
              </Button>
            )}

            {isSimulating && (
              <Button variant="cyan" size="md" disabled isLoading>
                A Executar Fluxo...
              </Button>
            )}

            {simulationFinished && (
              <Button variant="secondary" size="md" onClick={resetSimulation}>
                <RotateCcw className="w-4 h-4 mr-1.5" aria-hidden="true" />
                Reiniciar Fluxo
              </Button>
            )}
          </div>
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {steps.map((step) => {
            const isCompleted = activeStep > step.id || (simulationFinished && activeStep === 4);
            const isCurrent = activeStep === step.id && !simulationFinished;
            const isPending = activeStep < step.id;

            return (
              <div
                key={step.id}
                className={`p-5 rounded-xl border transition-all duration-300 relative flex flex-col justify-between ${
                  isCurrent
                    ? "bg-cyan-950/30 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                    : isCompleted
                    ? "bg-emerald-950/20 border-emerald-500/40"
                    : "bg-surface border-border-subtle opacity-70"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-surface-raised text-text-muted">
                      Nó 0{step.id}
                    </span>
                    {isCompleted && (
                      <span className="flex items-center text-xs font-semibold text-emerald-400 gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                        Concluído
                      </span>
                    )}
                    {isCurrent && (
                      <span className="text-xs font-semibold text-cyan-400 animate-pulse">
                        A processar...
                      </span>
                    )}
                    {isPending && (
                      <span className="text-xs text-text-muted">Aguardando</span>
                    )}
                  </div>

                  <h4 className="font-bold text-base text-text-main leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono mt-1">{step.category}</p>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border-subtle/60 text-[11px] font-mono text-text-muted">
                  {isCompleted ? (
                    <span className="text-emerald-400 font-medium">{step.statusText}</span>
                  ) : isCurrent ? (
                    <span className="text-cyan-400">⚡ A validar payload...</span>
                  ) : (
                    <span>Pronto para execução</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Payload Viewer */}
        {activeStep > 0 && (
          <div className="mt-8 p-4 rounded-xl bg-black/60 border border-border-subtle font-mono text-xs">
            <div className="flex items-center justify-between text-text-muted pb-2 border-b border-border-subtle mb-3">
              <span className="flex items-center gap-2 text-cyan-400 font-semibold">
                <Terminal className="w-4 h-4" aria-hidden="true" />
                Live Payload de Automação — Nó 0{activeStep}
              </span>
              <span className="text-[11px]">Formato JSON validado</span>
            </div>
            <pre className="text-emerald-400 overflow-x-auto p-2 bg-neutral-950/80 rounded">
              <code>{steps[activeStep - 1]?.outputPayload}</code>
            </pre>
          </div>
        )}
      </Card>

      {/* Bento Grid de Produtividade com AI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card glow="violet" className="flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-5">
              <Sparkles className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-text-main">Vibe Coding & Prototipagem Ágil</h3>
            <p className="text-text-muted text-sm mt-3 leading-relaxed">
              Utilização diária intensiva de ferramentas como Cursor, Claude Code e Copilot para desenhar e implementar
              soluções em tempo recorde, passando do conceito à ferramenta funcional sem fricção.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
            <Badge variant="violet" size="sm">Claude Code</Badge>
            <Badge variant="violet" size="sm">Cursor</Badge>
            <Badge variant="violet" size="sm">Copilot</Badge>
          </div>
        </Card>

        <Card glow="cyan" className="flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <Terminal className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-text-main">Lógica Técnica & Scripts Python</h3>
            <p className="text-text-muted text-sm mt-3 leading-relaxed">
              Formação em Informática na UBI focada em código sólido, estruturas de dados, chamadas a APIs REST e scripts em
              Linux para tratamento automático de ficheiros e automatização de rotinas de suporte.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
            <Badge variant="cyan" size="sm">Python</Badge>
            <Badge variant="cyan" size="sm">Linux CLI</Badge>
            <Badge variant="cyan" size="sm">Webhooks</Badge>
          </div>
        </Card>

        <Card glow="emerald" className="flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-text-main">Estabilidade & Operação Real</h3>
            <p className="text-text-muted text-sm mt-3 leading-relaxed">
              Experiência prática na gestão técnica do criaportal.pt (WordPress/CMS) e histórico comprovado em liderança operacional
              (Pans & Company), garantindo rigor, pontualidade e resolução proativa de problemas.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
            <Badge variant="emerald" size="sm">CMS / WordPress</Badge>
            <Badge variant="emerald" size="sm">Troubleshooting</Badge>
            <Badge variant="emerald" size="sm">Uptime 100%</Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}
