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
