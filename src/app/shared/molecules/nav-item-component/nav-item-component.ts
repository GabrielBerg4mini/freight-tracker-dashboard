import { Component, Input } from '@angular/core';
import { LinkComponent } from '../../atoms';

@Component({
  selector: 'app-nav-item-component',
  imports: [LinkComponent],
  templateUrl: './nav-item-component.html',
  styleUrl: './nav-item-component.scss',
})
export class NavItemComponent {
  @Input() textLink: string = '';
  @Input() href: string = '';
  @Input() nameIcon: string = '';
  isActive = false;
}
