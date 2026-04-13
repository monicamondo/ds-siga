import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { FilterComponent } from './filter.component';
import { InputComponent } from '../input/input.component';

const meta: Meta<FilterComponent> = {
  title: 'Componentes/Filtro',
  component: FilterComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
  ],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**Filtro (siga-filter)**

Componente de conteiner para campos de busca e botões de ação (Limpar/Filtrar).

**Uso:** Projete componentes \`siga-input\` para dentro dele.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<FilterComponent>;

export const Playground: Story = {
  name: 'Playground',
  render: () => ({
    template: `
      <siga-filter>
        <div class="sg-filter-field">
          <siga-input label="Nome" placeholder="Buscar por nome..."></siga-input>
        </div>
        <div class="sg-filter-field">
          <siga-input label="Status" value="Ativo"></siga-input>
        </div>
      </siga-filter>
    `,
    moduleMetadata: { imports: [FilterComponent, InputComponent] },
  }),
};
