import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'siga-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() user: { name: string; provider?: string } | null = null;
  @Input() selectedModule: { id: string; label: string } | null = null;
  @Input() selectedAirport: { code: string; country?: string } | null = null;
  
  @Input() currentDayOfWeek: string = 'JUEVES';
  @Input() currentDate: string = '16/09/2025';
  
  @Input() currentTime: string = '09:00';
  @Input() utcTime: string = '12:00';

  @Input() currentLanguage: string = 'ES';
  
  @Input() logoUrl: string = '/latam-logo.png'; // Uses public mapped path in Storybook

  @Output() logout = new EventEmitter<void>();
}
