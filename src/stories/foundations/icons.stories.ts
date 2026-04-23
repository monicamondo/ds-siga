// src/stories/foundations/icons.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'siga-icons',
  standalone: true,
  imports: [NgFor],
  styles: [`
    :host { display: block; }
    .page { font-family: Arial, sans-serif; padding: 32px; color: #0A0A0A; max-width: 1000px; }
    h1 { font-size: 24px; font-weight: 700; margin: 0 0 4px; }
    h2 { font-size: 16px; font-weight: 700; margin: 0 0 4px; }
    .sub { font-size: 12px; color: #757575; margin: 0 0 24px; }
    .divider { border: none; border-top: 1px solid #E0E0E0; margin: 40px 0; }
    .link-btn { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px;
      background: #12379C; color: #fff; border-radius: 4px; font-size: 12px;
      font-weight: 700; text-decoration: none; }

    /* tamanhos */
    .sizes { display: flex; gap: 12px; flex-wrap: wrap; }
    .size-card { display: flex; flex-direction: column; align-items: center; gap: 10px;
      border: 1px solid #E0E0E0; border-radius: 4px; padding: 16px 12px; min-width: 72px; }
    .size-label { text-align: center; }
    .size-px { font-size: 12px; font-weight: 700; }
    .size-use { font-size: 10px; color: #757575; margin-top: 2px; }

    /* colunas solid x regular */
    .style-cols { display: flex; gap: 24px; }
    .style-col { flex: 1; border: 1px solid #E0E0E0; border-radius: 8px; padding: 20px; }
    .style-col-title { font-size: 13px; font-weight: 700; margin-bottom: 4px; }
    .style-col-tag { display: inline-block; font-family: monospace; font-size: 10px;
      background: #EEF2FC; color: #12379C; padding: 2px 8px; border-radius: 4px; margin-bottom: 16px; }
    .style-col-desc { font-size: 11px; color: #757575; line-height: 1.5; margin-top: 12px; }

    /* grid de ícones */
    .icon-grid { display: flex; flex-wrap: wrap; gap: 8px; }
    .icon-card { display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 8px; width: 80px; padding: 14px 6px; border: 1px solid #E0E0E0; border-radius: 4px; }
    .icon-card i { font-size: 16px; color: #0A0A0A; display: block;
      width: 16px; height: 16px; text-align: center; line-height: 1; }
    .icon-label { font-size: 10px; color: #757575; text-align: center;
      word-break: break-word; line-height: 1.3; }

    /* kit customizado */
    .kit-grid { display: flex; flex-wrap: wrap; gap: 8px; }
    .kit-card { display: flex; flex-direction: column; align-items: center; gap: 8px;
      width: 96px; padding: 14px 8px; border: 1px solid #B4D2F9;
      border-radius: 4px; background: #EEF2FC; }
    .kit-card i { font-size: 16px; color: #12379C; display: block;
      width: 16px; height: 16px; text-align: center; line-height: 1; }
    .kit-label { font-size: 10px; color: #0E2A7A; text-align: center; line-height: 1.3; }
  `],
  template: `
    <div class="page">

      <h1>Ícones</h1>
      <p class="sub">Font Awesome 6 Pro · Kit SIGA (61e3ea41a6) · Regras de uso no sistema</p>

      <!-- TAMANHOS -->
      <h2>Tamanhos de referência</h2>
      <p class="sub">Tamanhos recomendados por contexto de uso no sistema.</p>
      <div class="sizes">
        <div class="size-card" *ngFor="let s of sizes">
          <i class="fa-solid fa-gear" [style.fontSize]="s.px" style="color:#0A0A0A;display:block;line-height:1"></i>
          <div class="size-label">
            <div class="size-px">{{s.px}}</div>
            <div class="size-use">{{s.use}}</div>
          </div>
        </div>
      </div>

      <hr class="divider">

      <!-- SOLID x REGULAR -->
      <h2>Estilos de uso</h2>
      <p class="sub">O SIGA usa exclusivamente o estilo <strong>Classic</strong> em dois pesos distintos por contexto.</p>

      <div class="style-cols">
        <div class="style-col">
          <div class="style-col-title">Solid — menus e navbar</div>
          <span class="style-col-tag">fa-solid fa-[nome]</span>
          <div class="icon-grid">
            <div class="icon-card" *ngFor="let i of icons">
              <i [class]="'fa-solid fa-' + i.cls"></i>
              <span class="icon-label">{{i.name}}</span>
            </div>
          </div>
          <p class="style-col-desc">Preenchido. Usado em itens de navegação, menus e barras de ação. Maior peso visual, ideal para fundos escuros.</p>
        </div>

        <div class="style-col">
          <div class="style-col-title">Regular — conteúdo das páginas</div>
          <span class="style-col-tag">fa-regular fa-[nome]</span>
          <div class="icon-grid">
            <div class="icon-card" *ngFor="let i of icons">
              <i [class]="'fa-regular fa-' + i.cls"></i>
              <span class="icon-label">{{i.name}}</span>
            </div>
          </div>
          <p class="style-col-desc">Traçado (stroke). Usado dentro do conteúdo de páginas, cards, tabelas e formulários. Peso visual mais leve para contextos claros.</p>
        </div>
      </div>

      <div style="margin-top:20px">
        <a href="https://fontawesome.com/icons" target="_blank" class="link-btn">
          <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:11px"></i>
          Explorar catálogo completo no Font Awesome
        </a>
      </div>

      <hr class="divider">

      <!--
      ─────────────────────────────────────────────────────────
      ÍCONES CUSTOMIZADOS DO SIGA (fa-kit)
      Requerem o kit 61e3ea41a6 carregado via preview-head.html
      ─────────────────────────────────────────────────────────
      -->

      <h2>Kit customizado SIGA</h2>
      <p class="sub">Ícones exclusivos do produto — presentes apenas no kit da conta LATAM/JExperts.</p>
      <div class="kit-grid">
        <div class="kit-card">
          <i class="fa-kit fa-aircraft"></i>
          <span class="kit-label">fa-kit<br>fa-aircraft</span>
        </div>
        <div class="kit-card">
          <i class="fa-kit fa-gate"></i>
          <span class="kit-label">fa-kit<br>fa-gate</span>
        </div>
        <div class="kit-card">
          <i class="fa-kit fa-timezone"></i>
          <span class="kit-label">fa-kit<br>fa-timezone</span>
        </div>
        <div class="kit-card">
          <i class="fa-kit fa-park-position-siga"></i>
          <span class="kit-label">fa-kit<br>fa-park-position-siga</span>
        </div>
      </div>

    </div>
  `,
})
export class IconsComponent {

  // Mesmos ícones exibidos nos dois estilos lado a lado
  icons = [
    { cls: 'bullhorn', name: 'bullhorn' },
    { cls: 'users', name: 'users' },
    { cls: 'gear', name: 'gear' },
    { cls: 'plane-lock', name: 'plane-lock' },
    { cls: 'gauge-high', name: 'gauge-high' },
    { cls: 'hourglass-clock', name: 'hourglass-clock' },
    { cls: 'tower-control', name: 'tower-control' },
    { cls: 'clock-five', name: 'clock-five' },
    { cls: 'handshake', name: 'handshake' },
    { cls: 'plane-slash', name: 'plane-slash' },
    { cls: 'right-to-bracket', name: 'right-to-bracket' },
    { cls: 'sitemap', name: 'sitemap' },
  ];

  sizes = [
    { px: '12px', use: 'Badges, chips' },
    { px: '14px', use: 'Inline, tabelas' },
    { px: '16px', use: 'Navbar padrão' },
    { px: '20px', use: 'Botões, cards' },
    { px: '24px', use: 'Destaque' },
  ];
}

const meta: Meta<IconsComponent> = {
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
  title: 'Foundations/Ícones',
  component: IconsComponent,
  parameters: { layout: 'fullscreen' },
};
export default meta;
export const Default: StoryObj<IconsComponent> = {};