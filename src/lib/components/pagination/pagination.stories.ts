import type { Meta, StoryObj } from '@storybook/angular';
import { PaginationComponent } from './pagination.component';

const meta: Meta<PaginationComponent> = {
  title: 'SIGA/Componentes/Pagination',
  component: PaginationComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Navegação paginada do SIGA. Baseada no padrão \`.ngx-pagination\` do sistema legado. Emite eventos \`pageChanged\` e \`pageSizeChanged\`.`,
      },
    },
  },
  argTypes: {
    currentPage: { control: { type: 'number', min: 1 } },
    totalItems: { control: { type: 'number', min: 0 } },
    pageSize: { control: 'select', options: [10, 25, 50, 100] },
  },
};
export default meta;
type Story = StoryObj<PaginationComponent>;

export const Playground: Story = {
  name: 'Playground',
  args: { currentPage: 3, totalItems: 248, pageSize: 10, pageSizeOptions: [10, 25, 50, 100] },
};

export const FirstPage: Story = {
  name: 'Primeira página',
  args: { currentPage: 1, totalItems: 248, pageSize: 10 },
};

export const LastPage: Story = {
  name: 'Última página',
  args: { currentPage: 25, totalItems: 248, pageSize: 10 },
};
