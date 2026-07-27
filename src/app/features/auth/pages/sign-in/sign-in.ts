import { Component } from '@angular/core';
import { LoginFormComponent } from '../../../../shared/organisms/login-form-component/login-form-component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [LoginFormComponent],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Any initialization logic can go here
  }

  onSubmit() {
    console.log('Form submitted:', this.loginForm.value);
  }

}
