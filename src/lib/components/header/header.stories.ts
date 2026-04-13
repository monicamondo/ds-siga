import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Componentes/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const DesktopCompleto: Story = {
  name: 'Visual Padrão (Conforme Referência)',
  args: {
    logoUrl: '/latam-logo.png',
    user: { name: 'Jhon Doe', provider: 'LATAM' },
    selectedModule: { id: 'conecta', label: 'CONECTA+' },
    selectedAirport: { code: 'GRU' },
    currentDayOfWeek: 'JUEVES',
    currentDate: '16/09/2025',
    currentTime: '09:00',
    utcTime: '12:00',
    currentLanguage: 'ES',
  },
};
