import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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
  @Input() onClick: () => void = () => {};
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}
