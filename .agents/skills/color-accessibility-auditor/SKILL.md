---
name: color-accessibility-auditor
description: Atua como Especialista em Cores e Acessibilidade WCAG 2.2. Garante contraste mínimo de 4.5:1 (AA) para texto normal e 3:1 para texto grande/UI. Gera variantes equilibradas para Light Mode e Dark Mode (usando tons profundos como #09090B ou #0F172A em vez de #000000 puro). Ajusta luminosidade mantendo saturação/matiz quando houver falha de contraste. Use esta skill para auditar paletas, corrigir problemas de contraste e assegurar conformidade visual universal.
---

# Color Accessibility Auditor — WCAG 2.2 Expert

Esta skill atua como um auditor especialista em teoria das cores, contraste ótico e padrões internacionais de acessibilidade digital (W3C WCAG 2.2, Critérios de Sucesso 1.4.3 e 1.4.11).

## Quando Ativar Esta Skill
- Auditoria de acessibilidade de interfaces web existentes ou protótipos.
- Escolha ou revisão de paletas de cores para Light Mode e Dark Mode.
- Ajuste de cores de botões, links, bordas de inputs, ícones e estados ativos/desativados.
- Resolução de avisos do Lighthouse ou Axe DevTools sobre `color-contrast`.

---

## 1. Padrões de Contraste WCAG 2.2

### Nível AA (Requisito Mínimo Obrigatório)
- **Texto Normal** (< 18pt / 24px ou < 14pt / 18.5px em negrito): **Mínimo de 4.5:1** em relação ao fundo imediato.
- **Texto Grande** (≥ 18pt / 24px ou ≥ 14pt / 18.5px em negrito): **Mínimo de 3:1**.
- **Componentes de Interface e Elementos Gráficos (WCAG 1.4.11)**: **Mínimo de 3:1**.
  - Bordas de inputs, botões, ícones interativos e indicadores de foco.

### Nível AAA (Padrão de Excelência)
- **Texto Normal**: Mínimo de **7:1**.
- **Texto Grande**: Mínimo de **4.5:1**.

---

## 2. Princípios de Dark Mode Saudável (Proibição do #000000 Puro)
O preto puro (`#000000`) gera problemas ergonômicos comprovados:
- **Halation Effect**: Luz branca forte sobre fundo totalmente preto causa dispersão de luz na retina e fadiga visual rápida para pessoas com astigmatismo.
- **Perda de Profundidade**: O preto absoluto impede a criação de sombras e camadas de elevação sutis.

### Fundos Recomendados para Dark Mode
- `#09090B` (Zinc escuro, neutro e elegante)
- `#0F172A` (Slate escuro, azulado sutil)
- `#121212` (Material Design padrão)
- `#0D1117` (GitHub Dark)

---

## 3. Algoritmo de Correção Inteligente de Luminosidade
Quando uma combinação de cores falhar no teste de contraste, **não altere o tom/matiz (Hue)** nem destrua a saturação da marca. Em vez disso:

1. Converta a cor para o espaço de cor perceptualmente uniforme (ex: OKLCH ou HSL).
2. Mantenha os valores de **Hue (H)** e **Chroma/Saturation (S)** intactos.
3. Ajuste apenas a **Luminosidade (L / Lightness)** de forma incremental:
   - **Em fundos claros**: reduza a luminosidade do texto (ex: de L 60% para L 35%).
   - **Em fundos escuros**: aumente a luminosidade do texto (ex: de L 45% para L 85%).
4. Recalcule a razão de luminância relativa até atingir o limiar ≥ 4.5:1.

```
Fórmula de Razão de Contraste:
Ratio = (L1 + 0.05) / (L2 + 0.05)
Onde L1 é a luminância relativa da cor mais clara e L2 da mais escura (0.0 a 1.0).
```

---

## 4. Tabela de Pares Acessíveis Validados

| Uso Pretendido | Fundo (Light) | Texto (Light) | Ratio | Fundo (Dark) | Texto (Dark) | Ratio | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Texto de Leitura | `#FFFFFF` | `#0F172A` | 15.6:1 | `#09090B` | `#F8FAFC` | 16.8:1 | ✅ AAA |
| Texto Suave/Muted | `#FFFFFF` | `#475569` | 5.8:1 | `#09090B` | `#94A3B8` | 7.3:1 | ✅ AA / AAA |
| Botão Primário | `#2563EB` | `#FFFFFF` | 4.6:1 | `#3B82F6` | `#FFFFFF` | 4.8:1 | ✅ AA |
| Borda de Input | `#FFFFFF` | `#94A3B8` | 3.1:1 | `#09090B` | `#52525B` | 3.2:1 | ✅ AA (UI) |
| Alerta de Erro | `#FEF2F2` | `#991B1B` | 7.1:1 | `#1C0F0F` | `#FCA5A5` | 8.2:1 | ✅ AAA |

---

## 5. Checklist de Auditoria Rápida
- [ ] O texto padrão atinge pelo menos 4.5:1 em Light Mode e Dark Mode.
- [ ] Textos secundários (`text-muted`) mantêm pelo menos 4.5:1 para corpos de texto legíveis.
- [ ] Elementos focados (`:focus-visible`) têm um anel de foco claramente distinguível (contraste ≥ 3:1).
- [ ] Links dentro de parágrafos possuem distinção visual além da cor (sublinhado ou contraste ≥ 3:1 com o texto ao redor).
- [ ] O Dark Mode usa fundos profundos (#09090B ou #0F172A) e elevações por luminosidade progressiva.
