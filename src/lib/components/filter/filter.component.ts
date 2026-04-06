import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'siga-filter',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Output() searched = new EventEmitter<void>();
  @Output() cleared = new EventEmitter<void>();
}
