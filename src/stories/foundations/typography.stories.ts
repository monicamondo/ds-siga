// src/stories/foundations/typography.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'siga-typography',
  standalone: true,
  imports: [NgFor],
  template: `
    <div style="font-family:Arial,sans-serif;padding:32px;color:#0A0A0A;max-width:900px">
      <h1 style="font-size:24px;font-weight:700;margin:0 0 4px">Tipografia</h1>
      <p style="font-size:12px;color:#757575;margin:0 0 40px">Família e escala tipográfica do SIGA.</p>

      <h2 style="font-size:16px;font-weight:700;margin:0 0 16px">Família</h2>
      <div style="background:#F9F9F9;border:1px solid #E0E0E0;border-radius:8px;padding:24px 32px;margin-bottom:40px">
        <div style="font-size:11px;color:#757575;margin-bottom:8px">--siga-font-family</div>
        <div style="font-size:32px;font-weight:400">Arial, Helvetica, Lucida Sans, FreeSans</div>
        <div style="font-size:14px;color:#9E9E9E;margin-top:8px">The quick brown fox jumps over the lazy dog · 0123456789</div>
      </div>

      <h2 style="font-size:16px;font-weight:700;margin:0 0 16px">Escala de tamanhos</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:40px">
        <thead>
          <tr style="border-bottom:2px solid #E0E0E0">
            <th style="text-align:left;padding:8px 16px;font-size:11px;color:#757575;font-weight:700">Exemplo</th>
            <th style="text-align:left;padding:8px 16px;font-size:11px;color:#757575;font-weight:700">Token</th>
            <th style="text-align:left;padding:8px 16px;font-size:11px;color:#757575;font-weight:700">Valor</th>
            <th style="text-align:left;padding:8px 16px;font-size:11px;color:#757575;font-weight:700">Uso</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let t of scale" style="border-bottom:1px solid #F0F0F0">
            <td style="padding:16px"><span [style.fontSize]="t.size" [style.fontWeight]="t.weight" style="font-family:Arial">{{t.label}}</span></td>
            <td style="padding:16px"><span style="font-family:monospace;font-size:11px;background:#EEF2FC;color:#12379C;padding:2px 8px;border-radius:4px">{{t.token}}</span></td>
            <td style="padding:16px;font-size:11px;color:#757575">{{t.size}} / {{t.weight}}</td>
            <td style="padding:16px;font-size:11px;color:#9E9E9E">{{t.use}}</td>
          </tr>
        </tbody>
      </table>

      <h2 style="font-size:16px;font-weight:700;margin:0 0 16px">Pesos</h2>
      <div style="display:flex;gap:40px">
        <div>
          <div style="font-family:Arial;font-size:32px;font-weight:400;color:#0A0A0A">Regular</div>
          <div style="font-size:11px;color:#757575;margin-top:4px">--siga-font-weight-regular · 400</div>
        </div>
        <div>
          <div style="font-family:Arial;font-size:32px;font-weight:700;color:#0A0A0A">Bold</div>
          <div style="font-size:11px;color:#757575;margin-top:4px">--siga-font-weight-bold · 700</div>
        </div>
      </div>
    </div>
  `,
})
export class TypographyComponent {
  scale = [
    { label: 'Título H1', size: '48px', weight: '400', token: '--siga-font-size-h1', use: 'Títulos de página' },
    { label: 'Título H2', size: '40px', weight: '400', token: '--siga-font-size-h2', use: 'Títulos de seção' },
    { label: 'Subtítulo', size: '32px', weight: '400', token: '--siga-font-size-xl', use: 'Destaques' },
    { label: 'Lead text', size: '24px', weight: '400', token: '--siga-font-size-lg', use: 'Textos de apoio' },
    { label: 'Texto base', size: '16px', weight: '400', token: '--siga-font-size-base', use: 'Corpo de texto' },
    { label: 'Texto médio', size: '14px', weight: '400', token: '--siga-font-size-md', use: 'Labels, inputs' },
    { label: 'Texto padrão', size: '12px', weight: '400', token: '--siga-font-size-sm', use: 'Texto padrão do sistema' },
    { label: 'Texto mínimo', size: '10px', weight: '400', token: '--siga-font-size-xs', use: 'Badges, legendas' },
  ];
}

const meta: Meta<TypographyComponent> = {
  title: 'SIGA/Foundations/Tipografia',
  component: TypographyComponent,
  parameters: { layout: 'fullscreen' },
};
export default meta;
export const Default: StoryObj<TypographyComponent> = {};
