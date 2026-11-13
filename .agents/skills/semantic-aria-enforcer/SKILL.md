---
name: semantic-aria-enforcer
description: Atua como Auditor de Semântica e WAI-ARIA. Substitui <div> excessivas por tags semânticas (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>), garante hierarquia única de <h1> a <h3>, aria-label em botões de ícone, <label> associados a inputs e alt descritivos. Use esta skill para auditar código HTML/JSX, eliminar "div soup" e garantir navegação impecável por leitores de tela e robôs de busca (SEO).
---

# Semantic ARIA Enforcer — Auditor de Semântica HTML5 & WAI-ARIA

Esta skill atua como auditor rigoroso de semântica web e acessibilidade assistiva WAI-ARIA. O seu propósito é assegurar que toda interface construída possua uma estrutura legível por máquinas, acessível a tecnologias assistivas (leitores de tela como NVDA, JAWS e VoiceOver) e perfeitamente indexável para motores de busca (SEO).

## Quando Ativar Esta Skill
- Revisão de código HTML, JSX, TSX, Vue ou Svelte para auditoria de semântica.
- Erradicação de "div soup" (aninhamento excessivo e desnecessário de tags `<div>`).
- Correção de falhas de acessibilidade em formulários e controles interativos.
- Estruturação de árvores de acessibilidade e landmarks de página.

---

## 1. Eliminação da "Div Soup": Landmarks Estruturais Semânticos
Nenhum elemento de nível superior deve ser construído puramente com `<div>` quando existir uma tag semântica dedicada:

| Função Estrutural | Tag Semântica Mandatória | Não Utilizar |
| :--- | :--- | :--- |
| Cabeçalho / Barra superior | `<header>` | `<div class="header">` |
| Navegação primária / secundária | `<nav aria-label="...">` | `<div class="menu">` |
| Conteúdo principal da página | `<main id="main-content">` | `<div class="content">` |
| Seção temática independente | `<section aria-labelledby="...">` | `<div class="section">` |
| Artigo, post ou card autossuficiente | `<article>` | `<div class="post">` |
| Conteúdo complementar / Sidebar | `<aside>` | `<div class="sidebar">` |
| Rodapé institucional e links | `<footer>` | `<div class="footer">` |

---

## 2. Hierarquia Estrita de Cabeçalhos (Headings)
Leitores de tela dependem da hierarquia de cabeçalhos para navegar pelo documento:

1. **Apenas 1 `<h1>` por Página**: O `<h1>` deve sintetizar o tema central da página e estar contido no `<main>`.
2. **Sem Saltos de Nível**:
   - Correto: `<h1>` ➔ `<h2>` ➔ `<h3>`
   - Incorreto: `<h1>` ➔ `<h3>` (salto de nível desorienta o usuário de tecnologia assistiva).
3. **Não Use Tags de Heading Apenas por Estilo**: Se um elemento precisa apenas de texto grande sem peso semântico, use `<p class="text-xl font-bold">` em vez de criar um `<h3>` artificial.

---

## 3. Botões de Ícone e Controles Interativos Acessíveis
Todo botão que não possui texto legível visível deve conter uma descrição acessível explícita:

```html
<!-- Botão de Fechar Modal -->
<button
  type="button"
  aria-label="Fechar janela de diálogo"
  class="p-2 text-neutral-500 hover:text-neutral-900 rounded-lg"
>
  <svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

<!-- Botão de Menu Hamburguer (Mobile) -->
<button
  type="button"
  aria-label="Abrir menu de navegação"
  aria-expanded="false"
  aria-controls="mobile-menu"
  class="p-2"
>
  <svg class="w-6 h-6" aria-hidden="true" ...></svg>
</button>
```
*Nota: Ícones decorativos acompanhados de texto visível devem conter `aria-hidden="true"` para evitar leitura redundante.*

---

## 4. Associação Explícita em Formulários e Inputs
Leitores de tela não adivinham a qual campo um rótulo pertence:

```html
<!-- Associação Explícita Obrigatória: label for -> input id -->
<div class="flex flex-col gap-1.5">
  <label for="work-email" class="text-sm font-medium text-neutral-900 dark:text-neutral-100">
    E-mail Corporativo
  </label>
  <input
    id="work-email"
    name="email"
    type="email"
    required
    aria-required="true"
    aria-describedby="email-hint"
    placeholder="nome@empresa.com"
    class="px-3.5 py-2 rounded-md border border-neutral-300 dark:border-neutral-700"
  />
  <span id="email-hint" class="text-xs text-neutral-500">
    Utilizado exclusivamente para confirmação e login.
  </span>
</div>
```

---

## 5. Regras para Textos Alternativos de Imagens (`alt`)
- **Imagens Informativas**: Devem descrever o conteúdo e a função da imagem de forma contextual.
  - ✅ `alt="Gráfico de barras mostrando aumento de 35% nas conversões no terceiro trimestre"`
  - ❌ `alt="imagem"`, `alt="gráfico.png"`
- **Imagens Puramente Decorativas**: Devem possuir atributo `alt=""` vazio com `aria-hidden="true"` para que os leitores de tela as ignorem sem anunciar o nome do arquivo.
  - `<img src="/decorations/blob.svg" alt="" aria-hidden="true" />`

---

## 6. Checklist de Auditoria Semântica & WAI-ARIA
- [ ] O documento possui landmarks semânticos (`<header>`, `<nav>`, `<main>`, `<footer>`).
- [ ] Existe apenas um `<h1>` e os cabeçalhos não saltam níveis (`<h1>` ➔ `<h2>` ➔ `<h3>`).
- [ ] Todos os botões apenas com ícone contêm `aria-label` descritivo.
- [ ] Todos os `<input>` estão explicitamente associados a um `<label for="...">`.
- [ ] Textos de ajuda ou erro estão vinculados via `aria-describedby`.
- [ ] Todas as tags `<img>` possuem atributo `alt` (descritivo ou vazio para decorativas).
