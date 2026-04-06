import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'blue' | 'success' | 'warning' | 'danger' | 'info' | 'default';
export type BadgeSize = 'sm' | 'md';

@Component({
  selector: 'siga-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() label: string = '';
  @Input() variant: BadgeVariant = 'blue';
  @Input() size: BadgeSize = 'md';
  @Input() iconClass: string = '';

  get badgeClasses(): string {
    return `sg-badge sg-badge--${this.variant} sg-badge--size-${this.size}`;
  }
}
