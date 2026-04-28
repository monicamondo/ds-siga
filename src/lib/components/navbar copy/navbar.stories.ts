import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';

import { NavbarComponent } from './navbar.component';

const meta: Meta<NavbarComponent> = {
  title: 'Componentes/Navbar Sub-header (Submenu)',
  component: NavbarComponent,
  tags: ['autodocs'],
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<NavbarComponent>;

export const Admin: Story = {
  name: 'Admin',
  args: {
    items: [
      { id: 'notificacao', label: 'Notificação', icon: 'sg-icon fa-solid fa-bullhorn', active: true },
      { 
        id: 'usuarios-group', 
        label: 'Usuários', 
        icon: 'sg-icon fa-solid fa-users',
        children: [
          { id: 'usuarios', label: 'Usuários', icon: 'sg-icon fa-solid fa-users' },
          { id: 'acessos', label: 'Acessos', icon: 'sg-icon fa-solid fa-right-to-bracket' },
        ]
      },
      { id: 'areas', label: 'Áreas', icon: 'sg-icon fa-solid fa-sitemap fa-rotate-270' },
      { 
        id: 'aeroporto-group', 
        label: 'Aeroporto', 
        icon: 'sg-icon fa-solid fa-tower-control',
        children: [
          { id: 'aeroportos', label: 'Aeroportos', icon: 'sg-icon fa-solid fa-tower-control' },
          { id: 'park', label: 'Park Position', icon: 'sg-icon fa-kit fa-park-position-siga' },
          { id: 'gates', label: 'Gates', icon: 'sg-icon fa-kit fa-gate' },
        ]
      },
      { id: 'aeronaves', label: 'Aeronaves', icon: 'sg-icon fa-kit fa-aircraft' },
      { 
        id: 'codigos-group', 
        label: 'Códigos', 
        icon: 'sg-icon fa-solid fa-barcode',
        children: [
          { id: 'cancelamento', label: 'Cancelamento', icon: 'sg-icon fa-solid fa-plane-slash' },
          { id: 'atrasos', label: 'Atrasos', icon: 'sg-icon fa-solid fa-hourglass-clock' },
        ]
      },
      { id: 'turnos', label: 'Turnos', icon: 'sg-icon fa-solid fa-clock-five' },
      { id: 'fuso', label: 'Fuso Horário', icon: 'sg-icon fa-kit fa-fuso' },
      { id: 'bloquear', label: 'Bloquear Voos', icon: 'sg-icon fa-solid fa-plane-lock' },
      { id: 'relatorios', label: 'Relatórios', icon: 'sg-icon fa-solid fa-gauge-high' },
      { id: 'fornecedores', label: 'Fornecedores', icon: 'sg-icon fa-solid fa-users-rays' },
      { id: 'sociedade', label: 'Sociedade', icon: 'sg-icon fa-solid fa-handshake' },
      { id: 'bagbelt', label: 'Bag Belt', icon: 'sg-icon fa-solid fa-conveyor-belt-boxes' },
      { id: 'config', label: 'Configurações', icon: 'sg-icon fa-solid fa-gear' },
      { id: 'gantt', label: 'Gantt', icon: 'sg-icon fa-solid fa-chart-gantt' },
    ]
  }
};
