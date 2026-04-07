import { Meta, StoryObj } from '@storybook/angular';
import { MonitoringRowComponent, HitoItem } from './monitoring-row.component';
import { moduleMetadata } from '@storybook/angular';
import { BadgeComponent } from '../badge/badge.component';
import { ButtonComponent } from '../button/button.component';
import { CardHitoComponent } from '../card-hito/card-hito.component';
import { StatusCardComponent } from '../status-card/status-card.component';
import { StatusBarComponent } from '../status-bar/status-bar.component';

const sampleHitos: HitoItem[] = [
  { idHito: '1', title: 'Desembarque + teste de título grande', time: '09:45', status: 'No tempo', statusColor: 'success', variant: 'success' },
  { idHito: '4', title: 'Saída imigração', time: '09:45 03/04', status: 'No tempo', statusColor: 'success', variant: 'warning' },
  { idHito: '8', title: 'Partida', time: '', status: '', variant: 'default' },
  { idHito: '8', title: 'Partida', time: '', status: '', variant: 'default' },
  { idHito: '8', title: 'Partida', time: '', status: '', variant: 'default' },
  { idHito: '8', title: 'Partida', time: '', status: '', variant: 'default' },
  { idHito: '8', title: 'Partida', time: '', status: '', variant: 'default' },
];

const meta: Meta<MonitoringRowComponent> = {
  title: 'Pages/Monitoring Row',
  component: MonitoringRowComponent,
  decorators: [
    moduleMetadata({
      imports: [BadgeComponent, ButtonComponent, CardHitoComponent, StatusCardComponent, StatusBarComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MonitoringRowComponent>;

export const Default: Story = {
  args: {
    flightNumber: 'LA3100',
    flightTag: 'PR-MHX',
    flightTagVariant: 'warning',
    agentName: 'Roberto Alejandro Fuentes',
    origin: 'GRU',
    destination: 'GRU',
    flightStatus: 'RUN',
    flightStatusVariant: 'danger',
    duration: '41min',
    originGate: '45B',
    destinationGate: '45B',
    hitos: sampleHitos,
    statusVariant: 'success',
    statusCurrent: 142,
    statusTotal: 142,
    statusStartTime: '11:22',
    usersCount: 4,
    usersTotal: 6,
    luggageCount: 4,
    luggageTotal: 6,
    timeBadge: '00:55min'
  },
};
