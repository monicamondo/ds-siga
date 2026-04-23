import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavbarItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

@Component({
  selector: 'siga-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() items: NavbarItem[] = [];
  @Input() rightItem?: NavbarItem;
  
  @Output() itemClick = new EventEmitter<NavbarItem>();

  onItemClick(item: NavbarItem) {
    // Desativa todos os itens antes de ativar o clicado
    this.items.forEach(i => i.active = false);
    if (this.rightItem) this.rightItem.active = false;

    item.active = true;
    this.itemClick.emit(item);
  }
}
