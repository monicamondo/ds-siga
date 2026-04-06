# ds-siga — Design System SIGA

> Repositório oficial de tokens e componentes do SIGA (Sistema Integrado de Gestão de Aeroportos) · LATAM Airlines / JExperts

---

## Para agentes de IA — leia antes de qualquer ação

Este documento é o guia de trabalho para agentes de IA que atuam na componentização do Design System do SIGA. Siga rigorosamente as instruções abaixo. Qualquer desvio compromete a consistência do produto.

---

## O que é este repositório

Este é o **Design System oficial do SIGA** — um produto web interno de operações aeroportuárias da LATAM Airlines.

O repositório contém:
- **Tokens de design** — cores, tipografia, espaçamentos, sombras, bordas
- **Componentes Angular** — baseados no código fonte do sistema legado, reconstruídos com os novos tokens
- **Storybook** — documentação visual dos componentes, acessível pelo time de desenvolvimento

O Storybook publicado é a fonte de verdade para o time de dev. Quando um componente é aprovado aqui, o dev o copia diretamente para o sistema em produção.

---

## Stack obrigatória — sem exceções

```
Angular 21 (standalone components)
Bootstrap 5.3.3 (infraestrutura silenciosa — não documentada, só carregada)
SCSS com tokens CSS custom properties
Font Awesome 6 Pro (kit 61e3ea41a6)
```

**É proibido usar:**
- Qualquer outro framework de UI (Material, PrimeNG, NgZorro, Tailwind etc.)
- Valores de cor, tipografia, espaçamento ou borda hardcoded
- Componentes genéricos sem referência no sistema legado
- Sintaxe Angular nova (`@if`, `@for`) — usar sempre `*ngIf`, `*ngFor` para compatibilidade com o legado em Angular 19

---

## Como um componente é criado

O fluxo de trabalho é sempre o mesmo:

```
1. Código fonte do SIGA (referência de estrutura e comportamento)
        ↓
2. Figma DS---Siga-BS (referência visual — resultado esperado)
        ↓
3. Tokens do DS (src/lib/tokens/_variables.scss — determina cores, tipografia, espaçamentos)
        ↓
4. Componente Angular criado em src/lib/components/[nome]/
        ↓
5. Story criada em src/stories/[nome].stories.ts
        ↓
6. Validação visual no Storybook
        ↓
7. Aprovação → componente publicado no Storybook
```

---

## Fontes de referência

### Código fonte do sistema legado
- Localização local: `C:\Dev\Jexperts\Siga\siga-front-end\src\app\`
- Usar para entender a estrutura HTML, classes usadas e comportamento do componente
- **Não copiar estilos do legado** — apenas a estrutura e a lógica

### Figma — DS---Siga-BS
- URL: `https://www.figma.com/design/5YltyH5xb7200OaxsppoPe/DS---Siga-BS`
- Usar para entender o resultado visual esperado do componente
- Comparar o componente gerado com o frame do Figma antes de publicar

### Tokens CSS
- Arquivo: `src/lib/tokens/_variables.scss`
- **Toda propriedade visual deve usar um token** — nunca um valor literal

---

## Tokens disponíveis

### Cores — Brand
```scss
--siga-brand-primary:   #12379C   /* azul principal */
--siga-brand-destaque:  #56C0D8   /* cyan de destaque */
```

### Cores — Semânticas
```scss
--siga-info:     #56C0D8
--siga-success:  #198754
--siga-danger:   #DC3545
--siga-warning:  #FFC107
--siga-light:    #F9F9F9
--siga-border:   #C2C2C2
```

### Cores — Texto
```scss
--siga-text-primary:  #0A0A0A
--siga-text-white:    #FFFFFF
--siga-text-black:    #000000
```

### Cores — Superfícies
```scss
--siga-bg:       #F9F9F9   /* fundo de página */
--siga-surface:  #FFFFFF   /* cards, modais, tabelas */
--siga-divider:  #E0E0E0   /* linhas separadoras */
```

### Escalas de cor (gray, blue, cyan, green, red, yellow)
```scss
--siga-[escala]-100 até --siga-[escala]-900
/* Exemplo: --siga-blue-700, --siga-gray-300 */
```

### Tipografia
```scss
--siga-font-family:      Arial, Helvetica, "Lucida Sans", FreeSans, sans-serif
--siga-font-size-xs:     11px
--siga-font-size-sm:     12px   /* tamanho padrão do sistema */
--siga-font-size-md:     14px
--siga-font-size-base:   16px
--siga-font-size-lg:     20px
--siga-font-size-xl:     24px
--siga-font-size-h2:     32px
--siga-font-size-h1:     40px
--siga-font-weight-regular: 400
--siga-font-weight-bold:    700
```

### Espaçamentos
```scss
--siga-space-1:   4px
--siga-space-2:   8px
--siga-space-3:   12px
--siga-space-4:   16px
--siga-space-6:   24px
--siga-space-8:   32px
--siga-space-12:  48px
--siga-space-16:  64px
```

### Cantos arredondados
```scss
--siga-radius-none:  0px
--siga-radius-sm:    2px
--siga-radius-md:    4px
--siga-radius-lg:    8px
--siga-radius-pill:  100px
```

### Sombras
```scss
--siga-shadow-sm:  0 1px 2px rgba(0,0,0,0.08)
--siga-shadow-md:  0 2px 8px rgba(0,0,0,0.12)
--siga-shadow-lg:  0 4px 16px rgba(0,0,0,0.16)
```

---

## Estrutura do repositório

```
ds-siga/
├── .storybook/
│   ├── main.ts              # configuração do Storybook
│   ├── preview.ts           # carrega Bootstrap + Font Awesome (silencioso)
│   ├── theme.ts             # tema visual SIGA
│   ├── manager.ts           # aplica tema na sidebar
│   └── preview-head.html    # carrega kit FA customizado (fa-kit)
│
├── src/
│   ├── lib/
│   │   ├── tokens/
│   │   │   └── _variables.scss   # TODOS os tokens CSS do sistema
│   │   └── components/
│   │       └── [nome-componente]/
│   │           ├── [nome].component.ts
│   │           ├── [nome].component.html
│   │           └── [nome].component.scss
│   │
│   └── stories/
│       ├── foundations/          # documentação dos tokens (não mexer)
│       │   ├── colors.stories.ts
│       │   ├── typography.stories.ts
│       │   ├── spacing.stories.ts
│       │   ├── border-radius.stories.ts
│       │   └── icons.stories.ts
│       └── [nome].stories.ts     # story de cada componente
│
└── src/styles.scss               # importa Bootstrap + referencia tokens
```

---

## Como criar um componente — instrução detalhada

### 1. Criar os arquivos

```
src/lib/components/[nome-do-componente]/
├── [nome].component.ts
├── [nome].component.html
└── [nome].component.scss
```

### 2. Regras do `.component.ts`

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // se usar routerLink

@Component({
  selector: 'siga-[nome]',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './[nome].component.html',
  styleUrl: './[nome].component.scss',
})
export class [Nome]Component {
  // propriedades e métodos
}
```

### 3. Regras do `.component.html`

- Usar estrutura HTML baseada no código fonte do legado
- Manter classes Bootstrap que já existem no legado (`navbar`, `nav-item`, `btn` etc.)
- Usar `*ngIf` e `*ngFor` — nunca `@if` ou `@for`
- Ícones: `fa-solid` para menus/navbar, `fa-regular` para conteúdo de páginas

### 4. Regras do `.component.scss`

```scss
// CORRETO — usar token
color: var(--siga-text-primary);
background: var(--siga-brand-primary);
padding: var(--siga-space-4);
border-radius: var(--siga-radius-md);
box-shadow: var(--siga-shadow-sm);

// PROIBIDO — valor hardcoded
color: #0A0A0A;
background: #12379C;
padding: 16px;
```

### 5. Criar a Story

```typescript
// src/stories/[nome].stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { [Nome]Component } from '../lib/components/[nome]/[nome].component';

const meta: Meta<[Nome]Component> = {
  title: 'SIGA/[Categoria]/[Nome do Componente]',
  component: [Nome]Component,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  parameters: {
    layout: 'fullscreen', // ou 'padded' para componentes menores
  },
};

export default meta;
export const Default: StoryObj<[Nome]Component> = {};
```

**Categorias de título válidas:**
`SIGA/Navegação/`, `SIGA/Botões/`, `SIGA/Formulários/`, `SIGA/Tabelas/`, `SIGA/Cards/`, `SIGA/Badges/`, `SIGA/Modais/`, `SIGA/Alertas/`

---

## Checklist antes de publicar um componente

```
[ ] Estrutura HTML baseada no código fonte do legado
[ ] Resultado visual comparado com o frame do Figma
[ ] Nenhum valor hardcoded — apenas tokens CSS
[ ] Sintaxe Angular antiga (*ngIf, *ngFor)
[ ] Componente standalone com imports corretos
[ ] Story criada com título no padrão SIGA/[Categoria]/[Nome]
[ ] Storybook renderiza sem erros
[ ] Ícones: solid nos menus, regular no conteúdo
[ ] Bootstrap carregado como infraestrutura (não documentado como componente)
```

---

## Ícones — Font Awesome

| Contexto | Estilo | Classe |
|---|---|---|
| Menus, navbar, botões de ação | Solid (preenchido) | `fa-solid fa-[nome]` |
| Conteúdo de páginas, cards, tabelas | Regular (stroke) | `fa-regular fa-[nome]` |
| Ícones customizados do produto | Kit SIGA | `fa-kit fa-[nome]` |

Kit customizado SIGA: `fa-aircraft`, `fa-gate`, `fa-timezone`, `fa-park-position-siga`

---

## Quando um componente é aprovado

1. O componente já deve estar em `src/lib/components/[nome]/`
2. A story já deve estar em `src/stories/[nome].stories.ts`
3. Rodar `ng run ds-siga:storybook` e confirmar que renderiza corretamente
4. Fazer commit e push para o repositório
5. Rodar `npm run deploy-storybook` para publicar no GitHub Pages
6. Atualizar o inventário de componentes em `prototypes-siga/.context/component-inventory.md`

---

*Design System SIGA · Núcleo de Design LATAM Airlines*
*Dúvidas sobre tokens ou componentes: consultar sempre `src/lib/tokens/_variables.scss` como fonte de verdade*

-----------------------
só até aqui - agora são infos infos para dev rodar o projeto 


# DsSiga

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


