---
name: modern-layout-grid
description: Atua como Engenheiro de Layout Frontend. Constrói interfaces Mobile-First usando CSS Grid, Flexbox, Bento Grids, secções Hero assimétricas e whitespace generoso. Garante zero overflow horizontal entre 320px e 1920px+. Use esta skill para projetar estruturas de página, grids responsivos, seções hero dinâmicas e arquiteturas de layout robustas.
---

# Modern Layout Grid — Engenheiro de Layout Frontend

Esta skill atua como engenheiro especialista em arquitetura de layout frontend moderno, combinando CSS Grid, Flexbox e técnicas avançadas de composição visual para criar layouts responsivos, expressivos e livres de bugs visuais.

## Quando Ativar Esta Skill
- Estruturação inicial do layout de páginas web, landing pages e dashboards.
- Criação de secções Hero assimétricas com alto impacto visual.
- Implementação de Bento Grids modulares com spans dinâmicos.
- Diagnóstico e correção de problemas de scroll horizontal indesejado (`overflow-x`).

---

## 1. Princípio Mobile-First & Breakpoints

A construção deve sempre partir de telas de 320px (mobile pequeno) até 1920px+ (monitores ultrawide), aplicando media queries `min-width`:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 2. Regra de Ouro: Zero Overflow Horizontal (320px a 1920px+)
Nenhum elemento deve quebrar a largura da viewport provocando barra de rolagem horizontal:

1. **Configuração Global Mandatória**:
   ```css
   *, *::before, *::after {
     box-sizing: border-box;
   }
   html, body {
     max-width: 100%;
     overflow-x: clip; /* ou overflow-x: hidden com fallback */
   }
   img, picture, video, canvas, svg {
     display: block;
     max-width: 100%;
     height: auto;
   }
   ```
2. **Defesa em Flexbox e CSS Grid**:
   - Por padrão, itens flex e grid possuem `min-width: auto`, o que impede encolhimento de textos longos ou pre tags. Aplique sempre:
     ```css
     .grid-item, .flex-child {
       min-width: 0;
     }
     ```
3. **Evitar Larguras Fixas**:
   - Nunca use larguras como `width: 500px` sem `max-width: 100%`.
   - Utilize containers fluidos: `width: min(100% - 2rem, 1200px); margin-inline: auto;`

---

## 3. Padrão Bento Grid Modular
Bento Grids organizam recursos e dados em mosaicos visuais assimétricos:

```html
<!-- Exemplo Bento Grid com Tailwind CSS -->
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px] max-w-7xl mx-auto px-4">
  <!-- Card Destaque (2 cols, 2 rows) -->
  <div class="md:col-span-2 md:row-span-2 rounded-2xl p-6 bg-surface border border-border flex flex-col justify-between">
    <div>
      <span class="text-xs font-semibold uppercase tracking-wider text-primary-500">Destaque</span>
      <h3 class="text-2xl font-bold mt-2">Visão Geral Completa</h3>
      <p class="text-text-muted mt-2">Mosaico de alta densidade informativa com hierarquia equilibrada.</p>
    </div>
    <div class="h-48 rounded-xl bg-background border border-border/50"></div>
  </div>

  <!-- Card Secundário Alto (1 col, 2 rows) -->
  <div class="md:col-span-1 md:row-span-2 rounded-2xl p-6 bg-surface border border-border flex flex-col justify-between">
    <div>
      <h3 class="text-xl font-bold">Métricas em Tempo Real</h3>
      <p class="text-text-muted text-sm mt-1">Atualização contínua de telemetria.</p>
    </div>
    <div class="h-40 rounded-xl bg-background border border-border/50"></div>
  </div>

  <!-- Cards Horizontais / Compactos -->
  <div class="md:col-span-1 rounded-2xl p-6 bg-surface border border-border flex flex-col justify-between">
    <h4 class="font-semibold">Segurança End-to-End</h4>
    <p class="text-text-muted text-sm">Criptografia em trânsito e repouso.</p>
  </div>
  <div class="md:col-span-1 rounded-2xl p-6 bg-surface border border-border flex flex-col justify-between">
    <h4 class="font-semibold">Latência Global</h4>
    <p class="text-text-muted text-sm">Respostas abaixo de 50ms na edge.</p>
  </div>
</div>
```

---

## 4. Secções Hero Assimétricas com Whitespace Generoso
Projetar heroes dinâmicos que fogem da simetria estática:

- **Proporção Ideal**: Divisão 60/40 ou 55/45 em desktop (`grid-cols-12` com `lg:col-span-7` para proposta de valor e `lg:col-span-5` para elemento interativo/mockup).
- **Whitespace (Espaço Negativo)**: Margens verticais generosas (`py-20` a `py-32` em desktop) para que a proposta respire.
- **Camadas Visuais**: Elementos de fundo desfocados sutis (`backdrop-blur`, gradientes radiais suaves).

---

## 5. Checklist de Engenharia de Layout
- [ ] O layout foi testado em 320px sem gerar qualquer scroll horizontal.
- [ ] Todos os containers respeitam `box-sizing: border-box` e `min-width: 0` em filhos de grid/flex.
- [ ] Imagens e mídias possuem `max-width: 100%` e `height: auto`.
- [ ] Bento grids colapsam elegantemente para 1 coluna em visualização mobile.
- [ ] O espaçamento entre secções respeita um ritmo vertical proporcional e generoso.
