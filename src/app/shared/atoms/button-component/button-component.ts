import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-component',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() classCustom: string = '';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() dataBsToggle: string = '';
  @Input() ariaExpanded: boolean = false;
}
