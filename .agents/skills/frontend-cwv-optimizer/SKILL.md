---
name: frontend-cwv-optimizer
description: Atua como Engenheiro de Performance Web (Lighthouse / Core Web Vitals). Define width/height ou aspect-ratio em todas as mídias para eliminar CLS, aplica loading="lazy" e decoding="async" abaixo da dobra, fetchpriority="high" na imagem LCP e evita JS desnecessário. Use esta skill para auditar e otimizar velocidade de carregamento, pontuações do Google PageSpeed/Lighthouse e métricas Core Web Vitals (LCP, CLS, INP).
---

# Frontend CWV Optimizer — Engenheiro de Core Web Vitals & Lighthouse

Esta skill atua como uma autoridade técnica em engenharia de performance web frontend. O seu propósito é alcançar pontuações máximas (95–100) no Google Lighthouse e garantir conformidade com as três métricas do Core Web Vitals (LCP, CLS, INP) exigidas pelo algoritmo de ranqueamento do Google.

## Quando Ativar Esta Skill
- Auditoria de velocidade de páginas web, e-commerce e portais de notícias.
- Otimização do tempo de carregamento inicial e redução do First Contentful Paint (FCP).
- Eliminação de saltos visuais na página (Cumulative Layout Shift - CLS).
- Aceleração da renderização do elemento principal (Largest Contentful Paint - LCP).
- Minimização do bloqueio da thread principal (Interaction to Next Paint - INP).

---

## 1. Eliminação Definitiva do CLS (Cumulative Layout Shift < 0.1)
Saltos de layout ocorrem quando o navegador aloca espaço na tela apenas após o download do recurso.

### Regra Mandatória para Todas as Mídias
Toda tag `<img>`, `<video>`, `<iframe>` e canvas deve obrigatoriamente possuir atributos explícitos de dimensão ou a propriedade CSS `aspect-ratio`:

```html
<!-- Atributos width e height explícitos (permite ao navegador calcular o ratio antes do download) -->
<img
  src="/images/hero-banner.webp"
  alt="Demonstração da plataforma em desktop"
  width="1200"
  height="630"
  class="w-full h-auto"
/>
```

Ou em CSS Moderno:
```css
.card-thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

### Reserva de Espaço para Conteúdo Dinâmico
- Reserve altura mínima (`min-height`) para banners promocionais, slots de anúncios e notificações dinâmicas para evitar deslocamento de texto durante a injeção do conteúdo.

---

## 2. Otimização do LCP (Largest Contentful Paint < 2.5s)
O LCP mede o tempo em que o maior bloco de conteúdo visível na tela (geralmente a imagem hero ou o título h1) é desenhado.

### Regras para o Elemento LCP:
1. **`fetchpriority="high"`**: Prioriza o download do asset hero na fila de requisições de rede:
   ```html
   <img
     src="/images/hero.webp"
     alt="Visão geral do software"
     width="800"
     height="600"
     fetchpriority="high"
     decoding="async"
   />
   ```
2. **Preload no `<head>` para Imagens Críticas**:
   ```html
   <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" fetchpriority="high">
   ```
3. **❌ NUNCA aplique `loading="lazy"` na imagem LCP**: O lazy loading atrasa propositalmente a requisição, destruindo o índice LCP.
4. **Formatos de Nova Geração**: Sirva mídias exclusivamente em formatos otimizados (`AVIF` ou `WebP`), reduzindo em até 50% o tamanho em relação a PNG/JPEG.

---

## 3. Estratégia de Recursos Abaixo da Dobra (Below the Fold)
Para todos os elementos situados abaixo da linha de visualização inicial:

```html
<img
  src="/images/case-study.webp"
  alt="Gráfico de crescimento"
  width="600"
  height="400"
  loading="lazy"
  decoding="async"
/>
```
- `loading="lazy"`: Adia o download até que a imagem esteja próxima da viewport.
- `decoding="async"`: Decodifica a imagem fora da thread principal de renderização.
- `content-visibility: auto`: Em secções longas de páginas densas, adia a renderização de blocos fora da tela.

---

## 4. Otimização do INP (Interaction to Next Paint < 200ms) & Eliminação de JS Desnecessário
Bloqueios da thread principal causam lentidão na resposta a cliques e toques:

- **Eliminar Scripts Bloqueadores**: Utilize `defer` ou `type="module"` para scripts não críticos:
  ```html
  <script src="/scripts/analytics.js" defer></script>
  ```
- **Code Splitting**: Carregue bibliotecas pesadas (gráficos, calendários, editores rich-text) via `React.lazy()` / importações dinâmicas apenas quando requisitadas.
- **Evitar Hidratação Maciça**: Prefira Server Components (Next.js App Router / Astro) para entregar HTML estático leve com hidratação seletiva (Islands Architecture).

---

## 5. Checklist de Verificação Core Web Vitals
- [ ] Todas as tags `<img>`, `<video>` e `<iframe>` possuem `width`/`height` ou `aspect-ratio`.
- [ ] A imagem do Hero (LCP) está marcada com `fetchpriority="high"` e sem `loading="lazy"`.
- [ ] Todas as imagens abaixo da dobra contam com `loading="lazy"` e `decoding="async"`.
- [ ] Não há scripts síncronos bloqueadores de renderização no `<head>`.
- [ ] O valor de CLS esperado situa-se abaixo de 0.05 e LCP abaixo de 2.0s em redes móveis 4G.
