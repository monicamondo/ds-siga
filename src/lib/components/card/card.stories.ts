import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Componentes/Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Container de conteúdo padrão do SIGA. Use \`title\` para o cabeçalho e \`showFooter\` para exibir a área de ações.`,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    showFooter: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Playground: Story = {
  name: 'Playground',
  args: { title: 'Título do Card', subtitle: 'Subtítulo opcional', showFooter: false },
};

export const Overview: Story = {
  name: '▦ Visão geral',
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  render: () => ({
    template: `
<div style="padding:32px;background:#F9F9F9;display:flex;flex-direction:column;gap:24px;max-width:640px">
  <siga-card title="Sem subtítulo">
    <p style="font-size:12px;color:#424242;margin:0">Conteúdo do card via ng-content.</p>
  </siga-card>
  <siga-card title="Com subtítulo" subtitle="Informação complementar">
    <p style="font-size:12px;color:#424242;margin:0">Conteúdo do card com subtítulo no header.</p>
  </siga-card>
  <siga-card title="Com rodapé" [showFooter]="true">
    <p style="font-size:12px;color:#424242;margin:0">Card com área de ações no footer.</p>
    <div sgCardFooter style="display:flex;gap:8px">
      <siga-button label="Salvar" variant="primary" size="sm"></siga-button>
      <siga-button label="Cancelar" variant="outline" size="sm"></siga-button>
    </div>
  </siga-card>
  <siga-card>
    <p style="font-size:12px;color:#424242;margin:0">Card sem título — só conteúdo.</p>
  </siga-card>
</div>`,
    moduleMetadata: { imports: [CardComponent] },
  }),
};
