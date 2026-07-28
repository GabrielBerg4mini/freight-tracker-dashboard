import { inject, Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { ApiResponse } from '../../models/api-response';
import { ApiService } from '../api/api';
import { StorageService } from '../storage/storage';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private storageService = inject(StorageService);
  private apiService = inject(ApiService);

  private tokenSubject$ = new BehaviorSubject<string | null>(this.storageService.getItem<string>('authToken'));

  constructor() {
    this.tokenSubject$.subscribe((token) => {
      if (token) {
        this.storageService.setItem('authToken', token);
      } else {
        this.storageService.removeItem('authToken');
      }
    });
  }

  login(email: string, password: string): Observable<ApiResponse<LoginResponse>> {
    return this.apiService.post<LoginResponse>('auth/sign-in', { email, password }).pipe(
      tap((response) => this.tokenSubject$.next(response.data.token))
    );
  }

  register(name: string, email: string, password: string, passwordConfirmation: string): Observable<ApiResponse<LoginResponse>> {
    return this.apiService.post<LoginResponse>('auth/sign-up', { name, email, password, passwordConfirmation }).pipe(
      tap((response) => this.tokenSubject$.next(response.data.token))
    );
  }

  logout(): void {
    this.tokenSubject$.next(null);
  }

  isLoggedIn(): boolean {
    const token = this.tokenSubject$.value;
    return !!token;
  }

}
