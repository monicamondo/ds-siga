import { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { StatusBarComponent } from './status-bar.component';

const meta: Meta<StatusBarComponent> = {
  title: 'Componentes/Status Bar',
  component: StatusBarComponent,
  tags: ['autodocs'],
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'primary', 'info'],
      description: 'Cor da barra de progresso (classes semânticas do Bootstrap/Siga)'
    },
    current: {
      control: 'number',
      description: 'Valor atual / preenchido'
    },
    total: {
      control: 'number',
      description: 'Valor total'
    }
  }
};

export default meta;
type Story = StoryObj<StatusBarComponent>;

export const Default: Story = {
  args: {
    label: 'STATUS',
    current: 142,
    total: 142,
    color: 'success'
  }
};

export const InProgress: Story = {
  args: {
    label: 'STATUS',
    current: 71,
    total: 142,
    color: 'warning'
  }
};
