import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Componentes/Botão',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Botão padrão do SIGA. Baseado no \`.btn-sg\` do sistema legado.

**Variantes:** \`primary\` · \`outline\` · \`secondary\` · \`icon\` · \`icon-outline\`

**Tamanhos:** \`sm\` (30px) · \`md\` (38px) · \`lg\` (46px)

**Regras:**
- Use \`fa-solid\` em menus/navbar, \`fa-regular\` em conteúdo de página
- Nunca use valores visuais hardcoded — apenas tokens \`--siga-*\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'secondary', 'icon', 'icon-outline'],
      description: 'Estilo visual',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho (altura)',
    },
    label: { control: 'text', description: 'Texto do botão' },
    iconClass: { control: 'text', description: 'Classe FA (ex: "fa-solid fa-plus")' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Tipo HTML',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// ── Playground ─────────────────────────────────────────────────────
export const Playground: Story = {
  name: 'Playground',
  args: { label: 'Confirmar', variant: 'primary', size: 'sm', disabled: false, iconClass: '' },
};

// ── Visão geral ────────────────────────────────────────────────────
export const Overview: Story = {
  name: '▦ Visão geral',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    docs: { description: { story: 'Comparativo de todas as variantes × tamanhos × estados.' } },
  },
  render: () => ({
    template: `
<div style="padding:32px;font-family:var(--siga-font-family,Arial,sans-serif);background:#F9F9F9">

  <table style="border-collapse:collapse;width:100%;background:#fff;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08)">
    <thead style="background:#F0F0F0">
      <tr>
        <th style="text-align:left;font-size:11px;color:#757575;padding:10px 16px;border-bottom:1px solid #E0E0E0;font-weight:700">Variante</th>
        <th style="text-align:center;font-size:11px;color:#757575;padding:10px 16px;border-bottom:1px solid #E0E0E0;font-weight:700">SM · 30px</th>
        <th style="text-align:center;font-size:11px;color:#757575;padding:10px 16px;border-bottom:1px solid #E0E0E0;font-weight:700">MD · 38px</th>
        <th style="text-align:center;font-size:11px;color:#757575;padding:10px 16px;border-bottom:1px solid #E0E0E0;font-weight:700">LG · 46px</th>
        <th style="text-align:center;font-size:11px;color:#757575;padding:10px 16px;border-bottom:1px solid #E0E0E0;font-weight:700">Disabled</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:14px 16px;border-bottom:1px solid #F0F0F0;font-size:12px;font-weight:700">Primary</td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Confirmar" variant="primary" size="sm"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Confirmar" variant="primary" size="md"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Confirmar" variant="primary" size="lg"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Confirmar" variant="primary" size="sm" [disabled]="true"></siga-button></td>
      </tr>
      <tr>
        <td style="padding:14px 16px;border-bottom:1px solid #F0F0F0;font-size:12px;font-weight:700">Outline</td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Cancelar" variant="outline" size="sm"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Cancelar" variant="outline" size="md"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Cancelar" variant="outline" size="lg"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Cancelar" variant="outline" size="sm" [disabled]="true"></siga-button></td>
      </tr>
      <tr>
        <td style="padding:14px 16px;border-bottom:1px solid #F0F0F0;font-size:12px;font-weight:700">Secondary</td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Filtrar" variant="secondary" size="sm"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Filtrar" variant="secondary" size="md"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Filtrar" variant="secondary" size="lg"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button label="Filtrar" variant="secondary" size="sm" [disabled]="true"></siga-button></td>
      </tr>
      <tr>
        <td style="padding:14px 16px;border-bottom:1px solid #F0F0F0;font-size:12px;font-weight:700">Icon</td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button variant="icon" size="sm" iconClass="fa-regular fa-pencil"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button variant="icon" size="md" iconClass="fa-regular fa-pencil"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0;font-size:11px;color:#9E9E9E">—</td>
        <td style="text-align:center;padding:14px 16px;border-bottom:1px solid #F0F0F0"><siga-button variant="icon" size="sm" iconClass="fa-regular fa-pencil" [disabled]="true"></siga-button></td>
      </tr>
      <tr>
        <td style="padding:14px 16px;font-size:12px;font-weight:700">Icon Outline</td>
        <td style="text-align:center;padding:14px 16px"><siga-button variant="icon-outline" size="sm" iconClass="fa-regular fa-magnifying-glass"></siga-button></td>
        <td style="text-align:center;padding:14px 16px"><siga-button variant="icon-outline" size="md" iconClass="fa-regular fa-magnifying-glass"></siga-button></td>
        <td style="text-align:center;padding:14px 16px;font-size:11px;color:#9E9E9E">—</td>
        <td style="text-align:center;padding:14px 16px"><siga-button variant="icon-outline" size="sm" iconClass="fa-regular fa-magnifying-glass" [disabled]="true"></siga-button></td>
      </tr>
    </tbody>
  </table>

  <div style="margin-top:32px">
    <p style="font-size:11px;font-weight:700;color:#757575;margin:0 0 12px;text-transform:uppercase;letter-spacing:.5px">Com ícone + label</p>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <siga-button label="Novo"     variant="primary"   size="sm" iconClass="fa-solid fa-plus"></siga-button>
      <siga-button label="Exportar" variant="outline"   size="sm" iconClass="fa-regular fa-arrow-up-from-bracket"></siga-button>
      <siga-button label="Filtrar"  variant="secondary" size="sm" iconClass="fa-regular fa-filter"></siga-button>
      <siga-button label="Salvar"   variant="primary"   size="md" iconClass="fa-solid fa-floppy-disk"></siga-button>
    </div>
  </div>
</div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};
