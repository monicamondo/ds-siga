// src/stories/components/monitoring-table.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

export type HitoStatus = 'ok' | 'aguardando' | 'ignorado' | 'pax_nao_encontrado' | 'cancelado';
export type RowStatus  = 'em_percurso' | 'aguardando' | 'concluido' | 'pax_nao_encontrado';

export interface Hito {
  id: number;
  nome: string;
  status: HitoStatus;
  horario: string | null;
}

export interface MonitoringRow {
  id: number;
  tipo: 'RUN' | 'Short';
  vpiChegada: string; origem: string; sta: string; eta: string; gateChegada: string;
  vooConexao: string;  destino: string; std: string; etd: string; gateEmbarque: string;
  agentes: string[];
  hitos: Hito[];
}

function deriveStatus(row: MonitoringRow): RowStatus {
  const h = row.hitos;
  if (h.some(x => x.status === 'pax_nao_encontrado')) return 'pax_nao_encontrado';
  if (h.every(x => x.status === 'ok' || x.status === 'ignorado')) return 'concluido';
  if (h.some(x => x.status === 'ok')) return 'em_percurso';
  return 'aguardando';
}

function calcProgresso(hitos: Hito[]): number {
  const done = hitos.filter(h => h.status === 'ok' || h.status === 'ignorado' || h.status === 'pax_nao_encontrado').length;
  return hitos.length ? Math.round((done / hitos.length) * 100) : 0;
}

const SAMPLE_ROWS: MonitoringRow[] = [
  {
    id: 1, tipo: 'RUN',
    vpiChegada: 'LA100', origem: 'GRU', sta: '09:30', eta: '09:35', gateChegada: '25B',
    vooConexao: 'LA3100', destino: 'MAO', std: '10:45', etd: '10:45', gateEmbarque: '14C',
    agentes: ['Kate Austen'],
    hitos: [
      { id:1, nome:'Desembarque', status:'ok',         horario:'09:33' },
      { id:2, nome:'Em percurso', status:'ok',         horario:'09:41' },
      { id:3, nome:'Gate',        status:'aguardando', horario: null   },
      { id:4, nome:'Embarque',    status:'aguardando', horario: null   },
    ],
  },
  {
    id: 2, tipo: 'Short',
    vpiChegada: 'G312', origem: 'CGH', sta: '09:50', eta: '10:10', gateChegada: '12A',
    vooConexao: 'G31200', destino: 'GIG', std: '11:20', etd: '11:20', gateEmbarque: '8',
    agentes: ['Tony Stark'],
    hitos: [
      { id:1, nome:'Desembarque',       status:'pax_nao_encontrado', horario:'09:52' },
      { id:2, nome:'Em percurso',       status:'cancelado',          horario: null   },
      { id:3, nome:'Gate de Embarque',  status:'cancelado',          horario: null   },
    ],
  },
  {
    id: 3, tipo: 'Short',
    vpiChegada: 'AD44', origem: 'BSB', sta: '09:55', eta: '09:50', gateChegada: '7C',
    vooConexao: 'AD4455', destino: 'FOR', std: '11:00', etd: '11:00', gateEmbarque: '22',
    agentes: ['Peter Parker'],
    hitos: [
      { id:1, nome:'Desembarque', status:'ok', horario:'09:52' },
      { id:2, nome:'Em percurso', status:'ok', horario:'09:58' },
      { id:3, nome:'Gate',        status:'ok', horario:'10:05' },
      { id:4, nome:'Embarque',    status:'ok', horario:'10:12' },
    ],
  },
  {
    id: 4, tipo: 'RUN',
    vpiChegada: 'CM43', origem: 'PTY', sta: '10:05', eta: '10:05', gateChegada: '4F',
    vooConexao: 'CM430', destino: 'BOG', std: '11:10', etd: '11:10', gateEmbarque: '19',
    agentes: ['Clark Kent'],
    hitos: [
      { id:1, nome:'Desembarque',      status:'aguardando', horario: null },
      { id:2, nome:'Em percurso',      status:'aguardando', horario: null },
      { id:3, nome:'Gate de Embarque', status:'aguardando', horario: null },
    ],
  },
];

@Component({
  selector: 'siga-story-monitoring-table',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  template: `
    <div style="padding:12px;background:var(--siga-bg);font-family:var(--siga-font-family)">

      <!-- Título + chips -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <h1 class="sg-screen-title">Monitoramento de Acompanhamentos</h1>
        <div style="display:flex;gap:8px">
          <span class="sg-summary-chip"><i class="fa-solid fa-plane-up" style="margin-right:4px"></i> {{ rows.length }} conexões</span>
          <span class="sg-summary-chip sg-summary-chip--warning"><i class="fa-regular fa-clock" style="margin-right:4px"></i> {{ countWaiting }} aguardando</span>
          <span class="sg-summary-chip sg-summary-chip--danger"><i class="fa-solid fa-triangle-exclamation" style="margin-right:4px"></i> {{ countPax }} PAX n/e</span>
        </div>
      </div>

      <!-- Tabela -->
      <div class="sg-table-wrapper">
        <table class="sg-monitoring-table">
          <thead class="sg-monitoring-table__head">
            <tr class="sg-thead-group">
              <th colspan="3" class="sg-th-group sg-th-group--chegada"><i class="fa-solid fa-plane-arrival" style="margin-right:4px"></i>CHEGADA</th>
              <th colspan="3" class="sg-th-group sg-th-group--partida"><i class="fa-solid fa-plane-departure" style="margin-right:4px"></i>PARTIDA</th>
              <th rowspan="2" class="col-tipo sg-th-neutral">Tipo</th>
              <th rowspan="2" class="col-agente sg-th-neutral">Agente</th>
              <th rowspan="2" class="col-hitos sg-th-neutral">
                Hitos de Acompanhamento
                <span class="sg-hitos-legend" style="margin-left:8px">
                  <span class="sg-hito-dot sg-hito-dot--ok"               title="Concluído"></span>
                  <span class="sg-hito-dot sg-hito-dot--aguardando"        title="Aguardando"></span>
                  <span class="sg-hito-dot sg-hito-dot--ignorado"          title="Ignorado"></span>
                  <span class="sg-hito-dot sg-hito-dot--pax_nao_encontrado" title="PAX não encontrado"></span>
                  <span class="sg-hito-dot sg-hito-dot--cancelado"         title="Cancelado"></span>
                </span>
              </th>
              <th rowspan="2" class="col-progresso sg-th-neutral">Progresso</th>
            </tr>
            <tr>
              <th class="col-voo-chegada sg-th-chegada">Voo / Origem</th>
              <th class="sg-th-chegada col-tempos">Horário</th>
              <th class="sg-th-chegada col-gate">Gate</th>
              <th class="col-voo-partida sg-th-partida">Voo / Destino</th>
              <th class="sg-th-partida col-tempos">Horário</th>
              <th class="sg-th-partida col-gate">Gate</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of rows" [class]="'sg-row--' + status(row)">
              <!-- CHEGADA -->
              <td class="sg-col-chegada">
                <span class="sg-voo-number">{{ row.vpiChegada }}</span>
                <span class="sg-voo-airport">{{ row.origem }}</span>
              </td>
              <td class="sg-col-chegada">
                <div class="sg-time-block">
                  <span class="sg-time-value" [class.sg-time-value--delayed]="row.eta > row.sta">{{ row.eta !== row.sta ? row.eta : row.sta }}</span>
                  <span class="sg-time-label">{{ row.eta !== row.sta ? 'ETA' : 'STA' }}</span>
                </div>
              </td>
              <td class="sg-col-chegada">
                <span class="sg-gate">{{ row.gateChegada }}</span>
                <span class="sg-gate-label">Gate</span>
              </td>
              <!-- PARTIDA -->
              <td class="sg-col-partida">
                <span class="sg-voo-number">{{ row.vooConexao }}</span>
                <span class="sg-voo-airport">{{ row.destino }}</span>
              </td>
              <td class="sg-col-partida">
                <div class="sg-time-block">
                  <span class="sg-time-value" [class.sg-time-value--delayed]="row.etd > row.std">{{ row.etd !== row.std ? row.etd : row.std }}</span>
                  <span class="sg-time-label">{{ row.etd !== row.std ? 'ETD' : 'STD' }}</span>
                </div>
              </td>
              <td class="sg-col-partida">
                <span class="sg-gate">{{ row.gateEmbarque }}</span>
                <span class="sg-gate-label">Gate</span>
              </td>
              <!-- TIPO -->
              <td><span class="sg-badge-tipo" [class]="'sg-badge-tipo sg-badge-tipo--' + row.tipo">{{ row.tipo }}</span></td>
              <!-- AGENTE -->
              <td class="sg-col-agente">
                <span class="sg-agente">{{ row.agentes[0] }}</span>
                <span *ngIf="row.agentes.length > 1" class="sg-agente sg-agente--secondary">{{ row.agentes[1] }}</span>
              </td>
              <!-- HITOS -->
              <td>
                <div class="sg-hitos-strip">
                  <ng-container *ngFor="let h of row.hitos; let i = index">
                    <span *ngIf="i > 0" class="sg-hito-connector" [class.sg-hito-connector--done]="row.hitos[i-1].status === 'ok'"></span>
                    <span class="sg-hito-dot" [class]="'sg-hito-dot sg-hito-dot--' + h.status" [title]="h.nome + (h.horario ? ' · ' + h.horario : '')">{{ h.id }}</span>
                  </ng-container>
                </div>
              </td>
              <!-- PROGRESSO -->
              <td>
                <div class="sg-progress-col">
                  <div class="sg-progress-label">
                    <span>{{ status(row) | titlecase }}</span>
                    <strong>{{ progresso(row) }}%</strong>
                  </div>
                  <div class="sg-progress-bar-wrap">
                    <div class="sg-progress-bar-fill" [class]="'sg-progress-bar-fill--' + status(row)" [style.width.%]="progresso(row)"></div>
                  </div>
                  <span class="sg-status-label" [class]="'sg-status-label sg-status-label--' + status(row)">
                    {{ doneCount(row) }}/{{ row.hitos.length }} hitos
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  `,
  styles: [`
    :host { display: block; }
    .sg-screen-title { font-size:13px; font-weight:700; color:var(--siga-text-primary); font-family:var(--siga-font-family); text-transform:uppercase; letter-spacing:0.3px; margin:0; }
    .sg-summary-chip { display:inline-flex; align-items:center; padding:2px 8px; border-radius:2px; font-size:10px; font-weight:700; background:var(--siga-blue-100); color:var(--siga-blue-700); border:1px solid var(--siga-blue-200); font-family:var(--siga-font-family); }
    .sg-summary-chip--warning { background:var(--siga-yellow-100); color:var(--siga-yellow-700); border-color:var(--siga-yellow-200); }
    .sg-summary-chip--danger { background:var(--siga-red-100); color:var(--siga-red-500); border-color:var(--siga-red-200); }
    .sg-table-wrapper { background:var(--siga-surface); border:1px solid var(--siga-gray-300); overflow-x:auto; }
    .sg-monitoring-table { width:100%; min-width:900px; border-collapse:collapse; font-family:var(--siga-font-family); font-size:11px; }
    .sg-thead-group .sg-th-group { font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; padding:4px 8px; text-align:center; }
    .sg-th-group--chegada { background:var(--siga-orange-100) !important; color:var(--siga-orange-700) !important; }
    .sg-th-group--partida { background:var(--siga-blue-100) !important; color:var(--siga-blue-700) !important; }
    .sg-th-neutral { background:var(--siga-gray-100) !important; color:var(--siga-text-tertiary); vertical-align:middle !important; }
    .sg-monitoring-table__head th { background:var(--siga-gray-300); color:var(--siga-text-tertiary); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.3px; padding:5px 8px; border:none; border-bottom:1px solid var(--siga-gray-300); white-space:nowrap; vertical-align:middle; }
    .sg-th-chegada { background:var(--siga-orange-100) !important; color:var(--siga-text-primary) !important; font-weight:700 !important; text-transform:none !important; letter-spacing:0 !important; }
    .sg-th-partida { background:var(--siga-blue-200) !important; color:var(--siga-text-primary) !important; font-weight:700 !important; text-transform:none !important; letter-spacing:0 !important; }
    .sg-col-chegada { background:var(--siga-orange-100) !important; }
    .sg-col-partida { background:var(--siga-blue-200) !important; }
    .sg-monitoring-table tbody td { padding:4px 8px; vertical-align:middle; border:none; border-bottom:1px solid var(--siga-divider); font-size:11px; color:var(--siga-text-primary); }
    .sg-monitoring-table tbody tr:nth-child(even) { background:var(--siga-gray-100); }
    .sg-monitoring-table tbody tr:hover td:not(.sg-col-chegada):not(.sg-col-partida) { background:var(--siga-blue-100) !important; }
    .sg-monitoring-table tbody tr:hover td.sg-col-chegada { background:var(--siga-orange-200) !important; }
    .sg-monitoring-table tbody tr:hover td.sg-col-partida { background:var(--siga-blue-300) !important; }
    .sg-row--pax_nao_encontrado td:not(.sg-col-chegada):not(.sg-col-partida) { background:var(--siga-red-100); }
    .col-voo-chegada,.col-voo-partida { width:80px; } .col-tempos { width:88px; } .col-gate { width:64px; }
    .col-tipo { width:64px; } .col-agente { width:130px; } .col-progresso { width:148px; }
    .sg-voo-number { font-size:11px; font-weight:700; color:var(--siga-blue-700); display:block; font-family:var(--siga-font-family); }
    .sg-voo-airport { font-size:10px; font-weight:700; color:var(--siga-text-tertiary); display:block; text-transform:uppercase; letter-spacing:0.4px; }
    .sg-time-block { font-family:var(--siga-font-family); line-height:1.25; }
    .sg-time-label { font-size:9px; color:var(--siga-text-tertiary); text-transform:uppercase; letter-spacing:0.3px; display:block; }
    .sg-time-value { font-size:11px; font-weight:700; color:var(--siga-text-primary); display:block; }
    .sg-time-value--delayed { color:var(--siga-red-500); }
    .sg-gate { font-size:11px; font-weight:700; color:var(--siga-text-primary); font-family:var(--siga-font-family); display:block; }
    .sg-gate-label { font-size:9px; color:var(--siga-text-tertiary); display:block; text-transform:uppercase; }
    .sg-badge-tipo { display:inline-block; padding:1px 6px; border-radius:2px; font-size:10px; font-weight:700; font-family:var(--siga-font-family); text-transform:uppercase; white-space:nowrap; }
    .sg-badge-tipo--RUN { background:var(--siga-danger); color:var(--siga-text-white); }
    .sg-badge-tipo--Short { background:var(--siga-warning); color:var(--siga-gray-800); }
    .sg-agente { font-size:12px; color:var(--siga-text-secondary); font-family:var(--siga-font-family); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:128px; display:block; }
    .sg-agente--secondary { color:var(--siga-text-tertiary); font-size:10px; margin-top:2px; }
    /* hitos */
    .sg-hitos-strip { display:flex; align-items:center; gap:5px; flex-wrap:nowrap; min-height:32px; }
    .sg-hito-dot { width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; font-family:var(--siga-font-family); cursor:default; flex-shrink:0; border:2px solid transparent; transition:transform 0.1s,box-shadow 0.1s; }
    .sg-hito-dot:hover { transform:scale(1.18); z-index:10; box-shadow:0 2px 8px rgba(0,0,0,0.18); }
    .sg-hito-dot--ok { background:var(--siga-green-500); border-color:var(--siga-green-500); color:var(--siga-text-white); }
    .sg-hito-dot--aguardando { background:var(--siga-gray-200); border-color:var(--siga-gray-300); color:var(--siga-gray-600); }
    .sg-hito-dot--ignorado { background:var(--siga-gray-300); border-color:var(--siga-gray-400); color:var(--siga-gray-500); opacity:0.8; }
    .sg-hito-dot--pax_nao_encontrado { background:var(--siga-red-500); border-color:var(--siga-red-500); color:var(--siga-text-white); }
    .sg-hito-dot--cancelado { background:var(--siga-gray-400); border-color:var(--siga-gray-500); color:var(--siga-gray-700); opacity:0.7; }
    .sg-hito-connector { flex:0 0 8px; height:2px; background:var(--siga-gray-300); border-radius:1px; }
    .sg-hito-connector--done { background:var(--siga-green-500); }
    .sg-hitos-legend { display:inline-flex; align-items:center; gap:4px; vertical-align:middle; }
    .sg-hitos-legend .sg-hito-dot { width:12px; height:12px; border-width:1px; cursor:help; }
    /* progresso */
    .sg-progress-col { min-width:130px; font-family:var(--siga-font-family); }
    .sg-progress-label { font-size:10px; color:var(--siga-text-tertiary); text-transform:uppercase; font-weight:700; letter-spacing:0.4px; display:flex; justify-content:space-between; margin-bottom:4px; }
    .sg-progress-label strong { color:var(--siga-text-primary); font-size:12px; }
    .sg-progress-bar-wrap { height:5px; background:var(--siga-gray-200); border-radius:var(--siga-radius-pill); overflow:hidden; margin-bottom:5px; }
    .sg-progress-bar-fill { height:100%; border-radius:var(--siga-radius-pill); transition:width 0.6s ease; }
    .sg-progress-bar-fill--em_percurso { background:var(--siga-blue-700); }
    .sg-progress-bar-fill--concluido { background:var(--siga-green-500); }
    .sg-progress-bar-fill--aguardando { background:var(--siga-gray-400); }
    .sg-progress-bar-fill--pax_nao_encontrado { background:var(--siga-red-500); }
    .sg-status-label { font-size:10px; font-weight:700; display:inline-flex; align-items:center; gap:4px; }
    .sg-status-label--aguardando { color:var(--siga-gray-600); }
    .sg-status-label--em_percurso { color:var(--siga-blue-700); }
    .sg-status-label--concluido { color:var(--siga-green-500); }
    .sg-status-label--pax_nao_encontrado { color:var(--siga-red-500); }
  `],
})
export class MonitoringTableStoryComponent implements OnInit {
  @Input() rows: MonitoringRow[] = SAMPLE_ROWS;

  get countWaiting(): number { return this.rows.filter(r => this.status(r) === 'aguardando').length; }
  get countPax(): number     { return this.rows.filter(r => this.status(r) === 'pax_nao_encontrado').length; }

  status(row: MonitoringRow): RowStatus { return deriveStatus(row); }
  progresso(row: MonitoringRow): number { return calcProgresso(row.hitos); }
  doneCount(row: MonitoringRow): number {
    return row.hitos.filter(h => h.status === 'ok' || h.status === 'ignorado' || h.status === 'pax_nao_encontrado').length;
  }

  ngOnInit() {}
}

const meta: Meta<MonitoringTableStoryComponent> = {
  title: 'Componentes/Monitoring Table',
  component: MonitoringTableStoryComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**sg-monitoring-table** — Tabela oficial de monitoramento de acompanhamentos do SIGA Conecta+.

### Estrutura de colunas
| Grupo | Colunas |
|---|---|
| **CHEGADA** (laranja) | Voo/Origem · Horário (STA/ETA) · Gate |
| **PARTIDA** (azul) | Voo/Destino · Horário (STD/ETD) · Gate |
| **Neutro** | Tipo · Agente · Hitos · Progresso |

### Status de linha
| Classe | Cor | Condição |
|---|---|---|
| \`sg-row--aguardando\` | — | Nenhum hito iniciado |
| \`sg-row--em_percurso\` | — | Ao menos 1 hito \`ok\` |
| \`sg-row--concluido\` | — | Todos hitos \`ok\` ou \`ignorado\` |
| \`sg-row--pax_nao_encontrado\` | fundo vermelho claro | Hito com \`pax_nao_encontrado\` |

### Status dos hitos
| Classe | Cor |
|---|---|
| \`--ok\` | Verde |
| \`--aguardando\` | Cinza claro |
| \`--ignorado\` | Cinza médio |
| \`--pax_nao_encontrado\` | Vermelho |
| \`--cancelado\` | Cinza escuro, opaco |
        `,
      },
    },
  },
};
export default meta;

export const Completa: StoryObj<MonitoringTableStoryComponent> = {
  name: 'Todos os status',
};

export const SomenteAguardando: StoryObj<MonitoringTableStoryComponent> = {
  name: 'Somente aguardando',
  args: {
    rows: SAMPLE_ROWS.filter(r => deriveStatus(r) === 'aguardando'),
  },
};

export const SomenteConcluido: StoryObj<MonitoringTableStoryComponent> = {
  name: 'Somente concluído',
  args: {
    rows: SAMPLE_ROWS.filter(r => deriveStatus(r) === 'concluido'),
  },
};
