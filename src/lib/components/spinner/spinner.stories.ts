import type { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';

const meta: Meta<SpinnerComponent> = {
  title: 'Componentes/Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    visible: { control: 'boolean', description: 'Exibe o spinner' },
    label: { control: 'text', description: 'Texto acessível (aria-label)' },
  },
};
export default meta;
type Story = StoryObj<SpinnerComponent>;

export const Playground: Story = {
  name: 'Playground',
  args: { visible: true, label: 'Aguarde...' },
};
