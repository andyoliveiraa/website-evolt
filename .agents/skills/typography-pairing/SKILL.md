---
name: typography-pairing
description: Atua como Tipógrafo Digital. Seleciona pares de Google Fonts adequados ao tom do projeto, define escalas responsivas com clamp(), aplica letter-spacing negativo subtil (-0.02em a -0.03em) em títulos, line-height de 1.5–1.65 em leitura com max-width: 65ch e importação com font-display: swap. Use esta skill para desenhar hierarquias de texto ergonómicas, expressivas e de alta performance.
---

# Typography Pairing — Tipógrafo Digital

Esta skill atua como uma autoridade em tipografia digital contemporânea, garantindo legibilidade ótica, ritmo vertical rigoroso, emparelhamentos tipográficos expressivos e carregamento otimizado de fontes web.

## Quando Ativar Esta Skill
- Escolha de fontes e definição do sistema tipográfico de um novo projeto.
- Ajuste de responsividade da tipografia via fluid sizing com `clamp()`.
- Otimização da ergonomia de leitura em blogs, documentações e páginas de conteúdo.
- Resolução de problemas de layout shifts (CLS) ou fontes invisíveis (FOIT).

---

## 1. Pares Curados de Google Fonts por Tom do Projeto

| Tom do Projeto | Fonte de Título (Headings) | Fonte de Corpo (Body) | Características Óticas |
| :--- | :--- | :--- | :--- |
| **SaaS Moderno / Tech** | `Plus Jakarta Sans` ou `Inter` | `Inter` ou `Geist Sans` | Neutra, precisa, alta legibilidade em telas retina |
| **Editorial / Premium** | `Playfair Display` ou `Newsreader` | `Source Serif 4` ou `Lora` | Elegância clássica, contraste de traço apurado |
| **Clean Minimalist** | `Space Grotesk` ou `Outfit` | `DM Sans` | Caráter geométrico com excelente respiração |
| **Luxury / Sofisticado** | `Cormorant Garamond` | `Montserrat` ou `Lato` | Serifada refinada contrastada com sans geométrica |
| **Developer / Técnico** | `Fira Code` ou `JetBrains Mono` | `Inter` | Foco em legibilidade de código e números tabulares |

---

## 2. Escala Tipográfica Fluida Responsiva com `clamp()`
Evite breakpoints abruptos. Utilize funções CSS fluidas que escalam harmoniosamente entre telas de 320px (mobile) e 1280px (desktop):

```css
:root {
  /* Escala Fluida: clamp(min, preferred, max) */
  --font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* 12px -> 14px */
  --font-size-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);      /* 14px -> 16px */
  --font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);    /* 16px -> 18px */
  --font-size-lg: clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem);   /* 18px -> 20px */
  --font-size-xl: clamp(1.25rem, 1.15rem + 0.6vw, 1.5rem);     /* 20px -> 24px */
  --font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);          /* 24px -> 32px */
  --font-size-3xl: clamp(1.875rem, 1.6rem + 1.5vw, 2.5rem);    /* 30px -> 40px */
  --font-size-4xl: clamp(2.25rem, 1.9rem + 2vw, 3.25rem);      /* 36px -> 52px */
  --font-size-hero: clamp(2.75rem, 2.2rem + 3vw, 4.5rem);      /* 44px -> 72px */
}
```

---

## 3. Regras Óticas de Títulos e Leitura de Texto

### Títulos (Headings: `h1`, `h2`, `h3`, `display`)
- **Letter-Spacing Negativo Subtil**: Em fontes de exibição e tamanhos grandes, o espaçamento padrão das fontes parece excessivamente aberto. Aplique rigorosamente:
  ```css
  h1, .text-display {
    letter-spacing: -0.03em;
    line-height: 1.1;
    font-weight: 700;
  }
  h2, h3 {
    letter-spacing: -0.02em;
    line-height: 1.2;
    font-weight: 600;
  }
  ```

### Ergonomia do Texto de Leitura (Body & Paragraphs)
- **Line-Height Confortável**: Deve situar-se estritamente entre `1.5` e `1.65` (ex: `leading-relaxed`).
- **Medida Ideal de Leitura (Measure)**: Aplique `max-width: 65ch` (aproximadamente 60 a 75 caracteres por linha). Linhas mais longas fatigam a musculatura ocular do leitor.
  ```css
  p, article {
    max-width: 65ch;
    line-height: 1.6;
    letter-spacing: normal;
  }
  ```

---

## 4. Importação e Performance Web (Zero FOIT)
Sempre utilize preconnect e `display=swap` para evitar Flash of Invisible Text:

```html
<!-- No <head> do documento -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
```

No CSS:
```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap;
}
```

---

## 5. Checklist de Tipografia Digital
- [ ] O par de fontes foi escolhido com base no posicionamento da marca e produto.
- [ ] A importação conta com `font-display: swap` e preconnect ativo.
- [ ] Todos os títulos grandes possuem `letter-spacing: -0.02em` a `-0.03em`.
- [ ] O corpo de texto respeita o limite de `max-width: 65ch` e `line-height: 1.5–1.65`.
- [ ] A escala de fontes é calculada de forma fluida sem quebras bruscas entre telas.
