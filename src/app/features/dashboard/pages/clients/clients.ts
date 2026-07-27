import { Component } from '@angular/core';
import { SidebarComponent } from '../../../../shared/organisms/sidebar-component/sidebar-component';

@Component({
  selector: 'app-clients',
  imports: [SidebarComponent],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients {}
