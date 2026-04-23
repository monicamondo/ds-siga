import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
  @Input() selectedModule: { id: string; label: string; labelLine1?: string; labelLine2?: string; icon?: string } | null = null;
  @Input() availableModules: Array<{ id: string; label: string; labelLine1?: string; labelLine2?: string; icon?: string }> = [];
  @Input() selectedAirport: { code: string; country?: string } | null = null;
  
  @Input() currentDayOfWeek: string = 'JUEVES';
  @Input() currentDate: string = '16/09/2025';
  
  @Input() currentTime: string = '09:00';
  @Input() utcTime: string = '12:00';

  @Input() currentLanguage: string = 'ES';
  
  @Input() logoUrl: string = 'latam-logo.png'; 

  @Output() logout = new EventEmitter<void>();
  @Output() moduleSelected = new EventEmitter<any>();
  @Output() languageSelected = new EventEmitter<string>();

  isModuleMenuOpen = false;
  isLanguageMenuOpen = false;
  isUserMenuOpen = false;

  availableLanguages = [
    { code: 'PT', label: 'Português' },
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' }
  ];

  userMenuItems = [
    { label: 'Trocar Senha', action: 'password' },
    { label: 'Minha Conta', action: 'account' },
    { label: 'Sair', action: 'logout', divider: true }
  ];

  toggleModuleMenu(event: Event) {
    event.stopPropagation();
    const currentState = this.isModuleMenuOpen;
    this.closeMenus();
    this.isModuleMenuOpen = !currentState;
  }

  toggleLanguageMenu(event: Event) {
    event.stopPropagation();
    const currentState = this.isLanguageMenuOpen;
    this.closeMenus();
    this.isLanguageMenuOpen = !currentState;
  }

  toggleUserMenu(event: Event) {
    event.stopPropagation();
    const currentState = this.isUserMenuOpen;
    this.closeMenus();
    this.isUserMenuOpen = !currentState;
  }

  onModuleClick(module: any) {
    this.selectedModule = module;
    this.closeMenus();
    this.moduleSelected.emit(module);
  }

  onLanguageClick(lang: any) {
    this.currentLanguage = lang.code;
    this.closeMenus();
    this.languageSelected.emit(lang.code);
  }

  onUserAction(item: any) {
    this.closeMenus();
    if (item.action === 'logout') {
      this.logout.emit();
    }
  }

  // Close dropdown when clicking outside
  @HostListener('document:click')
  closeMenus() {
    this.isModuleMenuOpen = false;
    this.isLanguageMenuOpen = false;
    this.isUserMenuOpen = false;
  }
}
