// src/stories/components/navbar.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

export interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

@Component({
  selector: 'siga-story-navbar',
  standalone: true,
  imports: [NgFor, NgClass],
  template: `
    <nav class="siga-navbar">
      <ul class="nav-left">
        <li *ngFor="let item of items" class="nav-item" [class.active]="item.active">
          <a class="nav-link">
            <i [class]="'fa-solid ' + item.icon"></i>
            <span>{{ item.label }}</span>
          </a>
        </li>
      </ul>
      <ul class="nav-right">
        <li class="nav-item right-item">
          <a class="nav-link">
            <i class="fa-solid fa-cog"></i>
            <span>Configurações</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    :host { display: block; }
    .siga-navbar {
      width: 100%;
      background: linear-gradient(to bottom, var(--siga-brand-red) 0%, var(--siga-brand-red) 50%, var(--siga-brand-red-mid) 50%, var(--siga-brand-red-mid) 100%);
      display: flex; justify-content: space-between; align-items: center;
      font-family: var(--siga-font-family); height: 52px; box-sizing: border-box;
    }
    .siga-navbar ul { list-style: none; margin: 0; padding: 0; display: flex; height: 100%; }
    .nav-left, .nav-right { display: flex; height: 100%; }
    .nav-item {
      height: 100%; display: flex; align-items: center; cursor: pointer;
      transition: all 0.2s ease; border-right: 1px solid rgba(255,255,255,0.1);
    }
    .nav-left .nav-item:first-child { border-left: 1px solid rgba(255,255,255,0.1); }
    .nav-right .nav-item { border-right: none; border-left: 1px solid rgba(255,255,255,0.1); }
    .nav-link {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 0 16px; height: 100%; color: var(--siga-text-white); text-decoration: none; transition: all 0.2s ease;
    }
    .nav-link i { font-size: 20px; margin-bottom: 4px; }
    .nav-link span { font-size: 10px; font-weight: 500; white-space: nowrap; }
    .nav-item.active {
      background: linear-gradient(to bottom, var(--siga-brand-red-active) 0%, var(--siga-brand-red-active) 50%, var(--siga-brand-red-active-dark) 51%, var(--siga-brand-red-active-dark) 100%);
    }
    .nav-item:hover:not(.active) { background: var(--siga-surface); }
    .nav-item:hover:not(.active) .nav-link { color: var(--siga-brand-red-mid); }
    .right-item .nav-link i { font-size: 16px; margin-bottom: 6px; }
  `],
})
export class NavbarStoryComponent {
  @Input() items: NavItem[] = [
    { label: 'Flight Connection', icon: 'fa-plane-arrival' },
    { label: 'WorkFlow',          icon: 'fa-route' },
    { label: 'Monitoring Flow',   icon: 'fa-eye', active: true },
  ];
}

const meta: Meta<NavbarStoryComponent> = {
  title: 'Componentes/Navbar Sub-header',
  component: NavbarStoryComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**siga-navbar** — Sub-header de navegação entre módulos do SIGA.

O item ativo recebe fundo escurecido. Hover inverte para branco com texto vermelho.

| Token | Valor |
|---|---|
| \`--siga-brand-red\` | \`#EF2A5E\` |
| \`--siga-brand-red-mid\` | \`#ED1650\` |
| \`--siga-brand-red-active\` | \`#A50D36\` |
| Altura | \`52px\` |
        `,
      },
    },
  },
  argTypes: {
    items: { control: 'object' },
  },
};
export default meta;

export const FlightControl: StoryObj<NavbarStoryComponent> = {
  name: 'Flight Control (padrão)',
};

export const SemAtivo: StoryObj<NavbarStoryComponent> = {
  name: 'Sem item ativo',
  args: {
    items: [
      { label: 'Flight Connection', icon: 'fa-plane-arrival' },
      { label: 'WorkFlow',          icon: 'fa-route' },
      { label: 'Monitoring Flow',   icon: 'fa-eye' },
    ],
  },
};
