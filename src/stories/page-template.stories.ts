// src/stories/page-template.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../lib/components/header/header.component';
import { NavbarComponent } from '../lib/components/navbar/navbar.component';
import { PaginationComponent } from '../lib/components/pagination/pagination.component';

const meta: Meta = {
  title: 'Páginas/Template de Página',
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
    moduleMetadata({
      imports: [
        CommonModule,
        HeaderComponent,
        NavbarComponent,
        PaginationComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// ─── Shared data ────────────────────────────────────────────────────────────

const user        = { name: 'Jhon Doe', provider: 'LATAM' };
const module_     = { id: 'conecta', label: 'CONECTA+' };
const airport     = { code: 'GRU' };
const navbarItems = [
  { id: 'connection', label: 'Flight Connection', icon: 'fa-solid fa-plane-arrival' },
  { id: 'workflow',   label: 'WorkFlow',           icon: 'fa-solid fa-route' },
  { id: 'monitoring', label: 'Monitoring Flow',    icon: 'fa-solid fa-eye', active: true },
];
const navbarRight = { id: 'config', label: 'Configurações', icon: 'fa-solid fa-cog' };

// ─── Template base ───────────────────────────────────────────────────────────

const pageTemplate = `
  <div style="
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #F9F9F9;
    font-family: var(--siga-font-family, Arial, sans-serif);
    overflow: hidden;
  ">

    <!-- ① Header principal -->
    <siga-header
      [user]="user"
      [selectedModule]="module"
      [selectedAirport]="airport"
      currentDayOfWeek="SEGUNDA"
      currentDate="13/04/2026"
      currentTime="09:45"
      utcTime="12:45"
      currentLanguage="PT"
    ></siga-header>

    <!-- ② Navbar sub-menu -->
    <siga-navbar
      [items]="navbarItems"
      [rightItem]="navbarRight"
    ></siga-navbar>

    <!-- ③ Sub-header de página (apenas título) -->
    <div style="
      background: #FFFFFF;
      border-bottom: 1px solid #E0E0E0;
      padding: 14px 24px;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    ">
      <h1 style="margin: 0; font-size: 18px; font-weight: 700; color: #0A0A0A">
        Monitoramento de Conexões
      </h1>
    </div>

    <!-- ④ Miolo da página (área de conteúdo com scroll) -->
    <div style="
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      min-height: 0;
    ">
      <!-- Placeholder de conteúdo -->
      <div style="
        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        border-radius: 8px;
        height: 100%;
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 12px;
        color: #C2C2C2;
      ">
        <i class="fa-regular fa-layer-group" style="font-size: 40px"></i>
        <span style="font-size: 14px; font-weight: 600">Área de conteúdo da página</span>
        <span style="font-size: 12px">
          Substitua esta área pelos componentes da tela — tabelas, cards, filtros, etc.
        </span>
      </div>
    </div>

    <!-- ⑤ Rodapé com Paginação -->
    <div style="
      background: #FFFFFF;
      border-top: 1px solid #E0E0E0;
      padding: 12px 24px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    ">
      <siga-pagination [totalItems]="150" [currentPage]="1" [pageSize]="10"></siga-pagination>
    </div>

  </div>
`;

// ─── Stories ─────────────────────────────────────────────────────────────────

export const TemplateBase: StoryObj = {
  name: 'Template Base (Header + Navbar + Sub-header + Miolo + Paginação)',
  render: () => ({
    props: { user, module: module_, airport, navbarItems, navbarRight },
    template: pageTemplate,
  }),
};
