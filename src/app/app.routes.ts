import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { authGuard } from './core/guards/auth-guard';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('./features/auth/pages/sign-in/sign-in').then((m) => m.SignIn),
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./features/auth/pages/sign-up/sign-up').then((m) => m.SignUp),
      },
    ]
  },
  {
    path: 'dashboard',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'clients',
        loadComponent: () => import('./features/dashboard/pages/clients/clients').then((m) => m.Clients),
      },
    ]
  },
];
