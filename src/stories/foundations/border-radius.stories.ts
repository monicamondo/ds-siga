// src/stories/foundations/border-radius.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'siga-border-radius',
  standalone: true,
  imports: [NgFor],
  template: `
    <div style="font-family:Arial,sans-serif;padding:32px;color:#0A0A0A">
      <h1 style="font-size:24px;font-weight:700;margin:0 0 4px">Border Radius</h1>
      <p style="font-size:12px;color:#757575;margin:0 0 32px">Escala de arredondamento de cantos usada nos componentes do SIGA.</p>
      <div style="display:flex;flex-wrap:wrap;gap:32px">
        <div *ngFor="let r of radii" style="display:flex;flex-direction:column;align-items:center;gap:16px">
          <div [style.borderRadius]="r.value" style="width:96px;height:96px;background:#EEF2FC;border:2px solid #12379C"></div>
          <div style="text-align:center">
            <div style="font-size:12px;font-weight:700">{{r.name}}</div>
            <span style="font-family:monospace;font-size:10px;background:#EEF2FC;color:#12379C;padding:2px 6px;border-radius:4px;display:inline-block;margin-top:4px">{{r.token}}</span>
            <div style="font-size:11px;color:#757575;margin-top:4px">{{r.value}}</div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BorderRadiusComponent {
  radii = [
    { name: 'None', value: '0px', token: '--siga-radius-none' },
    { name: 'SM', value: '4px', token: '--siga-radius-sm' },
    { name: 'MD', value: '8px', token: '--siga-radius-md' },
    { name: 'LG', value: '12px', token: '--siga-radius-lg' },
    { name: 'Pill', value: '100px', token: '--siga-radius-pill' },
  ];
}

const meta: Meta<BorderRadiusComponent> = {
  title: 'SIGA/Bordas',
  component: BorderRadiusComponent,
  parameters: { layout: 'fullscreen' },
};
export default meta;
export const Default: StoryObj<BorderRadiusComponent> = {};
