import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'siga-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="visible" class="sg-spinner-box" role="status" [attr.aria-label]="label">
      <i class="fa-regular fa-circle-notch fa-spin fa-2x" aria-hidden="true"></i>
      <span class="visually-hidden">{{ label }}</span>
    </div>
  `,
  styles: [`
    .sg-spinner-box {
      width: 80px; height: 80px;
      display: flex; flex-direction: column;
      justify-content: center; align-items: center;
      background: var(--siga-surface);
      border-radius: var(--siga-radius-md);
      box-shadow: var(--siga-shadow-md);
      i { color: var(--siga-color-primary); }
    }
    .visually-hidden {
      position: absolute; width: 1px; height: 1px;
      padding: 0; margin: -1px; overflow: hidden;
      clip: rect(0,0,0,0); white-space: nowrap; border: 0;
    }
  `],
})
export class SpinnerComponent {
  @Input() visible: boolean = true;
  @Input() label: string = 'Aguarde...';
}
