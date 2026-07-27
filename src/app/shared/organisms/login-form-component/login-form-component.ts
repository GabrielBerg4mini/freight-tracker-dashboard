import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import {  LogoComponent,
  ButtonComponent,
  DividerComponent,
  InputComponent,
  LinkComponent } from '../../atoms/index';
import { FormFieldComponent, PasswordToggleComponent } from '../../molecules/index';
import { ReactiveFormsModule, FormGroup } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login-form-component',
  imports: [LogoComponent,
    ButtonComponent,
    DividerComponent,
    LinkComponent,
    InputComponent,
    FormFieldComponent,
    PasswordToggleComponent,
    ReactiveFormsModule, RouterLink],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

  @Input() loginForm: FormGroup = new FormGroup({});
  @Input() loading: boolean = false;
  @Output() formSubmit = new EventEmitter<void>();
}
