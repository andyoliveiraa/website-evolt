import * as React from "react";
import { Sparkles, FileText, Menu, X, Mail } from "lucide-react";
import { Button } from "../ui/Button";

interface NavbarProps {
  onOpenCVModal: () => void;
}

export function Navbar({ onOpenCVModal }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Automação & AI", href: "#automacao" },
    { label: "Projetos", href: "#projetos" },
    { label: "Trajetória", href: "#experiencia" },
    { label: "Competências", href: "#competencias" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/85 border-b border-border-subtle transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg p-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="font-bold text-base tracking-tight text-text-main group-hover:text-violet-400 transition-colors">
              André Dias
            </span>
            <div className="flex items-center gap-1.5 text-xs text-text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Evolt / ITS Candidate</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Navegação Principal" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text-main hover:text-violet-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={onOpenCVModal}>
            <FileText className="w-4 h-4 mr-1 text-violet-400" aria-hidden="true" />
            Ver CV Digital
          </Button>
          <a href="#contacto">
            <Button variant="primary" size="sm">
              <Mail className="w-4 h-4 mr-1" aria-hidden="true" />
              Contacto
            </Button>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-surface-raised focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border-subtle bg-surface px-4 pt-3 pb-6 space-y-4 animate-fade-in">
          <nav aria-label="Navegação Mobile" className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-text-muted hover:text-text-main hover:bg-surface-raised"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <Button
              variant="secondary"
              className="w-full justify-center"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCVModal();
              }}
            >
              <FileText className="w-4 h-4 mr-2 text-violet-400" aria-hidden="true" />
              Ver CV Digital
            </Button>
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center">
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                Iniciar Conversa
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
