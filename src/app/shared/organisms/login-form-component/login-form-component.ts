import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import {  AppLogoComponent,
  ButtonComponent,
  DividerComponent,
  InputComponent,
  LinkComponent } from '../../atoms/index';
import { FormFieldComponent } from '../../molecules/form-field-component/form-field-component';
import { ReactiveFormsModule, FormGroup } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login-form-component',
  imports: [AppLogoComponent,
    ButtonComponent,
    DividerComponent,
    LinkComponent,
    InputComponent,
    FormFieldComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

  @Input() loginForm: FormGroup = new FormGroup({});
  @Output() formSubmit = new EventEmitter<void>();
}
