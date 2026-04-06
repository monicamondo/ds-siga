import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SgButtonVariant = 'primary' | 'outline' | 'secondary' | 'icon' | 'icon-outline';
export type SgButtonSize = 'sm' | 'md' | 'lg';
export type SgButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'siga-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    'style': 'display: inline-block;'
  }
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: SgButtonVariant = 'primary';
  @Input() size: SgButtonSize = 'sm';
  @Input() disabled: boolean = false;
  @Input() type: SgButtonType = 'button';
  @Input() iconClass: string = '';

  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    return `btn btn-sg btn-${this.variant} btn-size-${this.size}`;
  }
}
