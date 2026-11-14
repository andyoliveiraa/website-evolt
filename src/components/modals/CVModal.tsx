import { Printer, Mail, Phone, MapPin } from "lucide-react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { CANDIDATE, EXPERIENCES, EDUCATION, SKILL_CATEGORIES } from "../../data/candidateData";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Curriculum Vitae Digital — André Filipe Oliveira Dias" maxWidth="4xl">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-surface-raised rounded-xl mb-6 border border-border-subtle print:hidden">
        <p className="text-xs text-text-muted">
          Este CV digital foi estruturado com base nos dados oficiais e está formatado para leitura de recrutadores.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="primary" size="sm" onClick={handlePrint}>
            <Printer className="w-4 h-4 mr-1.5" aria-hidden="true" />
            Imprimir / Guardar PDF
          </Button>
        </div>
      </div>

      {/* Printable Sheet View */}
      <div className="bg-surface p-6 sm:p-8 rounded-2xl border border-border-strong text-text-main space-y-8 font-sans">
        {/* Header Profile */}
        <div className="border-b border-border-strong pb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-main">
            {CANDIDATE.name}
          </h1>
          <p className="text-base font-semibold text-violet-400 mt-1 uppercase tracking-wide">
            {CANDIDATE.headline}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-muted font-mono">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              {CANDIDATE.phone}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              {CANDIDATE.email}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              {CANDIDATE.location}
            </span>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-text-muted leading-relaxed">
            {CANDIDATE.bio}
          </p>
        </div>

        {/* Competências Principais */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-border-subtle pb-1">
            Competências Principais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.id} className="p-3 rounded-lg bg-surface-raised border border-border-subtle">
                <span className="text-xs font-bold text-text-main block mb-1.5">{category.title}</span>
                <ul className="space-y-1">
                  {category.skills.map((s) => (
                    <li key={s.name} className="text-[11px] text-text-muted flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <strong>{s.name}</strong> ({s.level})
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experiência Profissional */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-violet-400 mb-4 border-b border-border-subtle pb-1">
            Experiência Profissional
          </h2>

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-text-main">
                    {exp.company} — <span className="text-violet-400">{exp.role}</span>
                  </h3>
                  <span className="text-xs font-mono text-text-muted">{exp.period}</span>
                </div>
                <span className="text-xs text-text-muted block italic">{exp.location}</span>

                <ul className="mt-2 space-y-1">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-xs text-text-muted flex items-start gap-2">
                      <span className="text-violet-400 shrink-0 mt-0.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Formação Académica */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4 border-b border-border-subtle pb-1">
            Formação Académica & Técnica
          </h2>

          <div className="space-y-4">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-text-main">
                    {edu.course}
                  </h3>
                  <span className="text-xs font-mono text-text-muted">{edu.period}</span>
                </div>
                <span className="text-xs font-semibold text-emerald-400 block">{edu.institution}</span>
                <p className="text-xs text-text-muted leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disponibilidade Geográfica & Compromisso */}
        <div className="p-4 rounded-xl bg-surface-raised border border-cyan-500/30 text-xs text-text-muted">
          <strong className="text-text-main block mb-1">Nota de Enquadramento & Regime:</strong>
          {CANDIDATE.availabilityNote}
        </div>
      </div>
    </Modal>
  );
}
