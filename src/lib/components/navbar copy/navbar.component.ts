import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavbarItem {
  id: string;
  label: string;
  labelLine2?: string;
  icon: string;
  active?: boolean;
  children?: NavbarItem[];
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

  activeSubmenu: string | null = null;

  onItemClick(item: NavbarItem, event?: Event) {
    if (item.children && item.children.length > 0) {
      if (event) {
        event.stopPropagation();
      }
      this.activeSubmenu = this.activeSubmenu === item.id ? null : item.id;
      return;
    }

    this.activeSubmenu = null;
    // Desativa todos os itens antes de ativar o clicado
    this.items.forEach(i => i.active = false);
    if (this.rightItem) this.rightItem.active = false;

    item.active = true;
    this.itemClick.emit(item);
  }

  onMouseEnter(item: NavbarItem) {
    if (item.children && item.children.length > 0) {
      this.activeSubmenu = item.id;
    }
  }

  onMouseLeave() {
    this.activeSubmenu = null;
  }

  onSubItemClick(parent: NavbarItem, subItem: NavbarItem, event: Event) {

    event.stopPropagation();
    
    this.items.forEach(i => i.active = false);
    parent.active = true;
    
    // In a real app we might want to track the active subitem too
    this.activeSubmenu = null;
    this.itemClick.emit(subItem);
  }

  closeSubmenu() {
    this.activeSubmenu = null;
  }
}
