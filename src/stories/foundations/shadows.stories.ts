// src/stories/foundations/shadows.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'siga-shadows',
  standalone: true,
  imports: [NgFor],
  template: `
    <div style="font-family:Arial,sans-serif;padding:32px;color:#0A0A0A;max-width:900px">
      <h1 style="font-size:24px;font-weight:700;margin:0 0 4px">Sombras</h1>
      <p style="font-size:12px;color:#757575;margin:0 0 40px">
        Escala de elevação via box-shadow. Usada para indicar hierarquia visual entre camadas (cards, modais, dropdowns).
      </p>

      <div style="display:flex;flex-direction:column;gap:40px">
        <div *ngFor="let s of shadows" style="display:flex;align-items:center;gap:32px">
          <!-- Preview box -->
          <div
            [style.boxShadow]="s.value"
            style="width:120px;height:80px;border-radius:8px;background:#FFFFFF;flex-shrink:0;border:1px solid #F0F0F0"
          ></div>

          <!-- Info -->
          <div>
            <div style="font-size:14px;font-weight:700;margin-bottom:4px">{{ s.name }}</div>
            <span style="font-family:monospace;font-size:11px;background:#EEF2FC;color:#12379C;padding:2px 8px;border-radius:4px;display:inline-block;margin-bottom:8px">
              {{ s.token }}
            </span>
            <div style="font-size:11px;color:#757575;margin-bottom:4px">{{ s.desc }}</div>
            <code style="font-size:10px;color:#9E9E9E;word-break:break-all">{{ s.value }}</code>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ShadowsComponent {
  shadows = [
    {
      name: 'Nenhuma',
      token: '--siga-shadow-none',
      value: 'none',
      desc: 'Sem elevação. Elementos planos ao nível da página.',
    },
    {
      name: 'XS',
      token: '--siga-shadow-xs',
      value: '0 1px 2px rgba(0, 0, 0, 0.06)',
      desc: 'Separação sutil entre elementos adjacentes (ex: linha de tabela hover).',
    },
    {
      name: 'SM',
      token: '--siga-shadow-sm',
      value: '0 1px 4px rgba(0, 0, 0, 0.10)',
      desc: 'Cards, painéis e componentes de primeiro nível.',
    },
    {
      name: 'MD',
      token: '--siga-shadow-md',
      value: '0 4px 12px rgba(0, 0, 0, 0.12)',
      desc: 'Dropdowns, menus, tooltips e elementos flutuantes.',
    },
    {
      name: 'LG',
      token: '--siga-shadow-lg',
      value: '0 8px 24px rgba(0, 0, 0, 0.14)',
      desc: 'Drawers e sidebars abertas sobre conteúdo.',
    },
    {
      name: 'XL',
      token: '--siga-shadow-xl',
      value: '0 16px 48px rgba(0, 0, 0, 0.18)',
      desc: 'Modais e diálogos — máxima elevação do sistema.',
    },
  ];
}

const meta: Meta<ShadowsComponent> = {
  title: 'SIGA/Sombras',
  component: ShadowsComponent,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'siga' } },
};
export default meta;
export const Default: StoryObj<ShadowsComponent> = {};
