import { Component } from '@angular/core';
import { LoginFormComponent } from '../../../../shared/organisms/login-form-component/login-form-component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth/auth';
import { LoadingService } from '../../../../core/services/loading/loading';
import { ToastService } from '../../../../core/services/toast/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [LoginFormComponent],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    protected readonly loadingService: LoadingService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loadingService.show();

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.loadingService.hide();
        this.toastService.show(response.message, 'success');
        this.router.navigate(['/dashboard/clients']);
      },
      error: (error) => {
        this.loadingService.hide();
        this.toastService.show(error?.error?.message ?? 'Erro ao fazer login', 'error');
      },
    });
  }

}
