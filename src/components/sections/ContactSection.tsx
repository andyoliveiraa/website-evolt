import * as React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { CANDIDATE } from "../../data/candidateData";

export function ContactSection() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSent, setIsSent] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 800);
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge variant="cyan" size="sm">
          <MessageSquare className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
          Disponibilidade & Contacto Direto
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mt-4 tracking-tight [letter-spacing:-0.03em]">
          Vamos Conversar sobre o Futuro da Evolt?
        </h2>
        <p className="text-text-muted mt-3 text-base sm:text-lg leading-relaxed max-w-[65ch]">
          Totalmente disponível para uma conversa online ou apresentação presencial na vossa sede em Vila de Cucujães.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Card glow="cyan" className="p-6 sm:p-8 bg-surface-raised/70">
            <h3 className="text-xl font-bold text-text-main mb-6">
              Canais Diretos de Comunicação
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${CANDIDATE.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border-subtle hover:border-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-text-muted block font-mono">E-mail Profissional</span>
                  <span className="text-sm font-bold text-text-main group-hover:text-cyan-400 transition-colors">
                    {CANDIDATE.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${CANDIDATE.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border-subtle hover:border-emerald-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-text-muted block font-mono">Telefone / WhatsApp</span>
                  <span className="text-sm font-bold text-text-main group-hover:text-emerald-400 transition-colors">
                    {CANDIDATE.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border-subtle">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-text-muted block font-mono">Localização & Mobilidade</span>
                  <span className="text-sm font-bold text-text-main block">
                    Covilhã / São João da Madeira
                  </span>
                  <span className="text-xs text-text-muted mt-1 block">
                    Abertura e facilidade de deslocação imediata para Cucujães / Aveiro.
                  </span>
                </div>
              </div>
            </div>

            {/* Regime Note Callout */}
            <div className="mt-6 p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs leading-relaxed text-text-muted">
              <span className="font-bold text-cyan-400 block mb-1">Regime de Trabalho Flexível:</span>
              Disponibilidade imediata para arranque presencial na sede da Evolt em Vila de Cucujães, regime híbrido ou
              remoto. Forte entusiasmo e empenho para assegurar a primeira oportunidade na área de informática.
            </div>
          </Card>
        </div>

        {/* Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8 bg-surface">
            <h3 className="text-xl font-bold text-text-main mb-2">
              Envie uma Mensagem Rápida
            </h3>
            <p className="text-sm text-text-muted mb-6">
              Preencha o formulário abaixo para agendarmos uma entrevista online ou visita à vossa sede.
            </p>

            {isSent ? (
              <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 text-center animate-fade-in">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" aria-hidden="true" />
                <h4 className="text-lg font-bold text-text-main">Mensagem Registada!</h4>
                <p className="text-sm text-text-muted mt-2 max-w-md mx-auto">
                  Obrigado pelo contacto. Responderei com a máxima brevidade via e-mail ou telefone.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-4"
                  onClick={() => setIsSent(false)}
                >
                  Enviar Outra Mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-semibold text-text-muted mb-1.5">
                    O Seu Nome / Empresa
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Equipa Evolt / João Silva"
                    className="w-full bg-surface-raised border border-border-strong rounded-xl px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-xs font-semibold text-text-muted mb-1.5">
                    O Seu E-mail
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@evolt.pt"
                    className="w-full bg-surface-raised border border-border-strong rounded-xl px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block text-xs font-semibold text-text-muted mb-1.5">
                    Mensagem / Proposta de Reunião
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Olá André, gostávamos de agendar uma conversa sobre a vaga de Automação & AI..."
                    className="w-full bg-surface-raised border border-border-strong rounded-xl px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cyan"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full justify-center"
                >
                  <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                  Enviar Mensagem Direta
                </Button>

                <p className="text-[11px] text-text-muted text-center pt-2">
                  🔒 Os seus dados são utilizados estritamente para contacto profissional direto.
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
