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
    rightItem: { id: 'config', label: 'Configurações', icon: 'fa-solid fa-cog' }
  },
  render: (args) => ({
    props: {
      ...args,
      onItemClick: (e: any) => console.log('Item Clicado', e),
    },
    template: `
      <siga-navbar
        [items]="items"
        [rightItem]="rightItem"
        (itemClick)="onItemClick($event)">
      </siga-navbar>
    `,
    moduleMetadata: { imports: [NavbarComponent] },
  }),
};
