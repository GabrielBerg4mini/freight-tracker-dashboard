import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('./features/auth/pages/sign-in/sign-in').then((m) => m.SignIn),
      }
    ]
  }
];
