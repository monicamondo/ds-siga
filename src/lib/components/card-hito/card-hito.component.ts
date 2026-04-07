import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'siga-card-hito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-hito.component.html',
  styleUrl: './card-hito.component.scss',
})
export class CardHitoComponent {
  /** Número/Identificador a ser exibido no círculo */
  @Input() idHito: string | number = '';
  
  /** Título principal do cartão */
  @Input() title: string = '';
  
  /** Informação de tempo (ex: "09:45" ou "09:45 03/04") */
  @Input() time?: string = '';
  
  /** Texto de status ("No tempo", "Atrasado") */
  @Input() status?: string = '';
  
  /** Cor do texto de status. Usa a paleta semântica (ex: 'success', 'danger') */
  @Input() statusColor?: 'success' | 'warning' | 'danger' | 'default' = 'success';
  
  /** Variante visual do cartão que altera background e borda */
  @Input() variant: 'success' | 'warning' | 'danger' | 'default' = 'default';

  get hasContent(): boolean {
    return !!(this.time || this.status);
  }
}
