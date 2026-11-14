import * as React from "react";
import { Download, Printer, Mail, Phone, MapPin, FileText, Monitor } from "lucide-react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { CANDIDATE, EXPERIENCES, EDUCATION, SKILL_CATEGORIES } from "../../data/candidateData";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const [viewMode, setViewMode] = React.useState<"pdf" | "web">("pdf");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Curriculum Vitae Oficial — André Filipe Oliveira Dias"
      maxWidth="5xl"
    >
      {/* Top Action Bar with Direct PDF Download & Mode Switch */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-surface-raised rounded-xl mb-6 border border-border-subtle">
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg bg-surface p-1 border border-border-subtle">
            <button
              onClick={() => setViewMode("pdf")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                viewMode === "pdf"
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Documento PDF Oficial
            </button>
            <button
              onClick={() => setViewMode("web")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                viewMode === "web"
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
              Versão Web Interativa
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/cv-andre-filipe-dias.pdf"
            download="CV-Andre-Filipe-Oliveira-Dias.pdf"
            className="inline-flex"
          >
            <Button variant="primary" size="sm">
              <Download className="w-4 h-4 mr-1.5" aria-hidden="true" />
              Guardar / Descarregar PDF
            </Button>
          </a>
          <a
            href="/cv-andre-filipe-dias.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="secondary" size="sm">
              <Printer className="w-4 h-4 mr-1.5 text-cyan-400" aria-hidden="true" />
              Abrir / Imprimir PDF
            </Button>
          </a>
        </div>
      </div>

      {viewMode === "pdf" ? (
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-border-subtle bg-zinc-900 shadow-2xl">
            <iframe
              src="/cv-andre-filipe-dias.pdf#toolbar=1"
              title="Curriculum Vitae Oficial em PDF — André Filipe Oliveira Dias"
              className="w-full h-[75vh] min-h-[620px] border-0 bg-white"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-surface/50 border border-border-subtle text-xs text-text-muted">
            <span>
              Curriculum Vitae Oficial de 2 páginas (Covilhã / Evolt)
            </span>
            <div className="flex items-center gap-3">
              <a
                href="/cv-andre-filipe-dias.pdf"
                download="CV-Andre-Filipe-Oliveira-Dias.pdf"
                className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                Descarregar Ficheiro
              </a>
              <span>•</span>
              <a
                href="/cv-andre-filipe-dias.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 font-medium inline-flex items-center gap-1"
              >
                <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                Imprimir Documento
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* Printable Sheet View */
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
      )}
    </Modal>
  );
}
