import * as React from "react";
import { Filter, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { SKILL_CATEGORIES } from "../../data/candidateData";

interface InteractiveCVProps {
  onOpenCVModal: () => void;
}

export function InteractiveCV({ onOpenCVModal }: InteractiveCVProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { id: "all", label: "Todas as Áreas" },
    { id: "ai-vibe", label: "AI & Vibe Coding" },
    { id: "web-cms", label: "Sistemas & Web" },
    { id: "prog", label: "Programação" },
    { id: "comm-sales", label: "Comunicação & Vendas" },
  ];

  const filteredCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="competencias" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <Badge variant="emerald" size="sm">
          <Filter className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
          Competências Estruturadas
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mt-4 tracking-tight [letter-spacing:-0.03em]">
          Filtro Interativo de Competências & Ferramentas
        </h2>
        <p className="text-text-muted mt-3 text-base sm:text-lg leading-relaxed max-w-[65ch]">
          Explore as áreas técnicas e comportamentais com base nas necessidades práticas da equipa da Evolt.
        </p>

        {/* Action Button */}
        <div className="mt-6">
          <Button variant="primary" size="md" onClick={onOpenCVModal}>
            <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
            Visualizar CV Completo Formatado
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Filtro de competências">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                isActive
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                  : "bg-surface hover:bg-surface-raised text-text-muted hover:text-text-main border border-border-subtle"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((cat) => (
          <Card key={cat.id} glow="violet" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle mb-4">
                <h3 className="font-bold text-lg text-text-main">{cat.title}</h3>
                <span className="text-xs text-text-muted font-mono">{cat.skills.length} Competências</span>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-surface-raised/60 border border-border-subtle flex flex-col justify-between gap-1 hover:border-border-strong transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-text-main flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" aria-hidden="true" />
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                          skill.level === "Avançado"
                            ? "bg-violet-500/15 text-violet-400 border border-violet-500/30"
                            : skill.level === "Intermédio"
                            ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                            : "bg-neutral-500/15 text-neutral-400 border border-neutral-500/30"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed pl-5.5">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
