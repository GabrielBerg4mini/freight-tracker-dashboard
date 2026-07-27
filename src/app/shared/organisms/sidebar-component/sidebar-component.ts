import { Component } from '@angular/core';
import { NavItemComponent } from '../../molecules/nav-item-component/nav-item-component';
import { LogoComponent } from '../../atoms/logo-component/logo-component';

@Component({
  selector: 'app-sidebar-component',
  imports: [NavItemComponent, LogoComponent],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss',
})
export class SidebarComponent {}
