# Website Evolt ⚡ — Portfólio & CV Digital
> **Candidato:** André Filipe Oliveira Dias  
> **Candidatura:** Automação, AI (Inteligência Artificial), Vibe Coding & Sistemas Digitais  
> **Empresa:** Evolt / ITS - Innovative Tech Solutions (Vila de Cucujães / Oliveira de Azeméis / Remoto)

---

## 🚀 Visão Geral

Aplicação web moderna, interativa e de alta performance desenvolvida especificamente para a candidatura de **André Filipe Oliveira Dias** na **Evolt**. A plataforma demonstra competências práticas em **Vibe Coding**, automação de fluxos de trabalho, gestão técnica de CMS e pensamento orientado à eficiência e ao negócio de manufatura aditiva (impressão 3D) e comércio eletrónico.

---

## 🛠️ Stack Tecnológica

- **Framework:** React 18 + TypeScript + Vite 6
- **Estilos & Theming:** Tailwind CSS v3 com paleta Dark Mode ergonómica (`#09090B` base com acentos em violeta, ciano e esmeralda)
- **Ícones:** Lucide React (`lucide-react`)
- **Acessibilidade:** Padrões WCAG 2.2 Nível AA, navegação completa por teclado (`Tab`, `Enter`, `Escape`), zero overflow horizontal (320px a 1920px+)
- **Performance:** Otimização para métricas Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms)

---

## 🌟 Funcionalidades Interativas de Destaque

1. **Simulador de Pipeline de Impressão 3D & E-commerce:**
   - Demonstração interativa de 4 nós automatizados: *Webhook de Loja Online ➔ Script Python & Validação ➔ Notificação & Registo ➔ Fila de Impressão 3D*.
   - Botão **"Disparar Simulação"** com animação sequencial de nós e visualizador de payload JSON em tempo real.
2. **Calculadora Dinâmica de Custos de Impressão 3D (Evolt Special):**
   - Estimador interativo com seleção de materiais (PLA, PETG, ABS, Resina), controlo de gramas e horas de impressão.
   - Cálculo automático de custos de filamento, energia e preço recomendado de venda com margem operacional ajustável.
3. **Bento Grid de Projetos Reais:**
   - *criacovilha.pt (CéuInquieto):* Manutenção e estabilidade técnica de portal em WordPress/CMS.
   - *Scripts Python & Linux (UBI):* Automações de apoio e tratamento de dados.
   - *Design & Assets:* Criação de mockups e tratamento visual com ferramentas de AI.
4. **Linha Temporal de Experiência & Liderança:**
   - Trajetória com foco em rigor operacional (*Pans & Company*), administração web (*CéuInquieto*), vendas e CRM (*Teleperformance*), autonomia comercial (*Anitudes*) e suporte técnico (*Power PC*).
5. **Filtro de Competências & CV Digital Completo:**
   - Filtro dinâmico por categoria e modal acessível com visualização formatada para impressão/PDF (`window.print()`).
6. **Secção de Contacto & Disponibilidade:**
   - Formulário com validação inline e destaque de disponibilidade para **início presencial na sede em Vila de Cucujães**, regime híbrido ou remoto.

---

## 💻 Como Executar Localmente

### Pré-requisitos
- Node.js (v18+)
- npm

### Instalação e Execução

```bash
# 1. Instalar as dependências do projeto
npm run install (ou npm.cmd install no Windows)

# 2. Iniciar o servidor de desenvolvimento Vite (Porta 3000)
npm run dev

# 3. Compilar para produção
npm run build

# 4. Pré-visualizar o build de produção
npm run preview
```

---

## 📁 Estrutura de Diretórios

```text
website-evolt/
├── index.html                               # HTML5 semântico com preconnect de fontes
├── package.json                             # Dependências e scripts
├── tailwind.config.js                       # Design tokens semânticos e Dark Mode
├── tsconfig.json                            # Configuração TypeScript
├── vite.config.ts                           # Configuração do Vite
├── src/
│   ├── main.tsx                             # Ponto de entrada
│   ├── App.tsx                              # Orquestração da página e modais
│   ├── index.css                            # Variáveis CSS e reset
│   ├── types/index.ts                       # Tipos de dados
│   ├── data/candidateData.ts                # Dados estruturados do André Dias
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                   # Cabeçalho com status ativo
│   │   │   └── Footer.tsx                   # Rodapé com badges de qualidade
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx              # Primeira dobra (Regra dos 5 segundos)
│   │   │   ├── AutomationShowcase.tsx       # Simulador interativo de pipeline 3D
│   │   │   ├── ProjectsBento.tsx            # Bento grid e calculadora 3D
│   │   │   ├── ExperienceTimeline.tsx       # Trajetória profissional
│   │   │   ├── InteractiveCV.tsx            # Filtro dinâmico de competências
│   │   │   └── ContactSection.tsx           # Contacto direto e disponibilidade
│   │   ├── ui/
│   │   │   ├── Button.tsx                   # Botão com 6 estados e foco WCAG
│   │   │   ├── Badge.tsx                    # Badges semânticos
│   │   │   ├── Card.tsx                     # Cards táteis acelerados por GPU
│   │   │   └── Modal.tsx                    # Modal com focus trap e Escape
│   │   └── modals/
│   │       └── CVModal.tsx                  # CV formatado para impressão/PDF
└── .agents/                                 # Suíte de 10 skills para o Antigravity
```

---

## 📄 Licença

Distribuído sob a licença MIT. Desenvolvido para a candidatura de André Filipe Oliveira Dias à Evolt / ITS.
