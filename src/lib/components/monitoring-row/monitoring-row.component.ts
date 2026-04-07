import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';
import { ButtonComponent } from '../button/button.component';
import { CardHitoComponent } from '../card-hito/card-hito.component';
import { StatusCardComponent } from '../status-card/status-card.component';

export interface HitoItem {
  idHito: string | number;
  title: string;
  time?: string;
  status?: string;
  statusColor?: 'success' | 'warning' | 'danger' | 'default';
  variant: 'success' | 'warning' | 'danger' | 'default';
}

@Component({
  selector: 'siga-monitoring-row',
  standalone: true,
  imports: [CommonModule, BadgeComponent, ButtonComponent, CardHitoComponent, StatusCardComponent],
  templateUrl: './monitoring-row.component.html',
  styleUrl: './monitoring-row.component.scss',
})
export class MonitoringRowComponent {
  /** Flight Header Info */
  @Input() flightNumber: string = '';
  @Input() flightTag: string = '';
  @Input() flightTagVariant: any = 'success';
  @Input() agentName: string = '';

  /** Left Section Info (Voo) */
  @Input() origin: string = '';
  @Input() destination: string = '';
  @Input() flightStatus: string = '';
  @Input() flightStatusVariant: any = 'danger';
  @Input() duration: string = '';
  @Input() originGate: string = '';
  @Input() destinationGate: string = '';

  /** Timeline Hitos */
  @Input() hitos: HitoItem[] = [];

  /** Right Section (Status Card) */
  @Input() statusCurrent: number = 0;
  @Input() statusTotal: number = 0;
  @Input() statusStartTime: string = '';
  @Input() usersCount: number = 0;
  @Input() usersTotal: number = 0;
  @Input() luggageCount: number = 0;
  @Input() luggageTotal: number = 0;
  @Input() timeBadge: string = '';
  @Input() statusVariant: 'success' | 'danger' = 'success';
}
