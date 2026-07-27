import { Component } from '@angular/core';
import { RegisterFormComponent } from '../../../../shared/organisms/register-form-component/register-form-component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth/auth';
import { LoadingService } from '../../../../core/services/loading/loading';
import { ToastService } from '../../../../core/services/toast/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [RegisterFormComponent],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {

 signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    protected readonly loadingService: LoadingService,
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    this.loadingService.show();

    const { name, email, password, password_confirmation } = this.signUpForm.value;

    this.authService.register(name, email, password, password_confirmation).subscribe({
      next: (response) => {
        this.loadingService.hide();
        this.toastService.show(response.message, 'success');
        this.router.navigate(['/dashboard/clients']);
      },
      error: (error) => {
        this.loadingService.hide();
        this.toastService.show(error?.error?.message ?? 'Erro ao fazer cadastro', 'error');
      },
    });
  }

}
