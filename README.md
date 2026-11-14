# Website Evolt ⚡

> Ecossistema moderno de desenvolvimento web e design de alta performance, equipado com uma suíte de **10 Skills Especializadas para Agentes de IA** (Google Antigravity), padrões WCAG 2.2, Core Web Vitals (95+), Design Tokens semânticos e arquitetura orientada a componentes.

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Suíte de 10 Skills de Web Design](#-suíte-de-10-skills-de-web-design)
  - [1. ui-design-tokens](#1-ui-design-tokens)
  - [2. color-accessibility-auditor](#2-color-accessibility-auditor)
  - [3. typography-pairing](#3-typography-pairing)
  - [4. modern-layout-grid](#4-modern-layout-grid)
  - [5. component-library-builder](#5-component-library-builder)
  - [6. wireframe-to-code](#6-wireframe-to-code)
  - [7. microinteractions-motion](#7-microinteractions-motion)
  - [8. cro-landing-reviewer](#8-cro-landing-reviewer)
  - [9. frontend-cwv-optimizer](#9-frontend-cwv-optimizer)
  - [10. semantic-aria-enforcer](#10-semantic-aria-enforcer)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Padrões de Engenharia & Qualidade](#-padrões-de-engenharia--qualidade)
- [Como Invocar as Skills](#-como-invocar-as-skills)

---

## 🚀 Visão Geral

O **Website Evolt** foi concebido para unir design de ponta, acessibilidade estrita e velocidade de carregamento instantânea. O repositório incorpora um conjunto completo de runbooks e diretrizes executáveis em formato de skills `.agents/skills/`, garantindo consistência visual e código com qualidade de produção em todas as etapas de desenvolvimento.

---

## 🧠 Suíte de 10 Skills de Web Design

Cada skill possui diretrizes rigorosas, exemplos de implementação, matrizes de validação e regras mandatórias.

### 1. `ui-design-tokens`
- **Papel**: Arquiteto de Design Systems.
- **Função**: Gera variáveis CSS (`:root` e `.dark`) e/ou configurações completas de Tailwind com paleta semântica em escalas 50–950 (`primary`, `secondary`, `accent`, `background`, `surface`, `text-main`, `text-muted`, `border`, `success`, `warning`, `error`, `info`), escala tipográfica, espaçamentos (grelha 4px/8px), border-radius e elevações por sombra.
- **Regra de Ouro**: Proíbe expressamente valores arbitrários e mágicos fora dos tokens de design.

### 2. `color-accessibility-auditor`
- **Papel**: Especialista em Cores e Acessibilidade WCAG 2.2.
- **Função**: Garante taxa de contraste mínima de 4.5:1 (AA) para texto normal e 3:1 para texto grande e componentes interativos (Critérios 1.4.3 e 1.4.11).
- **Dark Mode Saudável**: Elimina o preto puro (`#000000`) causador de fadiga visual e efeito halation, adotando tons profundos e ricos como `#09090B` ou `#0F172A`. Ajusta luminosidade mantendo o tom (hue) e saturação intactos.

### 3. `typography-pairing`
- **Papel**: Tipógrafo Digital.
- **Função**: Seleciona pares de Google Fonts balanceados de acordo com o tom da marca (SaaS Moderno, Editorial, Minimalista, Luxo ou Dev).
- **Ergonomia & Performance**: Escalas fluidas com `clamp()`, letter-spacing negativo subtil (`-0.02em` a `-0.03em`) em títulos, line-height confortável de `1.5`–`1.65`, largura máxima de linha em `65ch` e importação de alta performance com `font-display: swap` e preconnect.

### 4. `modern-layout-grid`
- **Papel**: Engenheiro de Layout Frontend.
- **Função**: Constrói interfaces Mobile-First usando CSS Grid e Flexbox, Bento Grids modulares com spans dinâmicos e secções Hero assimétricas com whitespace generoso.
- **Regra de Ouro**: Garante zero overflow horizontal entre 320px e 1920px+ (`overflow-x: clip`, `min-width: 0` defensivo e containers fluidos).

### 5. `component-library-builder`
- **Papel**: Desenvolvedor UI Sénior (Padrão Shadcn/UI e Radix UI).
- **Função**: Constrói componentes desacoplados e reutilizáveis (CVA, Tailwind Merge) com cobertura obrigatória de 6 estados interativos: `default`, `hover`, `focus-visible` (anel de foco claro), `active` (feedback tátil), `disabled` e `loading` (spinner sem layout shift).
- **Teclado**: Navegação completa por teclado com suporte a `Tab`, `Shift+Tab`, `Enter`, `Space` e `Escape`.

### 6. `wireframe-to-code`
- **Papel**: Desenvolvedor Frontend Wireframe-to-Code.
- **Função**: Converte wireframes, diagramas e especificações em código de produção limpo (HTML5/Tailwind ou React/Next.js).
- **Microcopy Realista**: Proíbe expressamente "Lorem Ipsum" ou placeholders genéricos, aplicando textos contextuais reais do modelo de negócio e ícones vetoriais padronizados no formato Lucide SVG.

### 7. `microinteractions-motion`
- **Papel**: UI Motion Designer de Alta Performance.
- **Função**: Animações e microinterações táteis focadas em 60/120 FPS estáveis.
- **GPU-Only**: Utiliza exclusivamente `transform` e `opacity`, evitando layout thrashing e repaints. Aplica curvas naturais `cubic-bezier(0.16, 1, 0.3, 1)`, durações controladas entre 150ms e 350ms e suporte obrigatório a `@media (prefers-reduced-motion: reduce)`.

### 8. `cro-landing-reviewer`
- **Papel**: Especialista em UX e Otimização de Conversão (CRO).
- **Função**: Otimiza a proposta de valor Above the Fold cumprindo a "Regra dos 5 Segundos", elabora CTAs orientados a benefícios em vez de ações genéricas, posiciona prova social em locais estratégicos de indecisão e reduz a fricção em formulários.

### 9. `frontend-cwv-optimizer`
- **Papel**: Engenheiro de Core Web Vitals & Google Lighthouse.
- **Função**: Elimina o Cumulative Layout Shift (CLS < 0.1) aplicando dimensões explícitas `width`/`height` ou `aspect-ratio` em todas as mídias. Acelera o LCP (< 2.5s) com `fetchpriority="high"` e preload de imagem crítica, adia recursos abaixo da dobra com `loading="lazy"` / `decoding="async"` e previne bloqueios da thread principal (INP < 200ms).

### 10. `semantic-aria-enforcer`
- **Papel**: Auditor de Semântica HTML5 & WAI-ARIA.
- **Função**: Elimina a "div soup" substituindo estruturas genéricas por landmarks semânticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **Acessibilidade Universal**: Garante apenas um `<h1>` por página, hierarquia sequencial sem saltos, `aria-label` em botões de ícone, `<label for="...">` associado a todos os inputs e textos alternativos `alt` descritivos ou vazios para decorativos.

---

## 📁 Estrutura do Repositório

```text
website-evolt/
├── .agents/
│   ├── skills.json                           # Registro local de skills
│   └── skills/
│       ├── ui-design-tokens/SKILL.md         # Design Tokens & Variáveis
│       ├── color-accessibility-auditor/SKILL.md # Auditoria WCAG 2.2
│       ├── typography-pairing/SKILL.md       # Escalas Fluidas & Fontes
│       ├── modern-layout-grid/SKILL.md       # Bento Grids & Layout Mobile-First
│       ├── component-library-builder/SKILL.md# Componentes Shadcn/Radix
│       ├── wireframe-to-code/SKILL.md        # Conversão de Wireframe & Lucide
│       ├── microinteractions-motion/SKILL.md # Motion GPU & Reduced Motion
│       ├── cro-landing-reviewer/SKILL.md     # Otimização de Conversão & UX
│       ├── frontend-cwv-optimizer/SKILL.md   # Core Web Vitals & Lighthouse
│       └── semantic-aria-enforcer/SKILL.md   # Semântica & WAI-ARIA
├── README.md                                 # Documentação principal
└── ...                                       # Código fonte e assets do projeto
```

---

## 🎯 Padrões de Engenharia & Qualidade

- **Acessibilidade**: Conformidade estrita com o padrão WCAG 2.2 Nível AA / AAA.
- **Performance**: Meta de 95–100 no Google Lighthouse (LCP < 2.5s, CLS < 0.1, INP < 200ms).
- **Design System**: Escala de cores semântica (50–950), Dark Mode natural com `#09090B` / `#0F172A`, e espaçamento proporcional em base 4px/8px.
- **Responsividade**: Zero quebra visual de 320px a 1920px+ (Smart Fluid Clamp & Flex/Grid).

---

## 💡 Como Invocar as Skills

As skills operam de forma nativa e automática com o assistente Antigravity:

1. **Por Invocação Direta**:
   - Exemplo: *"Use a skill `ui-design-tokens` para criar a paleta de cores primária e secundária do projeto."*
   - Exemplo: *"Ative a skill `cro-landing-reviewer` para auditar a primeira dobra desta landing page."*
2. **Por Deteção de Contexto**:
   - Ao solicitar a criação de layouts, auditorias de contraste, escolha de tipografia ou componentes acessíveis, o agente ativa automaticamente a skill especializada correspondente.

---

## 📄 Licença

Distribuído sob a licença MIT. Consulte o arquivo de licença para mais detalhes.
