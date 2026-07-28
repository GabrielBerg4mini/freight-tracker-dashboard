import { Component, EventEmitter, Output } from '@angular/core';
import { NavItemComponent } from '../nav-item-component/nav-item-component';

@Component({
  selector: 'app-dropdown-item-component',
  imports: [NavItemComponent],
  templateUrl: './dropdown-item-component.html',
  styleUrl: './dropdown-item-component.scss',
})
export class DropdownItemComponent {
  @Output() logout = new EventEmitter<void>();
}
