// src/stories/components/status-bar.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

export type HitoStatus = 'ok' | 'aguardando' | 'ignorado' | 'pax_nao_encontrado' | 'cancelado';

export interface Hito {
  id: number;
  nome: string;
  status: HitoStatus;
  horario: string | null;
}

export type ProgressStatus = 'em_percurso' | 'aguardando' | 'concluido' | 'pax_nao_encontrado';

const HITO_LABEL: Record<HitoStatus, string> = {
  ok:                 'Concluído',
  aguardando:         'Aguardando',
  ignorado:           'Ignorado',
  pax_nao_encontrado: 'PAX não encontrado',
  cancelado:          'Cancelado',
};

@Component({
  selector: 'siga-story-status-bar',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  template: `
    <div style="padding:32px;background:var(--siga-bg);font-family:var(--siga-font-family)">

      <h1 style="font-size:24px;font-weight:700;margin:0 0 4px;color:var(--siga-text-primary)">Status Bar — Hitos de Acompanhamento</h1>
      <p style="font-size:12px;color:var(--siga-text-tertiary);margin:0 0 40px">
        Faixa de hitos (bolinhas numeradas) + barra de progresso. Cada bolinha tem tooltip com nome, status e horário.
      </p>

      <!-- ── Legenda ── -->
      <h2 style="font-size:14px;font-weight:700;margin:0 0 12px;color:var(--siga-text-primary)">Legenda de status</h2>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px">
        <div *ngFor="let s of statusList" style="display:flex;align-items:center;gap:8px">
          <span class="sg-hito-dot" [class]="'sg-hito-dot sg-hito-dot--' + s.status">1</span>
          <span style="font-size:12px;color:var(--siga-text-secondary)">{{ s.label }}</span>
        </div>
      </div>

      <!-- ── Exemplos de strip ── -->
      <h2 style="font-size:14px;font-weight:700;margin:0 0 16px;color:var(--siga-text-primary)">Exemplos de faixas</h2>

      <div *ngFor="let ex of examples" style="margin-bottom:32px;background:var(--siga-surface);border:1px solid var(--siga-gray-300);border-radius:4px;padding:16px">
        <div style="font-size:11px;font-weight:700;color:var(--siga-text-tertiary);text-transform:uppercase;margin-bottom:12px">
          {{ ex.label }}
        </div>

        <!-- Hitos strip -->
        <div class="sg-hitos-strip" style="margin-bottom:16px">
          <ng-container *ngFor="let h of ex.hitos; let i = index">
            <span *ngIf="i > 0" class="sg-hito-connector" [class.sg-hito-connector--done]="ex.hitos[i-1].status === 'ok'"></span>
            <span
              class="sg-hito-dot"
              [class]="'sg-hito-dot sg-hito-dot--' + h.status + (isCurrent(h, ex.hitos) ? ' sg-hito-dot--current' : '')"
              [title]="tooltipText(h)"
            >{{ h.id }}</span>
          </ng-container>
        </div>

        <!-- Progress bar -->
        <div class="sg-progress-col">
          <div class="sg-progress-label">
            <span>{{ progressLabel(ex.hitos) }}</span>
            <strong>{{ progressPct(ex.hitos) }}%</strong>
          </div>
          <div class="sg-progress-bar-wrap">
            <div class="sg-progress-bar-fill"
              [class]="'sg-progress-bar-fill--' + progressStatus(ex.hitos)"
              [style.width.%]="progressPct(ex.hitos)">
            </div>
          </div>
          <span class="sg-status-label" [class]="'sg-status-label sg-status-label--' + progressStatus(ex.hitos)">
            {{ doneCount(ex.hitos) }}/{{ ex.hitos.length }} hitos
          </span>
        </div>
      </div>

      <!-- ── Tooltip anatomy ── -->
      <h2 style="font-size:14px;font-weight:700;margin:32px 0 12px;color:var(--siga-text-primary)">Anatomia do tooltip</h2>
      <div style="display:inline-block;background:#212121;color:#fff;border-radius:6px;padding:8px 12px;font-size:11px;line-height:1.6">
        <div class="hito-nome" style="font-weight:700;font-size:12px">Gate de Embarque</div>
        <div class="hito-status" style="opacity:0.85">Concluído</div>
        <div class="hito-time" style="opacity:0.75;margin-top:2px">10:35</div>
      </div>

    </div>
  `,
  styles: [`
    :host { display: block; }
    .sg-hitos-strip { display:flex; align-items:center; gap:5px; flex-wrap:nowrap; min-height:32px; }
    .sg-hito-dot {
      width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center;
      font-size:10px; font-weight:700; font-family:var(--siga-font-family); cursor:default; flex-shrink:0;
      border:2px solid transparent; transition:transform 0.1s,box-shadow 0.1s; text-decoration:none;
    }
    .sg-hito-dot:hover { transform:scale(1.18); z-index:10; box-shadow:0 2px 8px rgba(0,0,0,0.18); }
    .sg-hito-dot--ok                 { background:var(--siga-green-500); border-color:var(--siga-green-500); color:var(--siga-text-white); }
    .sg-hito-dot--aguardando         { background:var(--siga-gray-200);  border-color:var(--siga-gray-300);  color:var(--siga-gray-600); }
    .sg-hito-dot--ignorado           { background:var(--siga-gray-300);  border-color:var(--siga-gray-400);  color:var(--siga-gray-500); opacity:0.8; }
    .sg-hito-dot--pax_nao_encontrado { background:var(--siga-red-500);   border-color:var(--siga-red-500);   color:var(--siga-text-white); }
    .sg-hito-dot--cancelado          { background:var(--siga-gray-400);  border-color:var(--siga-gray-500);  color:var(--siga-gray-700); opacity:0.7; }
    .sg-hito-dot--current { animation:sg-hito-pulse 2s ease-in-out infinite; }
    @keyframes sg-hito-pulse {
      0%,100% { box-shadow:0 0 0 0 rgba(var(--siga-blue-700-rgb),0.4); }
      50%      { box-shadow:0 0 0 4px rgba(var(--siga-blue-700-rgb),0.0); }
    }
    .sg-hito-connector { flex:0 0 8px; height:2px; background:var(--siga-gray-300); border-radius:1px; }
    .sg-hito-connector--done { background:var(--siga-green-500); }
    .sg-progress-col { min-width:200px; font-family:var(--siga-font-family); }
    .sg-progress-label { font-size:10px; color:var(--siga-text-tertiary); text-transform:uppercase; font-weight:700; letter-spacing:0.4px; display:flex; justify-content:space-between; margin-bottom:4px; }
    .sg-progress-label strong { color:var(--siga-text-primary); font-size:12px; }
    .sg-progress-bar-wrap { height:5px; background:var(--siga-gray-200); border-radius:var(--siga-radius-pill); overflow:hidden; margin-bottom:5px; max-width:400px; }
    .sg-progress-bar-fill { height:100%; border-radius:var(--siga-radius-pill); transition:width 0.6s ease; }
    .sg-progress-bar-fill--em_percurso       { background:var(--siga-blue-700); }
    .sg-progress-bar-fill--concluido         { background:var(--siga-green-500); }
    .sg-progress-bar-fill--aguardando        { background:var(--siga-gray-400); }
    .sg-progress-bar-fill--pax_nao_encontrado{ background:var(--siga-red-500); }
    .sg-status-label { font-size:10px; font-weight:700; display:inline-flex; align-items:center; gap:4px; }
    .sg-status-label--aguardando        { color:var(--siga-gray-600); }
    .sg-status-label--em_percurso       { color:var(--siga-blue-700); }
    .sg-status-label--concluido         { color:var(--siga-green-500); }
    .sg-status-label--pax_nao_encontrado{ color:var(--siga-red-500); }
  `],
})
export class StatusBarStoryComponent {
  statusList = [
    { status: 'ok'                 as HitoStatus, label: 'Concluído' },
    { status: 'aguardando'         as HitoStatus, label: 'Aguardando' },
    { status: 'ignorado'           as HitoStatus, label: 'Ignorado' },
    { status: 'pax_nao_encontrado' as HitoStatus, label: 'PAX não encontrado' },
    { status: 'cancelado'          as HitoStatus, label: 'Cancelado' },
  ];

  examples = [
    {
      label: 'Em percurso — 4 hitos',
      hitos: [
        { id:1, nome:'Desembarque',  status:'ok'         as HitoStatus, horario:'09:33' },
        { id:2, nome:'Em percurso',  status:'ok'         as HitoStatus, horario:'09:41' },
        { id:3, nome:'Gate',         status:'aguardando' as HitoStatus, horario: null   },
        { id:4, nome:'Embarque',     status:'aguardando' as HitoStatus, horario: null   },
      ],
    },
    {
      label: 'PAX não encontrado — hitos subsequentes cancelados',
      hitos: [
        { id:1, nome:'Desembarque',      status:'pax_nao_encontrado' as HitoStatus, horario:'09:52' },
        { id:2, nome:'Em percurso',      status:'cancelado'          as HitoStatus, horario: null   },
        { id:3, nome:'Raio-X',          status:'cancelado'          as HitoStatus, horario: null   },
        { id:4, nome:'Gate de Embarque', status:'cancelado'          as HitoStatus, horario: null   },
        { id:5, nome:'Embarque',         status:'cancelado'          as HitoStatus, horario: null   },
      ],
    },
    {
      label: 'Concluído — todos os hitos ok',
      hitos: [
        { id:1, nome:'Desembarque', status:'ok' as HitoStatus, horario:'09:52' },
        { id:2, nome:'Em percurso', status:'ok' as HitoStatus, horario:'09:58' },
        { id:3, nome:'Gate',        status:'ok' as HitoStatus, horario:'10:05' },
        { id:4, nome:'Embarque',    status:'ok' as HitoStatus, horario:'10:12' },
      ],
    },
    {
      label: 'Com hito ignorado',
      hitos: [
        { id:1, nome:'Desembarque', status:'ok'         as HitoStatus, horario:'10:17' },
        { id:2, nome:'Em percurso', status:'ok'         as HitoStatus, horario:'10:23' },
        { id:3, nome:'Raio-X',     status:'ignorado'   as HitoStatus, horario:'10:28' },
        { id:4, nome:'Gate',        status:'ok'         as HitoStatus, horario:'10:35' },
        { id:5, nome:'Embarque',    status:'aguardando' as HitoStatus, horario: null   },
      ],
    },
    {
      label: '7 hitos — percurso longo',
      hitos: [
        { id:1, nome:'Desembarque',         status:'ok'         as HitoStatus, horario:'10:04' },
        { id:2, nome:'Em percurso',         status:'ok'         as HitoStatus, horario:'10:11' },
        { id:3, nome:'Raio-X',             status:'ok'         as HitoStatus, horario:'10:19' },
        { id:4, nome:'Saindo da Imigração', status:'aguardando' as HitoStatus, horario: null   },
        { id:5, nome:'Escada Terminal 3',   status:'aguardando' as HitoStatus, horario: null   },
        { id:6, nome:'Gate de Embarque',    status:'aguardando' as HitoStatus, horario: null   },
        { id:7, nome:'Embarque',            status:'aguardando' as HitoStatus, horario: null   },
      ],
    },
  ];

  tooltipText(h: Hito): string {
    const label = HITO_LABEL[h.status];
    return h.horario ? `${h.nome} · ${label} · ${h.horario}` : `${h.nome} · ${label}`;
  }

  isCurrent(h: Hito, hitos: Hito[]): boolean {
    const idx = hitos.indexOf(h);
    return h.status === 'aguardando' && idx > 0 && hitos[idx - 1].status === 'ok';
  }

  progressPct(hitos: Hito[]): number {
    const done = this.doneCount(hitos);
    return hitos.length ? Math.round((done / hitos.length) * 100) : 0;
  }

  doneCount(hitos: Hito[]): number {
    return hitos.filter(h => h.status === 'ok' || h.status === 'ignorado' || h.status === 'pax_nao_encontrado').length;
  }

  progressStatus(hitos: Hito[]): ProgressStatus {
    if (hitos.some(h => h.status === 'pax_nao_encontrado')) return 'pax_nao_encontrado';
    if (hitos.every(h => h.status === 'ok' || h.status === 'ignorado')) return 'concluido';
    if (hitos.some(h => h.status === 'ok')) return 'em_percurso';
    return 'aguardando';
  }

  progressLabel(hitos: Hito[]): string {
    const s = this.progressStatus(hitos);
    const map: Record<ProgressStatus, string> = {
      aguardando: 'Aguardando', em_percurso: 'Em percurso',
      concluido: 'Concluído', pax_nao_encontrado: 'PAX n/e',
    };
    return map[s];
  }
}

const meta: Meta<StatusBarStoryComponent> = {
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
  title: 'Componentes/Status Bar — Hitos',
  component: StatusBarStoryComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**sg-hitos-strip + sg-progress-bar** — Componente de acompanhamento visual de hitos de conexão.

Cada bolinha representa um marco do fluxo. Hover exibe tooltip com nome, status e horário registrado.
O hito **atual** (primeiro \`aguardando\` após um \`ok\`) recebe animação de pulso (\`sg-hito-dot--current\`).

### Classes de status
| Classe | Significado |
|---|---|
| \`sg-hito-dot--ok\` | Hito concluído pelo agente |
| \`sg-hito-dot--aguardando\` | Ainda não executado |
| \`sg-hito-dot--ignorado\` | Pulado intencionalmente |
| \`sg-hito-dot--pax_nao_encontrado\` | PAX não localizado — encerra o fluxo |
| \`sg-hito-dot--cancelado\` | Cancelado em cascata após PAX n/e |
| \`sg-hito-dot--current\` | Modificador de animação — hito em andamento |

### Conector
\`sg-hito-connector\` — linha entre bolinhas. Adicione \`sg-hito-connector--done\` quando o hito anterior é \`ok\`.
        `,
      },
    },
  },
};
export default meta;
export const Exemplos: StoryObj<StatusBarStoryComponent> = { name: 'Todos os cenários' };
