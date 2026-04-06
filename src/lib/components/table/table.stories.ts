import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';
import { ButtonComponent } from '../button/button.component';
import { BadgeComponent } from '../badge/badge.component';

const meta: Meta<TableComponent<any>> = {
  title: 'SIGA/Componentes/Tabela',
  component: TableComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
    (story) => {
      const moduleMeta: any = {
        imports: [CommonModule, TableComponent, ButtonComponent, BadgeComponent],
      };
      return moduleMeta;
    }
  ],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<TableComponent<any>>;

const COLUMNS = [
  { key: 'flight', label: 'Voo' },
  { key: 'destination', label: 'Destino' },
  { key: 'time', label: 'Horário', align: 'center' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
];

const ROWS = [
  { flight: 'LA 8084', destination: 'Santiago (SCL)', time: '14:30', status: 'Embarque', status_variant: 'blue' },
  { flight: 'LA 3021', destination: 'Miami (MIA)', time: '15:00', status: 'Confirmado', status_variant: 'success' },
  { flight: 'LA 4120', destination: 'Bogotá (BOG)', time: '15:15', status: 'Atrasado', status_variant: 'warning' },
  { flight: 'LA 9011', destination: 'Lima (LIM)', time: '16:00', status: 'Cancelado', status_variant: 'danger' },
];

export const Playground: Story = {
  name: 'Playground (Básico)',
  args: {
    columns: COLUMNS,
    rows: ROWS,
    striped: true,
    hoverable: true,
  },
};

export const ComAcoes: StoryObj = {
  name: 'Com Botões de Ação',
  render: () => ({
    props: {
      columns: COLUMNS,
      rows: ROWS,
    },
    template: `
      <siga-table [columns]="columns" [rows]="rows" [striped]="true" [hoverable]="true">
        <ng-template #rowActions let-row>
          <siga-button variant="icon" size="sm" iconClass="fa-regular fa-pen-to-square"></siga-button>
          <siga-button variant="icon" size="sm" iconClass="fa-regular fa-trash-can" style="margin-left: 4px"></siga-button>
        </ng-template>
      </siga-table>
    `,
    moduleMetadata: { imports: [TableComponent, ButtonComponent, CommonModule] }
  }),
};
