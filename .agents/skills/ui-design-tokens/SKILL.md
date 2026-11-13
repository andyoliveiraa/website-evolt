---
name: ui-design-tokens
description: Atua como Arquiteto de Design Systems. Gera variáveis CSS (:root) e/ou configuração Tailwind com paleta semântica (primary, secondary, accent, background, surface, text-main, text-muted, border, estados de alerta) em escalas 50–950, escala tipográfica, espaçamentos, border-radius e elevações. Proíbe valores hardcoded fora dos tokens. Use esta skill para definir, auditar ou refatorar design tokens, temas e variáveis de estilo em qualquer projeto web.
---

# UI Design Tokens — Arquiteto de Design Systems

Esta skill atua como uma autoridade em arquitetura de Design Systems modernos. Ela padroniza a fundação visual de qualquer projeto web, convertendo conceitos abstratos em tokens semânticos estruturados, reutilizáveis e escaláveis.

## Quando Ativar Esta Skill
- Criação de novos projetos frontend (HTML, Tailwind CSS, React, Vue, Svelte, Next.js).
- Configuração de `tailwind.config.ts` ou arquivos de variáveis CSS `:root`.
- Implementação de suporte a Light Mode e Dark Mode.
- Refatoração de CSS legado com valores mágicos ou hardcoded.
- Construção de temas de marca e sistemas de design unificados.

---

## 1. Regra Fundamental: Tolerância Zero a Valores Hardcoded
Nenhum valor arbitrário ("magic number") deve existir fora dos tokens de design:
- ❌ **Proibido**: `color: #3b82f6`, `margin: 17px`, `padding: 23px`, `border-radius: 9px`, `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`
- ✅ **Obrigatório**: `color: var(--color-primary-600)` ou `text-primary-600`, `p-4`, `rounded-md`, `shadow-md`

---

## 2. Paleta Semântica Completa (Escalas 50–950)
Toda paleta semântica deve contemplar as seguintes categorias em escala completa (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950):

1. **Brand & Actions**:
   - `primary`: Cor de marca principal e ações primárias.
   - `secondary`: Ações secundárias e elementos de apoio.
   - `accent`: Realces, badges de novidade, pontos focais.
2. **Superfícies & Fundos**:
   - `background`: Tela base (Light / Dark).
   - `surface`: Cards, popovers, modais, painéis.
   - `surface-raised`: Elementos elevados sobre a superfície.
3. **Tipografia & Conteúdo**:
   - `text-main`: Leitura primária de alto contraste.
   - `text-muted`: Legendas, placeholders, dados secundários.
   - `text-inverted`: Texto para contraste sobre fundos escuros/claros inversos.
4. **Bordas & Divisores**:
   - `border`: Bordas padrão de containers e inputs.
   - `border-focus`: Destaque de foco e seleção.
5. **Estados de Alerta (Feedback)**:
   - `success`: Sucesso, confirmação, status positivo.
   - `warning`: Atenção, avisos preventivos.
   - `error`: Erros críticos, validações com falha, perigo.
   - `info`: Mensagens contextuais e notas informativas.

---

## 3. Implementação em Variáveis CSS (:root e .dark)

```css
:root {
  /* Escala de Cinzas / Superfícies (Light Mode) */
  --color-neutral-50: #f8fafc;
  --color-neutral-100: #f1f5f9;
  --color-neutral-200: #e2e8f0;
  --color-neutral-300: #cbd5e1;
  --color-neutral-400: #94a3b8;
  --color-neutral-500: #64748b;
  --color-neutral-600: #475569;
  --color-neutral-700: #334155;
  --color-neutral-800: #1e293b;
  --color-neutral-900: #0f172a;
  --color-neutral-950: #020617;

  /* Semântica Light */
  --bg-app: var(--color-neutral-50);
  --bg-surface: #ffffff;
  --bg-surface-raised: #ffffff;
  --text-main: var(--color-neutral-900);
  --text-muted: var(--color-neutral-500);
  --border-subtle: var(--color-neutral-200);
  --border-strong: var(--color-neutral-300);

  /* Primary (Blue) */
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;

  /* Estados de Feedback */
  --color-success-50: #f0fdf4;
  --color-success-500: #22c55e;
  --color-success-700: #15803d;
  --color-warning-50: #fffbeb;
  --color-warning-500: #f59e0b;
  --color-warning-700: #b45309;
  --color-error-50: #fef2f2;
  --color-error-500: #ef4444;
  --color-error-700: #b91c1c;

  /* Espaçamentos (Base 4px) */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */

  /* Border Radius */
  --radius-sm: 0.25rem; /* 4px */
  --radius-md: 0.5rem;  /* 8px */
  --radius-lg: 0.75rem; /* 12px */
  --radius-xl: 1rem;    /* 16px */
  --radius-full: 9999px;

  /* Elevações / Shadows */
  --elevation-1: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --elevation-2: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --elevation-3: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.dark {
  /* Semântica Dark (Tons Profundos, nunca #000000 puro) */
  --bg-app: #09090b;
  --bg-surface: #141416;
  --bg-surface-raised: #1f1f23;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-subtle: #27272a;
  --border-strong: #3f3f46;

  /* Elevações com glow e sombra sutil */
  --elevation-1: 0 1px 2px 0 rgb(0 0 0 / 0.5);
  --elevation-2: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 0 0 1px rgb(255 255 255 / 0.05);
  --elevation-3: 0 10px 15px -3px rgb(0 0 0 / 0.6), 0 0 0 1px rgb(255 255 255 / 0.08);
}
```

---

## 4. Integração com Tailwind CSS (`tailwind.config.ts`)

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-app)",
        surface: {
          DEFAULT: "var(--bg-surface)",
          raised: "var(--bg-surface-raised)",
        },
        primary: {
          50: "var(--color-primary-50)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
        },
        status: {
          success: "var(--color-success-500)",
          warning: "var(--color-warning-500)",
          error: "var(--color-error-500)",
        },
        border: "var(--border-subtle)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        sm: "var(--elevation-1)",
        md: "var(--elevation-2)",
        lg: "var(--elevation-3)",
      },
    },
  },
};
export default config;
```

---

## 5. Checklist de Verificação de Tokens
- [ ] Todas as cores estão mapeadas em variáveis ou classes semânticas.
- [ ] Não há nenhum valor hexadecimal ou rgb inserido diretamente nos componentes.
- [ ] As superfícies em Dark Mode utilizam fundos ricos (#09090B ou #0F172A) em vez de preto puro.
- [ ] A escala de espaçamento segue a grelha de 4px/8px de forma consistente.
- [ ] Os estados de alerta contemplam texto, fundo e borda em contraste adequado.
