import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownItemComponent } from '../../molecules/dropdown-item-component/dropdown-item-component';
import { AuthService } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-header-component',
  imports: [DropdownItemComponent],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
