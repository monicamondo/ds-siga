import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'siga-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;
  @Input() pageSizeOptions: number[] = [10, 25, 50, 100];

  @Output() pageChanged = new EventEmitter<number>();
  @Output() pageSizeChanged = new EventEmitter<number>();

  totalPages: number = 1;
  pages: number[] = [];
  showFirstEllipsis: boolean = false;
  showLastEllipsis: boolean = false;

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize) || 1;
    const delta = 2;
    const start = Math.max(1, this.currentPage - delta);
    const end = Math.min(this.totalPages, this.currentPage + delta);
    this.pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    this.showFirstEllipsis = this.pages[0] > 2;
    this.showLastEllipsis = this.pages[this.pages.length - 1] < this.totalPages - 1;
  }

  goTo(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChanged.emit(page);
    }
  }

  onPageSizeChange(event: Event): void {
    this.pageSizeChanged.emit(Number((event.target as HTMLSelectElement).value));
  }
}
