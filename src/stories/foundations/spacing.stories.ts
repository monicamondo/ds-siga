// src/stories/foundations/spacing.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'siga-spacing',
  standalone: true,
  imports: [NgFor],
  template: `
    <div style="font-family:Arial,sans-serif;padding:32px;color:#0A0A0A;max-width:800px">
      <h1 style="font-size:24px;font-weight:700;margin:0 0 4px">Espaçamentos</h1>
      <p style="font-size:12px;color:#757575;margin:0 0 32px">Escala baseada em múltiplos de 4px.</p>
      <div *ngFor="let s of spacings" style="display:flex;align-items:center;gap:24px;padding:16px 0;border-bottom:1px solid #F0F0F0">
        <div [style.width]="s.value" style="background:#12379C;height:24px;border-radius:2px;flex-shrink:0;min-width:4px"></div>
        <span style="font-family:monospace;font-size:11px;background:#EEF2FC;color:#12379C;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:160px">{{s.token}}</span>
        <span style="font-size:12px;color:#757575;min-width:36px">{{s.value}}</span>
        <span style="font-size:12px;color:#9E9E9E">{{s.desc}}</span>
      </div>
    </div>
  `,
})
export class SpacingComponent {
  spacings = [
    { token:'--siga-space-1',  value:'4px',  desc:'Espaço mínimo entre elementos internos' },
    { token:'--siga-space-2',  value:'8px',  desc:'Padding interno de badges e chips' },
    { token:'--siga-space-3',  value:'12px', desc:'Espaçamento entre ícone e label' },
    { token:'--siga-space-4',  value:'16px', desc:'Padding padrão de cards e células' },
    { token:'--siga-space-6',  value:'24px', desc:'Espaço entre seções próximas' },
    { token:'--siga-space-8',  value:'32px', desc:'Espaço entre seções de conteúdo' },
    { token:'--siga-space-12', value:'48px', desc:'Espaço entre blocos maiores' },
    { token:'--siga-space-16', value:'64px', desc:'Margem de layout' },
  ];
}

const meta: Meta<SpacingComponent> = {
  title: 'SIGA/Espaçamentos',
  component: SpacingComponent,
  parameters: { layout: 'fullscreen' },
};
export default meta;
export const Default: StoryObj<SpacingComponent> = {};
