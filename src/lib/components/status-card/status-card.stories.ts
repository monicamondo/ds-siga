import { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { StatusCardComponent } from './status-card.component';
import { StatusBarComponent } from '../status-bar/status-bar.component';

const meta: Meta<StatusCardComponent> = {
  title: 'Componentes/Status Card',
  component: StatusCardComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
    moduleMetadata({ imports: [StatusBarComponent] }),
  ],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'danger'],
      description: 'Estado principal do card'
    },
    current: { control: 'number', description: 'Status atual' },
    total: { control: 'number', description: 'Status total' },
    startTime: { control: 'text', description: 'Horário de início' },
    usersCount: { control: 'number', description: 'Quantidade de usuários confirmados/presentes' },
    usersTotal: { control: 'number', description: 'Quantidade de usuários esperados' },
    luggageCount: { control: 'number', description: 'Quantidade de bagagens despachadas/presentes' },
    luggageTotal: { control: 'number', description: 'Quantidade de bagagens esperadas' },
    timeBadge: { control: 'text', description: 'Texto da badge de tempo (ex: 00:55min)' }
  }
};

export default meta;
type Story = StoryObj<StatusCardComponent>;

export const StatusIniciado: Story = {
  args: {
    status: 'success',
    current: 142,
    total: 142,
    startTime: '11:22',
    usersCount: 4,
    usersTotal: 6,
    luggageCount: 4,
    luggageTotal: 6,
    timeBadge: '00:55min'
  }
};

export const PaxNaoEncontrado: Story = {
  args: {
    status: 'danger',
    current: 142,  /* Se precisar, zera. Ou deixa igual ao total do momento */
    total: 142,
    startTime: '11:22', /* Se estiver danger esse campo é ignorado para mostrar o alerta na tela, mas é mantido no state */
    usersCount: 4,
    usersTotal: 6,
    luggageCount: 4,
    luggageTotal: 6,
    timeBadge: '00:55min'
  }
};
