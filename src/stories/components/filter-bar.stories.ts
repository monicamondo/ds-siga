// src/stories/components/filter-bar.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'siga-story-filter-bar',
  standalone: true,
  template: `
    <div style="padding:16px;background:var(--siga-bg);font-family:var(--siga-font-family)">

      <h2 style="font-size:16px;font-weight:700;margin:0 0 4px;color:var(--siga-text-primary)">Barra de Filtros</h2>
      <p style="font-size:12px;color:var(--siga-text-tertiary);margin:0 0 24px">
        Padrão de filtros para telas de monitoramento do SIGA. Inputs e selects seguem altura de 26px.
      </p>

      <!-- ── Barra completa ── -->
      <div class="sg-filters-bar">
        <div class="sg-filters-inner" style="display:flex;flex-wrap:wrap;align-items:flex-end;gap:24px">

          <div class="sg-filter-field">
            <label class="sg-filter-label">Texto livre</label>
            <input type="text" class="sg-input" placeholder="Ex: LA3100" />
          </div>

          <div class="sg-filter-field">
            <label class="sg-filter-label">Input curto</label>
            <input type="text" class="sg-input sg-input--short" placeholder="GRU" />
          </div>

          <div class="sg-filter-field">
            <label class="sg-filter-label">Select padrão</label>
            <select class="sg-select">
              <option value="">Todos</option>
              <option>Opção A</option>
              <option>Opção B</option>
            </select>
          </div>

          <div class="sg-filter-field">
            <label class="sg-filter-label">Select período</label>
            <select class="sg-select sg-select-period">
              <option value="">—</option>
              <option value="-3">−3h</option>
              <option value="-2">−2h</option>
              <option value="-1">−1h</option>
            </select>
          </div>

          <div class="sg-filter-field" style="flex-direction:row;align-items:flex-end;gap:4px">
            <button class="sg-btn sg-btn--ghost">Limpar</button>
            <button class="sg-btn sg-btn--primary">
              <i class="fa-solid fa-magnifying-glass"></i> Buscar
            </button>
          </div>

        </div>
      </div>

      <!-- ── Anatomia ── -->
      <h3 style="font-size:14px;font-weight:700;margin:40px 0 12px;color:var(--siga-text-primary)">Anatomia dos elementos</h3>
      <div style="display:flex;gap:40px;flex-wrap:wrap">

        <!-- Input -->
        <div>
          <p style="font-size:11px;font-weight:700;color:var(--siga-text-tertiary);text-transform:uppercase;margin:0 0 8px">sg-input</p>
          <div style="display:flex;flex-direction:column;gap:8px">
            <input type="text" class="sg-input" placeholder="Normal" style="width:180px" />
            <input type="text" class="sg-input" value="Com valor" style="width:180px" />
            <input type="text" class="sg-input" placeholder="Foco (clique)" style="width:180px" />
            <input type="text" class="sg-input" placeholder="Curto (--short)" style="width:64px" />
          </div>
        </div>

        <!-- Select -->
        <div>
          <p style="font-size:11px;font-weight:700;color:var(--siga-text-tertiary);text-transform:uppercase;margin:0 0 8px">sg-select</p>
          <div style="display:flex;flex-direction:column;gap:8px">
            <select class="sg-select" style="width:160px"><option>Selecione</option><option>Opção A</option></select>
            <select class="sg-select sg-select-period" style="width:80px"><option>−3h</option><option>−2h</option></select>
          </div>
        </div>

        <!-- Botões -->
        <div>
          <p style="font-size:11px;font-weight:700;color:var(--siga-text-tertiary);text-transform:uppercase;margin:0 0 8px">sg-btn</p>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-start">
            <button class="sg-btn sg-btn--primary"><i class="fa-solid fa-magnifying-glass"></i> Buscar</button>
            <button class="sg-btn sg-btn--ghost">Limpar</button>
          </div>
        </div>

      </div>

      <!-- ── Tokens ── -->
      <h3 style="font-size:14px;font-weight:700;margin:40px 0 8px;color:var(--siga-text-primary)">Tokens aplicados</h3>
      <table style="font-size:11px;font-family:var(--siga-font-family);border-collapse:collapse;width:100%">
        <thead>
          <tr style="background:var(--siga-gray-200)">
            <th style="padding:6px 10px;text-align:left">Elemento</th>
            <th style="padding:6px 10px;text-align:left">Propriedade</th>
            <th style="padding:6px 10px;text-align:left">Token</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--siga-gray-300)"><td style="padding:5px 10px">sg-filter-label</td><td style="padding:5px 10px">color</td><td style="padding:5px 10px;font-style:italic">--siga-blue-700</td></tr>
          <tr style="border-bottom:1px solid var(--siga-gray-300)"><td style="padding:5px 10px">sg-input / sg-select</td><td style="padding:5px 10px">background</td><td style="padding:5px 10px;font-style:italic">--siga-surface</td></tr>
          <tr style="border-bottom:1px solid var(--siga-gray-300)"><td style="padding:5px 10px">sg-input / sg-select</td><td style="padding:5px 10px">border</td><td style="padding:5px 10px;font-style:italic">--siga-border</td></tr>
          <tr style="border-bottom:1px solid var(--siga-gray-300)"><td style="padding:5px 10px">sg-input:focus</td><td style="padding:5px 10px">border-color</td><td style="padding:5px 10px;font-style:italic">--siga-blue-700</td></tr>
          <tr style="border-bottom:1px solid var(--siga-gray-300)"><td style="padding:5px 10px">sg-btn--primary</td><td style="padding:5px 10px">background</td><td style="padding:5px 10px;font-style:italic">--siga-blue-700</td></tr>
          <tr><td style="padding:5px 10px">sg-btn--ghost</td><td style="padding:5px 10px">border</td><td style="padding:5px 10px;font-style:italic">--siga-border</td></tr>
        </tbody>
      </table>

    </div>
  `,
  styles: [`
    :host { display: block; }
    .sg-filters-bar { background: var(--siga-gray-100); border-bottom: 1px solid var(--siga-gray-300); padding: 6px 12px; }
    .sg-filter-field { display: flex; flex-direction: column; gap: 2px; }
    .sg-filter-label { font-size: 10px; font-weight: 700; color: var(--siga-blue-700); text-transform: uppercase; letter-spacing: 0.4px; font-family: var(--siga-font-family); white-space: nowrap; }
    .sg-input, .sg-select {
      height: 26px; font-size: 11px; font-family: var(--siga-font-family); color: var(--siga-text-primary);
      background: var(--siga-surface); border: 1px solid var(--siga-border); border-radius: 2px;
      padding: 0 6px; outline: none; min-width: 120px; transition: border-color 0.15s;
      -webkit-appearance: none; appearance: none;
    }
    .sg-select {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23757575'/%3E%3C/svg%3E");
      background-repeat: no-repeat; background-position: right 6px center; padding-right: 22px;
    }
    .sg-input:focus, .sg-select:focus { border-color: var(--siga-blue-700); box-shadow: 0 0 0 2px rgba(18,55,156,0.12); }
    .sg-input--short { min-width: 60px; width: 60px; }
    .sg-select-period { min-width: 70px; width: 70px; }
    .sg-btn {
      height: 26px; padding: 0 10px; font-size: 11px; font-family: var(--siga-font-family); font-weight: 700;
      border-radius: 2px; border: 1px solid transparent; cursor: pointer;
      display: inline-flex; align-items: center; gap: 4px; transition: opacity 0.15s; white-space: nowrap;
    }
    .sg-btn:hover { opacity: 0.85; }
    .sg-btn--primary { background: var(--siga-blue-700); border-color: var(--siga-blue-700); color: var(--siga-text-white); }
    .sg-btn--ghost { background: var(--siga-surface); border-color: var(--siga-border); color: var(--siga-text-secondary); }
  `],
})
export class FilterBarStoryComponent {}

const meta: Meta<FilterBarStoryComponent> = {
  title: 'Componentes/Filter Bar',
  component: FilterBarStoryComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**sg-filters-bar** — Barra de filtros padrão do SIGA para telas de monitoramento.

### Classes disponíveis
| Classe | Uso |
|---|---|
| \`sg-input\` | Campo de texto livre |
| \`sg-input--short\` | Variante curta (ex: código de aeroporto) |
| \`sg-select\` | Select padrão com seta customizada |
| \`sg-select-period\` | Select de período (−Xh / +Xh), largura compacta |
| \`sg-btn--primary\` | Botão de ação principal (Buscar) |
| \`sg-btn--ghost\` | Botão secundário (Limpar) |
        `,
      },
    },
  },
};
export default meta;
export const Padrao: StoryObj<FilterBarStoryComponent> = { name: 'Completa — todos os tipos' };
