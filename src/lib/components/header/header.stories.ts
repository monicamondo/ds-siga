import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, componentWrapperDecorator } from '@storybook/angular';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';
import { NavbarComponent } from '../navbar/navbar.component';

const meta: Meta<HeaderComponent> = {
  title: 'Componentes/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
    componentWrapperDecorator((story) => `
      <div style="width: 100%; min-height: 450px; display: block; background: #f5f5f5;">
        ${story}
      </div>
    `),
  ],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const DesktopCompleto: Story = {
  name: 'Visual Padrão (Conforme Referência)',
  args: {
    logoUrl: 'latam-logo.png',
    user: { name: 'Monica Mondo', provider: 'LATAM' },
    selectedModule: { id: 'admin', label: 'ADMINISTRADOR GERAL', labelLine1: 'ADMINISTRADOR', labelLine2: 'GERAL', icon: 'fa-solid fa-gear' },
    availableModules: [
      { id: 'admin', label: 'ADMINISTRADOR', labelLine1: 'ADMINISTRADOR', labelLine2: 'GERAL', icon: 'fa-solid fa-gear' },
      { id: 'cargo', label: 'CARGO INSPECT', labelLine1: 'CARGO', labelLine2: 'INSPECT', icon: 'fa-kit fa-cargo-inspect' },
      { id: 'connect', label: 'CONNECT PLUS', labelLine1: 'CONNECT', labelLine2: 'PLUS', icon: 'fa-kit fa-route' },
      { id: 'contingency', label: 'CONTINGÊNCIA', labelLine1: 'SISTEMA', labelLine2: 'CONTINGÊNCIA', icon: 'fa-kit fa-solid-plane-up-clock' },
      { id: 'dispatch', label: 'DESPACHO OPERACIONAL', labelLine1: 'DESPACHO', labelLine2: 'OPERACIONAL', icon: 'fa-kit fa-file-dov' },
      { id: 'flight', label: 'FLIGHT CONTROL', labelLine1: 'FLIGHT', labelLine2: 'CONTROL', icon: 'fa-kit fa-solid-plane-up-magnifying-glass' },
      { id: 'management', label: 'GESTÃO DE PROVEDORES', labelLine1: 'GESTÃO', labelLine2: 'PROVEDORES', icon: 'icon fa-solid fa-users-rays' },
      { id: 'hcc', label: 'HUB CONTROL CENTER', labelLine1: 'HUB CONTROL', labelLine2: 'CENTER', icon: 'icon fa-solid fa-tower-control' },
      { id: 'pnae', label: 'PNAE', labelLine1: 'GERENCIAR', labelLine2: 'PNAE', icon: 'fa-kit fa-pnae-module' },
    ],
    selectedAirport: { code: 'GRU' },
    currentDayOfWeek: 'QUINTA-FEIRA',
    currentDate: '23/04/2026',
    currentTime: '16:13',
    utcTime: '19:13',
    currentLanguage: 'PT',
  },
};

export const HeaderComNavbar: Story = {
  name: 'Header + Navbar (Ex: Cargo Inspect)',
  args: {
    ...DesktopCompleto.args,
    selectedModule: { id: 'cargo', label: 'CARGO INSPECT', labelLine1: 'CARGO', labelLine2: 'INSPECT', icon: 'fa-kit fa-cargo-inspect' },
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column;">
        <siga-header
          [logoUrl]="logoUrl"
          [user]="user"
          [selectedModule]="selectedModule"
          [availableModules]="availableModules"
          [selectedAirport]="selectedAirport"
          [currentDayOfWeek]="currentDayOfWeek"
          [currentDate]="currentDate"
          [currentTime]="currentTime"
          [utcTime]="utcTime"
          [currentLanguage]="currentLanguage">
        </siga-header>
        <siga-navbar
          [items]="[
            { id: 'inspecao', label: 'Inspeção de porão', icon: 'fa-solid fa-barcode', active: true },
            { id: 'apk', label: 'APK Download', icon: 'fa-solid fa-download' }
          ]">
        </siga-navbar>
      </div>
    `,
    moduleMetadata: {
      imports: [HeaderComponent, NavbarComponent]
    }
  })
};
