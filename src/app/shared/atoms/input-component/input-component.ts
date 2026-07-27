import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  imports: [ReactiveFormsModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() classCustom: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() isInput: boolean = true;
  @Input() isTextarea: boolean = false;
  @Input() rows: number = 3;
}
