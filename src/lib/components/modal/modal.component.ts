import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'siga-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() confirmLabel: string = 'Sim';
  @Input() cancelLabel: string = 'Não';
  @Input() showFooter: boolean = true;
  @Input() showBanner: boolean = false;
  @Input() bannerTitle: string = '';
  @Input() bannerText: string = '';

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();
}
