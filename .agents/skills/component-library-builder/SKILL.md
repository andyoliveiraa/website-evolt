---
name: component-library-builder
description: Atua como Desenvolvedor UI Sénior (padrão Shadcn/UI e Radix UI). Cria componentes modulares e reutilizáveis com todos os estados (default, hover, focus-visible, active, disabled, loading) e navegação completa por teclado (Escape, Tab, Enter, Space). Use esta skill para construir componentes acessíveis, consistentes e de alta qualidade técnica em React, Vue ou Web Components.
---

# Component Library Builder — Desenvolvedor UI Sénior

Esta skill atua como um Desenvolvedor UI Especialista no padrão Shadcn/UI e primitivas Radix UI. Foca na construção de bibliotecas de componentes acessíveis, desacopladas, com gerenciamento completo de estados visuais e conformidade com os padrões WAI-ARIA Authoring Practices.

## Quando Ativar Esta Skill
- Criação de novos componentes reutilizáveis (Button, Modal, Input, Dialog, Dropdown, Tabs).
- Implementação de navegação por teclado e trapping de foco.
- Garantia de cobertura total de estados interativos em componentes de formulários e botões.
- Refatoração de componentes para suportar variantes com `class-variance-authority` (CVA).

---

## 1. Matriz Completa de Estados Interativos
Todo componente interativo deve declarar explicitamente comportamentos para os seguintes 6 estados:

1. **Default**: Apelo visual equilibrado, legível e em contraste.
2. **Hover**: Feedback tátil sutil de passagem de cursor (escurecimento ou clareamento proporcional de 5–10%).
3. **Focus-Visible**: Foco ótico nítido para navegação por teclado. **Nunca remova outline sem substituir por anel de foco visível**:
   - `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`
4. **Active (Pressed)**: Feedback de clique físico imediato (ex: `active:scale-[0.98]`).
5. **Disabled**: Visualmente inativo (`opacity-50 cursor-not-allowed pointer-events-none`) com atributo `disabled` ou `aria-disabled="true"`.
6. **Loading**: Indicador de carregamento (spinner sutil), bloqueio de novas submissões (`aria-busy="true"`), preservando a largura do botão para evitar Cumulative Layout Shift (CLS).

---

## 2. Navegação Completa por Teclado e Foco Acessível

| Tecla | Comportamento Obrigatório |
| :--- | :--- |
| `Tab` / `Shift + Tab` | Move o foco sequencialmente entre elementos interativos. |
| `Enter` | Aciona o botão focado, ativa links e submete formulários. |
| `Space` | Dispara ações de botões, alterna checkboxes e switches, abre menus. |
| `Escape` | Fecha modais, dropdowns, tooltips e diálogos, devolvendo o foco ao elemento disparador. |
| `Arrow Keys` | Navegação roving tabindex em menus, tabs e listas de opções. |

---

## 3. Exemplo de Componente de Produção: Button (Padrão Shadcn / CVA)

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500",
        secondary:
          "bg-surface-raised text-text-main border border-border hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:ring-neutral-400",
        destructive:
          "bg-error-600 text-white hover:bg-error-700 focus-visible:ring-error-500",
        ghost:
          "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-text-main focus-visible:ring-neutral-400",
        outline:
          "border border-border bg-transparent hover:bg-surface text-text-main focus-visible:ring-primary-500",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
```

---

## 4. Checklist do Component Library Builder
- [ ] O componente suporta os 6 estados (`default`, `hover`, `focus-visible`, `active`, `disabled`, `loading`).
- [ ] `focus-visible` está presente com indicador nítido de foco.
- [ ] Diálogos e dropdowns fecham com `Escape` e devolvem o foco ao gatilho original.
- [ ] O componente não sofre layout shift durante transições de estado ou carregamento.
- [ ] A API é previsível e estende os atributos HTML nativos correspondentes.
