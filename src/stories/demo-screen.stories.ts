import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import all components to use in the screen assembly
import { HeaderComponent } from '../lib/components/header/header.component';
import { NavbarComponent } from '../lib/components/navbar/navbar.component';
import { CardComponent } from '../lib/components/card/card.component';
import { FilterComponent } from '../lib/components/filter/filter.component';
import { InputComponent } from '../lib/components/input/input.component';
import { ButtonComponent } from '../lib/components/button/button.component';
import { BadgeComponent } from '../lib/components/badge/badge.component';
import { PaginationComponent } from '../lib/components/pagination/pagination.component';
import { ModalComponent } from '../lib/components/modal/modal.component';
import { TableComponent, TableColumn } from '../lib/components/table/table.component';

const meta: Meta = {
  title: 'SIGA/Páginas/Demonstração de Tela',
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
    moduleMetadata({
      imports: [
        CommonModule,
        HeaderComponent,
        NavbarComponent,
        CardComponent,
        FilterComponent,
        InputComponent,
        ButtonComponent,
        BadgeComponent,
        PaginationComponent,
        ModalComponent,
        TableComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Listagem: StoryObj = {
  render: () => ({
    props: {
      user: { name: 'Jhon Doe', provider: 'LATAM' },
      selectedModule: { id: 'conecta', label: 'CONECTA+' },
      selectedAirport: { code: 'GRU' },
      showEditModal: false,
      navbarItems: [
        { id: 'connection', label: 'Flight Connection', icon: 'fa-solid fa-plane-arrival' },
        { id: 'workflow', label: 'WorkFlow', icon: 'fa-solid fa-route' },
        { id: 'monitoring', label: 'Monitoring Flow', icon: 'fa-solid fa-eye', active: true },
      ],
      navbarRightItem: { id: 'config', label: 'Configurações', icon: 'fa-solid fa-cog' },
      tableColumns: [
        { key: 'flight', label: 'Voo' },
        { key: 'destination', label: 'Destino' },
        { key: 'time', label: 'Horário', align: 'center' as const },
        { key: 'gate', label: 'Portão', align: 'center' as const },
        { key: 'status', label: 'Status', type: 'badge' },
      ],
      tableRows: [
        { flight: 'LA 8084', destination: 'Santiago (SCL)', time: '14:30', gate: '22A', status: 'Embarque', status_variant: 'blue' },
        { flight: 'LA 3021', destination: 'Miami (MIA)', time: '15:00', gate: '14', status: 'Confirmado', status_variant: 'success' },
        { flight: 'LA 4120', destination: 'Bogotá (BOG)', time: '15:15', gate: 'TBD', status: 'Atrasado', status_variant: 'warning' },
        { flight: 'LA 9011', destination: 'Lima (LIM)', time: '16:00', gate: '12B', status: 'Cancelado', status_variant: 'danger' },
      ],
    },
    template: `
      <div style="min-height: 100vh; background: #fdfdfd; font-family: var(--siga-font-family);">
        <siga-header 
          [user]="user" 
          [selectedModule]="selectedModule"
          [selectedAirport]="selectedAirport"
          currentDayOfWeek="JUEVES"
          currentDate="16/09/2025"
          currentTime="09:00"
          utcTime="12:00"
          currentLanguage="ES"
        ></siga-header>

        <siga-navbar
          [items]="navbarItems"
          [rightItem]="navbarRightItem"
        ></siga-navbar>

        <div style="padding: 24px; max-width: 1200px; margin: 0 auto;">
          <siga-card title="Gestão de Voos" subtitle="Monitoramento e controle de operações" [showFooter]="false">
            
            <siga-filter style="margin-bottom: 24px;">
              <div class="sg-filter-field">
                <siga-input label="Pesquisar Voo" placeholder="Ex: LA-8084"></siga-input>
              </div>
              <div class="sg-filter-field">
                <siga-input label="Prefixo" placeholder="Ex: PR-XTA"></siga-input>
              </div>
              <div class="sg-filter-field">
                <siga-input label="Status" value="Todos"></siga-input>
              </div>
            </siga-filter>

            <div style="margin: 20px 0;">
              <siga-table [columns]="tableColumns" [rows]="tableRows" [striped]="true" [hoverable]="true">
                <ng-template #rowActions let-row>
                  <siga-button variant="icon" size="sm" iconClass="fa-regular fa-pen-to-square" (click)="showEditModal = true"></siga-button>
                  <siga-button variant="icon" size="sm" iconClass="fa-solid fa-ellipsis-vertical" style="margin-left: 4px"></siga-button>
                </ng-template>
              </siga-table>
            </div>

            <siga-pagination [totalItems]="150" [currentPage]="1" [pageSize]="10"></siga-pagination>
          </siga-card>
        </div>

        <!-- Modal de Exemplo -->
        <div *ngIf="showEditModal" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: var(--siga-z-modal); display: flex; align-items: center; justify-content: center; padding: 20px;">
          <siga-modal 
            style="width: 500px;" 
            title="Editar Voo LA8084" 
            [showBanner]="true" 
            bannerTitle="Informação de Segurança" 
            bannerText="Alterações neste campo exigem validação do despachante operacional."
            (cancelled)="showEditModal = false"
            (confirmed)="showEditModal = false"
          >
            <div style="display:flex; flex-direction:column; gap:16px;">
              <siga-input label="Origem" value="GRU"></siga-input>
              <siga-input label="Destino" value="SCL"></siga-input>
              <siga-input label="Status" value="Delayed" errorMessage="Atenção: Atraso superior a 2h"></siga-input>
            </div>
          </siga-modal>
        </div>

      </div>
    `,

  }),
};
