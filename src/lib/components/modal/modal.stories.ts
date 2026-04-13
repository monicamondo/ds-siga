import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal.component';

const meta: Meta<ModalComponent> = {
  title: 'Componentes/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Modal padrão do SIGA. Usa \`siga-button\` internamente (sem duplicar estilos).

**Slots:** conteúdo livre via \`ng-content\` no body.

**Banner informativo:** ative com \`[showBanner]="true"\` + \`bannerTitle\` + \`bannerText\`.

Para exibir o modal na tela, controle a visibilidade com \`*ngIf\` no componente pai.
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    showFooter: { control: 'boolean' },
    showBanner: { control: 'boolean' },
    bannerTitle: { control: 'text' },
    bannerText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Playground: Story = {
  name: 'Playground',
  args: {
    title: 'Confirmar ação',
    confirmLabel: 'Sim',
    cancelLabel: 'Não',
    showFooter: true,
    showBanner: false,
  },
};

export const Overview: Story = {
  name: '▦ Visão geral',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
  render: () => ({
    template: `
<div style="padding:48px;background:#F0F0F0;display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start;justify-content:center">

  <!-- Modal simples -->
  <div style="width:420px">
    <p style="font-size:11px;font-weight:700;color:#757575;margin:0 0 12px;text-transform:uppercase;letter-spacing:.5px">Confirmação simples</p>
    <siga-modal title="Excluir registro" confirmLabel="Excluir" cancelLabel="Cancelar">
      <p style="margin:0">Tem certeza que deseja excluir este registro? Esta ação não pode ser desfeita.</p>
    </siga-modal>
  </div>

  <!-- Modal com banner -->
  <div style="width:480px">
    <p style="font-size:11px;font-weight:700;color:#757575;margin:0 0 12px;text-transform:uppercase;letter-spacing:.5px">Com banner informativo</p>
    <siga-modal
      title="Alterar status do voo"
      confirmLabel="Confirmar"
      cancelLabel="Cancelar"
      [showBanner]="true"
      bannerTitle="Atenção"
      bannerText="Esta alteração impactará todos os passageiros embarcados. Verifique antes de prosseguir.">
      <p style="margin:0">Selecione o novo status para o voo LA-4031.</p>
    </siga-modal>
  </div>

  <!-- Sem rodapé -->
  <div style="width:380px">
    <p style="font-size:11px;font-weight:700;color:#757575;margin:0 0 12px;text-transform:uppercase;letter-spacing:.5px">Sem rodapé (somente leitura)</p>
    <siga-modal title="Detalhes do passageiro" [showFooter]="false">
      <p style="margin:0;font-size:13px">Nome: João Silva<br/>CPF: 123.456.789-00<br/>Assento: 14A<br/>Status: Embarcado</p>
    </siga-modal>
  </div>

</div>
    `,
    moduleMetadata: { imports: [ModalComponent] },
  }),
};
