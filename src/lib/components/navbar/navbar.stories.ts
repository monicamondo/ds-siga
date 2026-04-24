import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';

import { NavbarComponent } from './navbar.component';

const meta: Meta<NavbarComponent> = {
  title: 'Componentes/Navbar Sub-header',
  component: NavbarComponent,
  tags: ['autodocs'],
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<NavbarComponent>;

export const Padrao: Story = {
  name: 'Flight Control Sub-Navbar',
  args: {
    items: [
      { id: 'connection', label: 'Flight Connection', icon: 'fa-solid fa-plane-arrival' },
      { id: 'workflow', label: 'WorkFlow', icon: 'fa-solid fa-route' },
      { id: 'monitoring', label: 'Monitoring Flow', icon: 'fa-solid fa-eye', active: true },
    ],
    rightItem: { id: 'config', label: 'Configurações', icon: 'fa-solid fa-gear' }
  },
};

export const CargoInspect: Story = {
  name: 'Cargo Inspect',
  args: {
    items: [
      { id: 'inspecao', label: 'Inspeção de porão', icon: 'fa-kit fa-cargo-inspect', active: true },
      { id: 'apk', label: 'APK Download', icon: 'fa-solid fa-download' },
    ]
  }
};

export const ConectaPlus: Story = {
  name: 'Conecta Plus',
  args: {
    items: [
      { id: 'connect', label: 'Connect +', icon: 'fa-kit fa-route', active: true },
      { id: 'conexoes', label: 'Conexões', icon: 'fa-solid fa-people-arrows' },
    ],
    rightItem: { id: 'config', label: 'Configurações', icon: 'fa-solid fa-gear' }
  }
};

export const Contingencia: Story = {
  name: 'Contingência',
  args: {
    items: [
      { id: 'pesquisa', label: 'Pesquisa de Voos', icon: 'fa-kit fa-solid-plane-up-magnifying-glass', active: true },
      { id: 'contingencia', label: 'Contingência', icon: 'fa-kit fa-solid-plane-up-clock' },
      { id: 'relatorio', label: 'Relatório', icon: 'fa-solid fa-table-cells' },
      { id: 'consolidado', label: 'Relatório Consolidado', icon: 'fa-solid fa-file-excel' },
    ],
    rightItem: { id: 'config', label: 'Configuração', icon: 'fa-solid fa-gear' }
  }
};

export const DespachoVoo: Story = {
  name: 'Despacho operacional de voo',
  args: {
    items: [
      { id: 'solicitar', label: 'Solicitar DLA / PLN', icon: 'fa-kit fa-file-dov', active: true },
    ]
  }
};

export const Gerencial: Story = {
  name: 'Gerencial',
  args: {
    items: [
      { id: 'gerencial', label: 'Gerencial', icon: 'fa-solid fa-chart-pie', active: true },
      { id: 'dashboards', label: 'Dashboards', icon: 'fa-solid fa-gauge-high' },
      { id: 'relatorios', label: 'Relatórios', icon: 'fa-solid fa-file-lines' },
      { id: 'kpis', label: 'KPIs', icon: 'fa-solid fa-chart-line' },
    ],
    rightItem: { id: 'config', label: 'Configurações', icon: 'fa-solid fa-gear' }
  }
};

export const Planejamento: Story = {
  name: 'Planejamento',
  args: {
    items: [
      { id: 'planejamento', label: 'Planejamento', icon: 'fa-solid fa-calendar-check', active: true },
      { id: 'sazonal', label: 'Sazonal', icon: 'fa-solid fa-cloud-sun' },
      { id: 'mensal', label: 'Mensal', icon: 'fa-solid fa-calendar-days' },
      { id: 'semanal', label: 'Semanal', icon: 'fa-solid fa-calendar-week' },
    ],
    rightItem: { id: 'config', label: 'Configurações', icon: 'fa-solid fa-gear' }
  }
};

export const MonitoramentoOperacao: Story = {
  name: 'Monitoramento / Operação',
  args: {
    items: [
      { id: 'chegadas', label: 'Chegadas Partidas', icon: 'fa-solid fa-plane-arrival', active: true },
      { id: 'performance', label: 'Performance', icon: 'fa-solid fa-chart-line' },
      { id: 'movimentacao', label: 'Movimentação', icon: 'fa-solid fa-arrows-up-down' },
      { id: 'controle', label: 'Controle', icon: 'fa-solid fa-laptop-code' },
      { id: 'cots', label: "Cot's/Dot's", icon: 'fa-solid fa-file-contract' },
      { id: 'monitoramento', label: 'Monitoramento', icon: 'fa-solid fa-desktop' },
      { id: 'indices', label: 'Índices Operacionais', icon: 'fa-solid fa-chart-simple' },
      { id: 'flow', label: 'Monitoring Flow', icon: 'fa-solid fa-route' },
      { id: 'hcc', label: 'HCC Manager', icon: 'fa-solid fa-user-gear' },
    ],
    rightItem: { id: 'config', label: 'Configurações', icon: 'fa-solid fa-gear' }
  }
};

export const PaxControl: Story = {
  name: 'Pax Control',
  args: {
    items: [
      { id: 'paxcontrol', label: 'Pax Control', icon: 'fa-solid fa-user-check', active: true },
      { id: 'allpax', label: 'All Pax', icon: 'fa-solid fa-users' },
      { id: 'apk', label: 'APK Download', icon: 'fa-solid fa-download' },
      { id: 'kpis', label: "KPI's", icon: 'fa-solid fa-map-location-dot' },
      { id: 'performance', label: 'Performance', icon: 'fa-solid fa-chart-line-up' },
    ],
    rightItem: { id: 'config', label: 'Configuração', icon: 'fa-solid fa-gear' }
  }
};
