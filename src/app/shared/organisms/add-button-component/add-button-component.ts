import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../../atoms/button-component/button-component';

@Component({
  selector: 'app-add-button-component',
  imports: [ButtonComponent],
  templateUrl: './add-button-component.html',
  styleUrl: './add-button-component.scss',
})
export class AddButtonComponent {
  @Input() textButton: string = '';
  @Output() addClick = new EventEmitter<void>();
}
