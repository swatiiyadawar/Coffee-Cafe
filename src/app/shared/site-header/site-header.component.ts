import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({ selector: 'app-site-header', standalone: true, imports: [RouterLink, RouterLinkActive], templateUrl: './site-header.component.html' })
export class SiteHeaderComponent {
  menuOpen = false;
  toggleMenu(): void { this.menuOpen = !this.menuOpen; document.body.classList.toggle('nav-open', this.menuOpen); }
  closeMenu(): void { this.menuOpen = false; document.body.classList.remove('nav-open'); }
  @HostListener('document:keydown.escape') onEscape(): void { this.closeMenu(); }
}
