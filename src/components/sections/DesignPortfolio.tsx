import * as React from "react";
import { Palette, Sparkles, Eye, Film } from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Modal } from "../ui/Modal";

interface DesignItem {
  id: string;
  title: string;
  client: string;
  period: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  videoUrls?: string[];
}

export function DesignPortfolio() {
  const [selectedImage, setSelectedImage] = React.useState<{ src: string; title: string; alt: string } | null>(null);

  const designItems: DesignItem[] = [
    {
      id: "opticalia",
      title: "Social Media & Campanhas — Opticalia Mirandela",
      client: "Opticalia Mirandela",
      period: "2022 - 2025 (Quase 3 anos de colaboração)",
      category: "Social Media & Publicidade",
      description:
        "Gestão contínua das redes sociais da Opticalia Mirandela desde 2022 em regime de freelancer. Criação de peças gráficas para campanhas de consultas diárias, lentes de contacto, óculos progressivos/monofocais, efemérides (Dia do Riso) e produção de vídeos promocionais em After Effects para os ecrãs físicos em loja.",
      imageSrc: "/images/design/print_insta_opt.png",
      imageAlt: "Grelha de publicações do Instagram para a Opticalia Mirandela",
      tags: ["Meta Business Suite", "Adobe Photoshop", "After Effects", "Social Media", "Design de Conteúdo"],
      videoUrls: [
        "https://www.youtube.com/embed/_a7q_hjCUDA",
        "https://www.youtube.com/embed/kfXqpk1nZAY",
      ],
    },
    {
      id: "powerpc",
      title: "Social Media & Campanhas de Informática — PowerPC.PT",
      client: "PowerPC.PT (Mirandela & Macedo de Cavaleiros)",
      period: "2 anos e 1 mês de gestão",
      category: "E-commerce & Tecnologia",
      description:
        "Gestão e planeamento de redes sociais para a loja online e espaços físicos da PowerPC.PT. Elaboração de criativos e anúncios para hardware, reparação de smartphones, câmaras de ação (Insta360), aspiradores Xiaomi, impressoras e telemóveis, otimizando o alcance e envolvimento de clientes.",
      imageSrc: "/images/design/print_insta_pwpc.png",
      imageAlt: "Campanhas publicitárias para PowerPC no Instagram",
      tags: ["Marketing Digital", "Photoshop", "Hardware & Retalho", "Meta Ads", "Design Comercial"],
    },
    {
      id: "foguete",
      title: "Identidade Visual & Branding — Foguete.PT",
      client: "Projeto PAP (Escola Profissional de Murça)",
      period: "Duração de 1 ano de projeto",
      category: "Branding & Plataforma de Ensino",
      description:
        "Identidade visual completa criada no âmbito da Prova de Aptidão Profissional (PAP) para a plataforma de e-learning 'Foguete.PT'. O logótipo integra a metáfora do foguetão em progressão vertical contínua ('o ensino nunca pode parar'), contrastando tons de roxo e rosa (calma, concentração e modernidade) concebido nativamente para interfaces em tema escuro.",
      imageSrc: "/images/design/logo_foguetes.png",
      imageAlt: "Logótipo e identidade visual da Foguete.PT",
      tags: ["Identidade Visual", "Branding", "Vetor & Tipografia", "UI Dark Mode", "PAP"],
    },
    {
      id: "mgil",
      title: "Propostas de Identidade Visual — MGil Lacticínios",
      client: "Módulo de Design (EPM)",
      period: "3.º Ano de Comunicação e Marketing",
      category: "Identidade de Marca Regional",
      description:
        "Trabalho de design de marca para a insígnia fictícia de produtos lacticínios alentejanos 'MGil'. Elaboração de 3 propostas conceptuais distintas: a primeira centrada na árvore tradicional do montado com escudo, a segunda numa fusão minimalista da árvore com o lettering, e a terceira num ramo de folhas estilizado orientado para linhas de produto gourmet.",
      imageSrc: "/images/design/mgil_logos.png",
      imageAlt: "Três propostas de identidade visual para MGil Lacticínios",
      tags: ["Design de Logótipos", "Adobe Illustrator", "Composição Visual", "Branding Regional"],
    },
  ];

  return (
    <section id="design" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle/50">
      {/* Section Header with Honest, Authentic Framing */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge variant="violet" size="sm">
          <Palette className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
          Vertente Visual & Multimédia
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mt-4 tracking-tight [letter-spacing:-0.03em]">
          Design Gráfico, Identidade Visual & Redes Sociais
        </h2>

        {/* Candid & Transparent Mindset Quote */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-surface-raised/70 border border-violet-500/25 text-left max-w-2xl">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/15 text-violet-400 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-400 uppercase tracking-wider block mb-1">
                Nota de Contexto & Sentido Estético:
              </span>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                <em>
                  "O design gráfico puro nunca foi a minha área principal ou de maior especialização frente à programação,
                  automação e sistemas com IA — mas é uma vertente pela qual tenho também enorme gosto e à qual me dedico com
                  cuidado. Permite-me desenhar mockups realistas, criar criativos para redes sociais e assegurar que as
                  soluções técnicas têm sempre uma apresentação limpa e atraente."
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 4 Design Works */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {designItems.map((item) => (
          <Card
            key={item.id}
            glow="violet"
            className="flex flex-col justify-between p-6 sm:p-8 bg-surface-raised/40 hover:bg-surface-raised/70"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="text-xs text-violet-400 font-mono font-semibold block">
                    {item.category} • {item.client}
                  </span>
                  <h3 className="text-xl font-bold text-text-main mt-1 leading-snug">
                    {item.title}
                  </h3>
                  <span className="text-xs text-text-muted block mt-0.5">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Clickable Image Preview with Hover Overlay */}
              <div
                onClick={() =>
                  setSelectedImage({
                    src: item.imageSrc,
                    title: item.title,
                    alt: item.imageAlt,
                  })
                }
                className="my-5 relative rounded-xl overflow-hidden border border-border-subtle group cursor-pointer bg-black/40 shadow-lg"
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-56 sm:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <span className="text-xs font-medium text-text-main flex items-center gap-1.5 bg-surface/90 px-3 py-1.5 rounded-lg border border-border-subtle backdrop-blur-sm">
                    <Eye className="w-3.5 h-3.5 text-violet-400" aria-hidden="true" />
                    Ampliar Imagem
                  </span>
                  <span className="text-[11px] font-mono text-violet-300">
                    Portfólio Original
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>

              {/* Embedded Videos for Opticalia if present */}
              {item.videoUrls && item.videoUrls.length > 0 && (
                <div className="mt-5 pt-4 border-t border-border-subtle">
                  <span className="text-xs font-semibold text-text-main flex items-center gap-1.5 mb-3">
                    <Film className="w-3.5 h-3.5 text-violet-400" aria-hidden="true" />
                    Vídeos Promocionais & Motion (After Effects)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.videoUrls.map((url, idx) => (
                      <div key={idx} className="relative rounded-lg overflow-hidden border border-border-subtle bg-black aspect-video">
                        <iframe
                          src={url}
                          title={`Vídeo publicitário ${idx + 1}`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Tags */}
            <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border-subtle text-text-muted font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={selectedImage.title}
          maxWidth="4xl"
        >
          <div className="flex flex-col items-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl border border-border-subtle"
            />
            <p className="text-xs text-text-muted mt-3 text-center">
              {selectedImage.alt}
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
}
