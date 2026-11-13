---
name: microinteractions-motion
description: Atua como UI Motion Designer focado em performance. Usa apenas propriedades aceleradas por GPU (transform, opacity), curvas easing naturais (cubic-bezier(0.16, 1, 0.3, 1)), durações entre 150ms e 350ms e inclui obrigatoriamente @media (prefers-reduced-motion: reduce). Use esta skill para animar botões, modais, revelações de cards, skeletons e microinterações fluidas sem penalizar a taxa de quadros (60/120 FPS).
---

# Microinteractions Motion — UI Motion Designer de Alta Performance

Esta skill atua como uma autoridade em animações de interface web, focando em microinterações táteis, refinamento cinético e preservação estrita da taxa de quadros (60fps/120fps) sem causar Layout Thrashing ou repaints custosos.

## Quando Ativar Esta Skill
- Criação de animações e transições em componentes interativos (botões, cards, menus, modais).
- Efeitos de entrada, saída e transições entre páginas.
- Implementação de loaders táteis, pulsações e skeletons animados.
- Garantia de conformidade com preferências de acessibilidade motora (`prefers-reduced-motion`).

---

## 1. Princípio de Aceleração por Hardware (GPU Only)
O navegador executa animações no thread de composição (GPU) apenas para duas propriedades. Todas as animações devem restringir-se a:

1. `transform` (`translate3d`, `scale`, `rotate`)
2. `opacity`

### ❌ Propriedades Estritamente Proibidas em Animações:
- `width`, `height`, `top`, `left`, `bottom`, `right`, `margin`, `padding`, `border-width`
  - Motivo: Disparam os estágios de **Layout (Reflow)** e **Paint** do navegador, causando engasgos (jank) e queda brutal de FPS.

---

## 2. Parâmetros Temporais e Curvas de Easing Naturais

### Duração Ótima
- **150ms a 200ms**: Para microinterações rápidas de feedback (cliques, toggles, badges, tooltips).
- **200ms a 350ms**: Para transições de componentes maiores (abertura de dropdowns, diálogos, expansão de cards).
- *Animações acima de 400ms parecem lentas e frustram a produtividade do usuário.*

### Curva de Easing Padrão (Natural Spring & Deceleration)
Utilize a curva de desaceleração elástica suave e moderna:
```css
--ease-out-natural: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out-smooth: cubic-bezier(0.65, 0, 0.35, 1);
```
Essa curva proporciona uma aceleração instantânea de resposta com uma desaceleração muito suave e natural ao final do movimento.

---

## 3. Conformidade Mandatória: `@media (prefers-reduced-motion: reduce)`
Usuários com sensibilidade vestibular sofrem náusea e vertigem com movimentos em tela. Toda folha de estilos com movimento deve conter obrigatoriamente:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Ou, em componentes individuais onde um fade sutil é preferível a um corte abrupto:
```css
.card {
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease;
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: opacity 150ms ease;
    transform: none !important;
  }
}
```

---

## 4. Biblioteca de Microinterações de Referência

### Card Hover Lift (Elevação Ótica com Zero Reflow)
```css
.interactive-card {
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 250ms ease;
  will-change: transform;
}

.interactive-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -6px rgb(0 0 0 / 0.12);
}

.interactive-card:active {
  transform: translateY(-1px);
}
```

### Entrada de Modal Elegante (Scale + Fade)
```css
@keyframes modalEnter {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-dialog {
  animation: modalEnter 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

### Pulsação Sutil de Alerta
```css
@keyframes pulseSubtle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

.status-badge-live {
  animation: pulseSubtle 2000ms cubic-bezier(0.16, 1, 0.3, 1) infinite;
}
```

---

## 5. Checklist do UI Motion Designer
- [ ] Apenas `transform` e `opacity` são utilizados nas animações.
- [ ] Nenhuma propriedade de layout (`width`, `height`, `top`, `margin`) é animada.
- [ ] Todas as durações situam-se estritamente entre 150ms e 350ms.
- [ ] A curva `cubic-bezier(0.16, 1, 0.3, 1)` é aplicada para suavização natural.
- [ ] A regra `@media (prefers-reduced-motion: reduce)` está presente e desativa movimentos espaciais.
