import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from '../status-bar/status-bar.component';

@Component({
  selector: 'siga-status-card',
  standalone: true,
  imports: [CommonModule, StatusBarComponent],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.scss',
})
export class StatusCardComponent {
  /** Define o estado geral do componente (verde para iniciado, vermelho para não encontrado) */
  @Input() status: 'success' | 'danger' = 'success';

  /** Valor atual de status (ex. 142) */
  @Input() current: number = 0;
  
  /** Valor total de status (ex. 142) */
  @Input() total: number = 0;
  
  /** Horário de início marcado com relógio */
  @Input() startTime: string = '';
  
  /** Contagem de usuários embarcados ou presentes */
  @Input() usersCount: number = 0;
  
  /** Total de usuários */
  @Input() usersTotal: number = 0;
  
  /** Contagem de bagagens */
  @Input() luggageCount: number = 0;
  
  /** Total de bagagens */
  @Input() luggageTotal: number = 0;
  
  /** Tempo restante ou atraso (ex. "00:55min") */
  @Input() timeBadge: string = '';
}
