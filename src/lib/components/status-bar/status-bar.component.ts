import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'siga-status-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.scss',
})
export class StatusBarComponent implements OnChanges {
  /** Rótulo exibido acima (ex: STATUS) */
  @Input() label: string = 'STATUS';
  
  /** Valor atual (ex: 142) */
  @Input() current: number = 0;
  
  /** Valor total (ex: 142) */
  @Input() total: number = 0;
  
  /** Cor da barra (baseada nas classes do bootstrap/Siga. ex: 'success', 'warning', 'danger', 'primary') */
  @Input() color: 'success' | 'warning' | 'danger' | 'primary' | 'info' = 'success';

  percentage: number = 0;

  ngOnChanges(): void {
    this.calculatePercentage();
  }

  private calculatePercentage(): void {
    if (this.total === 0) {
      this.percentage = 0;
      return;
    }
    this.percentage = Math.round((this.current / this.total) * 100);
    if (this.percentage > 100) this.percentage = 100;
  }
}
