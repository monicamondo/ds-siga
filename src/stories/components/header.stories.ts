// src/stories/components/header.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'siga-story-header',
  standalone: true,
  template: `
    <header class="siga-header">
      <div class="header-left">
        <div class="brand">
          <span style="color:#fff;font-size:18px;font-weight:900;letter-spacing:1px">LATAM</span>
        </div>
        <div class="header-item selectable">
          <span class="value">CONECTA+</span>
          <i class="fa-solid fa-caret-down caret-icon"></i>
        </div>
        <div class="header-item selectable">
          <span class="value display-lg">GRU</span>
          <i class="fa-solid fa-caret-down caret-icon"></i>
        </div>
        <div class="header-item dual-line">
          <span class="top-line bold">SEGUNDA</span>
          <span class="bottom-line">11/04/2026</span>
        </div>
        <div class="header-item dual-line">
          <span class="top-line display-md">14:32</span>
          <span class="bottom-line">Local Time</span>
        </div>
        <div class="header-item dual-line">
          <span class="top-line display-md">17:32</span>
          <span class="bottom-line">UTC Time</span>
        </div>
      </div>
      <div class="header-right">
        <div class="header-item selectable">
          <i class="fa-solid fa-globe action-icon"></i>
          <span class="value">PT</span>
          <i class="fa-solid fa-caret-down caret-icon"></i>
        </div>
        <div class="header-item selectable user-dropdown">
          <i class="fa-solid fa-user action-icon user-icon"></i>
          <div class="dual-line user-details">
            <span class="top-line bold">Gerente de Voo</span>
            <span class="bottom-line">LATAM</span>
          </div>
          <i class="fa-solid fa-caret-down caret-icon"></i>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host { display: block; }
    .siga-header {
      width: 100%; height: 60px;
      background: linear-gradient(to bottom, var(--siga-brand-header-top) 0%, var(--siga-brand-header-bottom) 100%);
      color: var(--siga-text-white);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 24px; font-family: var(--siga-font-family); box-sizing: border-box;
    }
    .header-left, .header-right { display: flex; align-items: center; height: 100%; }
    .header-left { gap: 32px; } .header-right { gap: 24px; }
    .brand { display: flex; align-items: center; height: 100%; }
    .header-item { display: flex; align-items: center; height: 100%; color: var(--siga-text-white); cursor: default; }
    .header-item.selectable { cursor: pointer; transition: opacity 0.2s ease; }
    .header-item.selectable:hover { opacity: 0.8; }
    .value { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
    .display-md { font-size: 18px; font-weight: 700; letter-spacing: 0.5px; }
    .display-lg { font-size: 22px; font-weight: 700; letter-spacing: 1px; }
    .caret-icon { font-size: 10px; margin-left: 6px; opacity: 0.9; }
    .action-icon { font-size: 14px; margin-right: 8px; }
    .dual-line { display: flex; flex-direction: column; justify-content: center; line-height: 1.2; }
    .top-line { font-size: 12px; text-transform: uppercase; margin-bottom: 2px; }
    .top-line.display-md { font-size: 18px; margin-bottom: 0; }
    .bottom-line { font-size: 10px; color: rgba(255,255,255,0.7); }
    .bold { font-weight: 700; }
    .user-dropdown { gap: 4px; } .user-icon { margin-right: 6px; }
    .user-details { align-items: flex-start; margin-right: 4px; }
  `],
})
export class HeaderStoryComponent {}

const meta: Meta<HeaderStoryComponent> = {
  title: 'SIGA/Componentes/Header',
  component: HeaderStoryComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**siga-header** — Barra superior global da aplicação SIGA.

Contém: logo/módulo, aeroporto, data/hora local e UTC, idioma e usuário.

| Token | Valor |
|---|---|
| \`--siga-brand-header-top\` | \`#1B0088\` |
| \`--siga-brand-header-bottom\` | \`#150067\` |
| Altura | \`60px\` |
        `,
      },
    },
  },
};
export default meta;
export const Padrao: StoryObj<HeaderStoryComponent> = {
  name: 'Visual Padrão',
};
