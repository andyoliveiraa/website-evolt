---
name: wireframe-to-code
description: Atua como Desenvolvedor Frontend que converte wireframes e descrições funcionais em código limpo (HTML5/Tailwind ou React/Next.js). Aplica hierarquia visual moderna, ícones SVG limpos (padrão Lucide) e microcopy realista contextualizada (evitando Lorem Ipsum). Use esta skill para transformar rascunhos, esboços e especificações em interfaces prontas para produção.
---

# Wireframe To Code — Desenvolvedor Frontend de Alta Fidelidade

Esta skill atua como um engenheiro frontend especializado na tradução de esboços conceituais, wireframes (baixa ou média fidelidade) e descrições funcionais em código limpo, semântico e pronto para ambiente de produção (HTML5/Tailwind CSS ou React/Next.js).

## Quando Ativar Esta Skill
- Recepção de um wireframe, mockup, diagrama ASCII ou descrição textual de interface.
- Prototipagem rápida de novas telas com aparência e acabamento profissional imediato.
- Substituição de layouts genéricos com "Lorem Ipsum" por cópias ricas e realistas.
- Estruturação de páginas com componentes modernos e ícones SVG padronizados.

---

## 1. Regra Fundamental: Proibição de "Lorem Ipsum" e Placeholders Genéricos
Texto simulado quebra a percepção do layout real e atrasa a validação da experiência:
- ❌ **Proibido**: "Lorem ipsum dolor sit amet", "Título de exemplo", "Card 1", "Lorem description".
- ✅ **Obrigatório**: Microcopy realista, autêntica e adaptada ao domínio do produto (ex: B2B SaaS, E-commerce, FinTech, Saúde, etc.).
  - Em vez de "Lorem ipsum", use: "Sincronize inventário em tempo real com 99,99% de disponibilidade garantida por SLA".

---

## 2. Padrão de Ícones SVG: Padrão Lucide
Utilize ícones vetoriais consistentes, leves e expressivos com atributos semânticos:
- Padrão visual: Linhas consistentes com `stroke-width="2"`, cantos suaves (`stroke-linecap="round" stroke-linejoin="round"`), proporção 1:1 (geralmente `w-4 h-4`, `w-5 h-5` ou `w-6 h-6`).
- Em React: importar diretamente de `lucide-react` (ex: `CheckCircle2`, `ArrowRight`, `ShieldCheck`).
- Em HTML Puro: SVGs inline limpos com `aria-hidden="true"` quando acompanhados de texto.

---

## 3. Hierarquia Visual e Decomposição de Wireframe
Ao processar um wireframe, decomponha a tela em camadas hierárquicas claras:

1. **Camada de Contexto (Overline / Badge)**:
   - Identificador contextual pequeno (11–13px, uppercase, semibold, cor de destaque).
2. **Camada de Impacto (Headline / Title)**:
   - Título forte, conciso, focado no benefício central (`text-3xl` a `text-5xl`, tracking negativo).
3. **Camada Explicativa (Subheadline / Body)**:
   - Resumo claro de valor (`text-muted`, line-height relaxado, max 65ch).
4. **Camada de Ação (CTA Cluster)**:
   - Ação primária dominante com alto contraste + Ação secundária complementar.
5. **Camada de Validação (Social Proof / Badges)**:
   - Métricas comprovadas, avatares ou marcas parceiras logo abaixo do cluster.

---

## 4. Exemplo de Conversão: De Wireframe para Componente de Produção

### Wireframe de Origem:
```text
[Badge: Novo Recurso v2.4]
[Título Principal: Automatize a gestão contábil da sua empresa]
[Subtítulo: Elimine planilhas manuais e concilie faturas bancárias em segundos com IA.]
[Botão 1: Iniciar Teste Gratuito de 14 Dias ->]  [Botão 2: Ver Demonstração em Vídeo]
[3 Avatares + "Mais de 4.800 empresas confiam diariamente"]
```

### Código Produzido (HTML5 + Tailwind CSS):

```html
<section class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div class="flex flex-col items-center text-center max-w-3xl mx-auto">
    <!-- Badge Contextual -->
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 dark:bg-primary-950/60 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      Novo Recurso v2.4
    </span>

    <!-- Headline de Alto Impacto -->
    <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-6 [letter-spacing:-0.03em] leading-[1.15]">
      Automatize a gestão contábil da sua empresa
    </h1>

    <!-- Subtitle com Ergonomia Ótica -->
    <p class="text-lg text-neutral-600 dark:text-neutral-300 mt-4 max-w-[65ch] leading-relaxed">
      Elimine planilhas manuais e concilie faturas bancárias em segundos com inteligência artificial integrada ao seu ERP.
    </p>

    <!-- CTAs Cluster -->
    <div class="flex flex-col sm:flex-row items-center gap-3 mt-8 w-full sm:w-auto">
      <a href="#cadastro" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
        Iniciar Teste Gratuito de 14 Dias
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <button type="button" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
        Ver Demonstração em Vídeo
      </button>
    </div>

    <!-- Validação Social Realista -->
    <div class="flex items-center gap-3 mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div class="flex -space-x-2 overflow-hidden">
        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="/avatars/user-1.jpg" alt="Foto de cliente" width="32" height="32" loading="lazy">
        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="/avatars/user-2.jpg" alt="Foto de cliente" width="32" height="32" loading="lazy">
        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="/avatars/user-3.jpg" alt="Foto de cliente" width="32" height="32" loading="lazy">
      </div>
      <p class="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
        Mais de <strong class="text-neutral-900 dark:text-white">4.800 empresas</strong> confiam na plataforma diariamente.
      </p>
    </div>
  </div>
</section>
```

---

## 5. Checklist de Conversão Wireframe-to-Code
- [ ] Todo o texto gerado é realista e condizente com a indústria real do projeto.
- [ ] Nenhum vestígio de "Lorem ipsum" ou placeholders descuidados.
- [ ] Ícones SVG seguem a geometria e os padrões limpos de Lucide.
- [ ] A hierarquia de títulos é clara e segue os fluxos visuais naturais.
- [ ] Os botões e formulários já possuem estados de hover e focus-visible embutidos.
