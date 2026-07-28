import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import {  LogoComponent,
  ButtonComponent,
  DividerComponent,
  InputComponent,
  LinkComponent } from '../../atoms/index';
import { FormFieldComponent, PasswordToggleComponent } from '../../molecules/index';
import { ReactiveFormsModule, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-register-form-component',
  imports: [LogoComponent,
    ButtonComponent,
    DividerComponent,
    LinkComponent,
    InputComponent,
    FormFieldComponent,
    PasswordToggleComponent,
    ReactiveFormsModule],
  templateUrl: './register-form-component.html',
  styleUrl: './register-form-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  @Input() signUpForm: FormGroup = new FormGroup({});
  @Input() loading: boolean = false;
  @Output() formSubmit = new EventEmitter<void>();
}
