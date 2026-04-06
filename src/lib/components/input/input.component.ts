import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'search' | 'tel';

let inputCounter = 0;

@Component({
  selector: 'siga-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: InputType = 'text';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() errorMessage: string = '';
  @Input() value: string = '';
  @Input() id: string = `siga-input-${++inputCounter}`;
}
