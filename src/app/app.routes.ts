import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BranchComponent } from './pages/branch/branch.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Coffee Shop — Fresh Coffee, Handcrafted Daily' },
  { path: 'about', component: AboutComponent, title: 'About — Coffee Shop' },
  { path: 'menu', component: MenuComponent, title: 'Menu — Coffee, Espresso & Cold Brew' },
  { path: 'branch', component: BranchComponent, title: 'Our Locations — Coffee Shop' },
  { path: 'contact', component: ContactComponent, title: 'Contact & Reservations — Coffee Shop' },
  { path: '**', redirectTo: '' },
];
