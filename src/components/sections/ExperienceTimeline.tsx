import { Briefcase, Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { EXPERIENCES, EDUCATION } from "../../data/candidateData";

export function ExperienceTimeline() {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge variant="cyan" size="sm">
          <Briefcase className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
          Percurso & Competências Reais
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mt-4 tracking-tight [letter-spacing:-0.03em]">
          Trajetória Operacional, Comercial & Rigor Técnico
        </h2>
        <p className="text-text-muted mt-3 text-base sm:text-lg leading-relaxed max-w-[65ch]">
          Um percurso que demonstra liderança em ambientes exigentes, facilidade de comunicação com clientes e disciplina
          para gerir infraestruturas digitais e resolver problemas no terreno.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Experience Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl font-bold text-text-main flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            Experiência Profissional Comprovada
          </h3>

          <div className="relative pl-6 sm:pl-8 border-l border-border-strong space-y-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Pin */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                <Card className="p-5 sm:p-6 bg-surface/80 border-border-subtle hover:border-border-strong">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-subtle">
                    <div>
                      <h4 className="text-lg font-bold text-text-main group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-text-muted mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-1 text-xs text-text-muted font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" aria-hidden="true" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-text-muted" aria-hidden="true" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2 text-sm text-text-muted">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-5 pt-3 border-t border-border-subtle/50 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-surface-raised text-text-muted border border-border-subtle font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Column (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-xl font-bold text-text-main flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-violet-400"></span>
            Formação Académica & Técnica
          </h3>

          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <Card key={idx} glow="violet" className="p-5 bg-surface/80">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="violet" size="sm">
                    {edu.status}
                  </Badge>
                  <span className="text-xs text-text-muted font-mono">{edu.period}</span>
                </div>

                <h4 className="font-bold text-base text-text-main mt-2">
                  {edu.course}
                </h4>
                <p className="text-xs font-semibold text-violet-400 mt-1">
                  {edu.institution}
                </p>

                <p className="text-xs text-text-muted mt-3 leading-relaxed">
                  {edu.details}
                </p>
              </Card>
            ))}

            {/* Candidate Mindset Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-950/40 via-surface to-cyan-950/30 border border-violet-500/30">
              <div className="flex items-center gap-2 text-violet-400 font-bold text-sm mb-2">
                <Award className="w-4 h-4" aria-hidden="true" />
                Vontade de Aprender & Integrar
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                "Procuro a minha primeira oportunidade profissional dedicada em informática e sistemas digitais. Trago a
                humildade para aprender todos os detalhes das operações da Evolt e a determinação para acrescentar valor desde o primeiro dia."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
