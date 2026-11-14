import { Mail, Phone, MapPin, MessageSquare, ExternalLink, Sparkles } from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { CANDIDATE } from "../../data/candidateData";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <Badge variant="cyan" size="sm">
          <MessageSquare className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
          Disponibilidade & Contacto Direto
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mt-4 tracking-tight [letter-spacing:-0.03em]">
          Vamos Conversar sobre o Futuro da Evolt?
        </h2>
        <p className="text-text-muted mt-3 text-base sm:text-lg leading-relaxed max-w-[65ch]">
          Totalmente disponível para uma conversa.
        </p>
      </div>

      {/* Centered Direct Contact Channels */}
      <div className="max-w-4xl mx-auto">
        <Card glow="cyan" className="p-6 sm:p-10 bg-surface-raised/70 border-border-strong">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-subtle">
            <div>
              <h3 className="text-xl font-bold text-text-main flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                Canais Diretos de Comunicação
              </h3>
              <p className="text-xs text-text-muted mt-1">
                Acesso imediato para agendamento de conversa ou esclarecimento de qualquer questão.
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Resposta Rápida
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email Channel */}
            <a
              href={`mailto:${CANDIDATE.email}`}
              className="flex items-center justify-between p-5 rounded-2xl bg-surface border border-border-subtle hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-text-muted block font-mono">E-mail Profissional</span>
                  <span className="text-sm font-bold text-text-main group-hover:text-cyan-400 transition-colors">
                    {CANDIDATE.email}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-cyan-400 transition-colors shrink-0" aria-hidden="true" />
            </a>

            {/* Phone Channel */}
            <a
              href={`tel:${CANDIDATE.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-between p-5 rounded-2xl bg-surface border border-border-subtle hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-text-muted block font-mono">Telefone / WhatsApp</span>
                  <span className="text-sm font-bold text-text-main group-hover:text-emerald-400 transition-colors">
                    {CANDIDATE.phone}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-emerald-400 transition-colors shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Location & Mobility Details */}
          <div className="mt-4 p-5 rounded-2xl bg-surface border border-border-subtle flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
              <MapPin className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs text-text-muted block font-mono">Localização & Disponibilidade</span>
              <span className="text-sm font-bold text-text-main block mt-0.5">
                Covilhã / São João da Madeira
              </span>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Total abertura e flexibilidade de horários para reuniões de alinhamento e apresentação do meu percurso.
              </p>
            </div>
          </div>

          {/* Flexible Work Regime Callout */}
          <div className="mt-6 p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs leading-relaxed text-text-muted">
            <strong className="text-cyan-400 block mb-1">Regime de Trabalho & Enquadramento:</strong>
            Disponibilidade para atuação presencial na sede da Evolt, regime híbrido ou remoto. Forte motivação e empenho para abraçar a primeira oportunidade profissional dedicada na área de informática e sistemas digitais.
          </div>
        </Card>
      </div>
    </section>
  );
}
