import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';

export interface TableColumn {
  key: string;
  label: string;
  align?: 'start' | 'center' | 'end';
  type?: 'text' | 'badge';
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'blue' | 'default';
  // Se o variant for dinamico da linha, podemos passar pelo row
}

@Component({
  selector: 'siga-table',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T extends Record<string, any>> {
  @Input() columns: TableColumn[] = [];
  @Input() rows: T[] = [];
  @Input() striped: boolean = true;
  @Input() hoverable: boolean = true;
  @Input() emptyMessage: string = 'Nenhum item encontrado.';

  @ContentChild('rowActions', { static: false }) rowActionsTpl?: TemplateRef<any>;
}
