import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Componentes/Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Campo de formulário padrão do SIGA. Baseado no \`.form-control.form-control-sm\` do Bootstrap com refinamentos de token.

**Label:** uppercase, azul primary — padrão do sistema legado.
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Rótulo do campo' },
    placeholder: { control: 'text', description: 'Placeholder' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search', 'tel'] },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    errorMessage: { control: 'text', description: 'Mensagem de validação' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Playground: Story = {
  name: 'Playground',
  args: { label: 'Nome', placeholder: 'Digite aqui...', required: false, disabled: false, errorMessage: '', value: '' },
};

export const Overview: Story = {
  name: '▦ Visão geral',
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  render: () => ({
    template: `
<div style="padding:32px;background:#F9F9F9;display:flex;flex-direction:column;gap:24px;max-width:480px">
  <siga-input label="Padrão" placeholder="Digite aqui..."></siga-input>
  <siga-input label="Obrigatório" placeholder="Campo obrigatório" [required]="true"></siga-input>
  <siga-input label="Preenchido" value="Texto de exemplo"></siga-input>
  <siga-input label="Desabilitado" placeholder="Não editável" [disabled]="true"></siga-input>
  <siga-input label="Com erro" placeholder="Inválido" errorMessage="Este campo é obrigatório."></siga-input>
  <siga-input label="Senha" type="password" placeholder="••••••••"></siga-input>
</div>`,
    moduleMetadata: { imports: [InputComponent] },
  }),
};
