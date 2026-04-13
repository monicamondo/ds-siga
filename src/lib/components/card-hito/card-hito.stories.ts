import { Meta, StoryObj } from '@storybook/angular';
import { CardHitoComponent } from './card-hito.component';

const meta: Meta<CardHitoComponent> = {
  title: 'Componentes/Card Hito',
  component: CardHitoComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'default'],
      description: 'Define as cores de background e borda do card'
    },
    statusColor: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'default'],
      description: 'Define a cor do texto de status'
    }
  }
};

export default meta;
type Story = StoryObj<CardHitoComponent>;

export const AplicadoVerde: Story = {
  args: {
    idHito: '1',
    title: 'Desembarque + teste de título grande',
    time: '09:45',
    status: 'No tempo',
    statusColor: 'success',
    variant: 'success'
  }
};

export const SemConteudo: Story = {
  args: {
    idHito: '8',
    title: 'Partida',
    time: '',
    status: '',
    variant: 'default'
  }
};

export const AplicadoAmarelo: Story = {
  args: {
    idHito: '4',
    title: 'Saída imigração',
    time: '09:45',
    status: 'Em risco',
    statusColor: 'warning',
    variant: 'warning'
  }
};

export const AplicadoVermelho: Story = {
  args: {
    idHito: '2',
    title: 'Em percurso',
    time: '09:45',
    status: 'Atrasado',
    statusColor: 'danger',
    variant: 'danger'
  }
};
