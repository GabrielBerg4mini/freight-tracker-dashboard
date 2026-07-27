import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field-component',
  imports: [],
  templateUrl: './form-field-component.html',
  styleUrl: './form-field-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  @Input() name: string = '';
  @Input() textLabel: string = '';
}
