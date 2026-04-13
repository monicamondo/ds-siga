import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Componentes/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Label de status inline. Baseado no \`.badge-blue\` e variantes do sistema legado.

**Variantes:** \`blue\` · \`info\` · \`success\` · \`warning\` · \`danger\` · \`default\`

**Tamanhos:** \`sm\` (tabelas compactas) · \`md\` (padrão)

Aceita ícone opcional via \`iconClass\` (Font Awesome).
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['blue', 'info', 'success', 'warning', 'danger', 'default'],
      description: 'Variante de cor',
    },
    size: { control: 'select', options: ['sm', 'md'], description: 'Tamanho' },
    label: { control: 'text', description: 'Texto do badge' },
    iconClass: { control: 'text', description: 'Classe FA opcional (ex: "fa-regular fa-circle-check")' },
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

// ── Playground ─────────────────────────────────────────────────────
export const Playground: Story = {
  name: 'Playground',
  args: { label: 'Confirmado', variant: 'blue', size: 'md', iconClass: '' },
};

// ── Visão geral ────────────────────────────────────────────────────
export const Overview: Story = {
  name: '▦ Visão geral',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
  render: () => ({
    template: `
<div style="padding:32px;font-family:var(--siga-font-family,Arial,sans-serif);background:#F9F9F9;display:flex;flex-direction:column;gap:28px">

  <div>
    <p style="font-size:11px;font-weight:700;color:#757575;margin:0 0 12px;text-transform:uppercase;letter-spacing:.5px">Variantes — MD</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <siga-badge label="Confirmado"  variant="blue"    size="md"></siga-badge>
      <siga-badge label="Em análise" variant="info"    size="md"></siga-badge>
      <siga-badge label="Ativo"       variant="success" size="md"></siga-badge>
      <siga-badge label="Pendente"    variant="warning" size="md"></siga-badge>
      <siga-badge label="Erro"        variant="danger"  size="md"></siga-badge>
      <siga-badge label="Inativo"     variant="default" size="md"></siga-badge>
    </div>
  </div>

  <div>
    <p style="font-size:11px;font-weight:700;color:#757575;margin:0 0 12px;text-transform:uppercase;letter-spacing:.5px">Variantes — SM (tabelas compactas)</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <siga-badge label="Confirmado"  variant="blue"    size="sm"></siga-badge>
      <siga-badge label="Em análise" variant="info"    size="sm"></siga-badge>
      <siga-badge label="Ativo"       variant="success" size="sm"></siga-badge>
      <siga-badge label="Pendente"    variant="warning" size="sm"></siga-badge>
      <siga-badge label="Erro"        variant="danger"  size="sm"></siga-badge>
      <siga-badge label="Inativo"     variant="default" size="sm"></siga-badge>
    </div>
  </div>

  <div>
    <p style="font-size:11px;font-weight:700;color:#757575;margin:0 0 12px;text-transform:uppercase;letter-spacing:.5px">Com ícone</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <siga-badge label="Aprovado"  variant="success" size="md" iconClass="fa-regular fa-circle-check"></siga-badge>
      <siga-badge label="Pendente"  variant="warning" size="md" iconClass="fa-regular fa-clock"></siga-badge>
      <siga-badge label="Cancelado" variant="danger"  size="md" iconClass="fa-regular fa-circle-xmark"></siga-badge>
    </div>
  </div>

  <div>
    <p style="font-size:11px;font-weight:700;color:#757575;margin:0 0 12px;text-transform:uppercase;letter-spacing:.5px">Grupo de tags — padrão de tabelas do legado</p>
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
      <siga-badge label="HCC" variant="blue" size="sm"></siga-badge>
      <siga-badge label="GPO" variant="blue" size="sm"></siga-badge>
      <siga-badge label="FC"  variant="blue" size="sm"></siga-badge>
      <siga-badge label="LAM" variant="blue" size="sm"></siga-badge>
    </div>
  </div>

</div>
    `,
    moduleMetadata: { imports: [BadgeComponent] },
  }),
};
