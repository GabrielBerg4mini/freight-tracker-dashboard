import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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

  constructor(private apiService: ApiService, private storageService: StorageService) {}

  login(email: string, password: string): Observable<ApiResponse<LoginResponse>> {
    return this.apiService.post<LoginResponse>('auth/sign-in', { email, password }).pipe(
      tap((response) => this.storageService.setItem('authToken', response.data.token))
    );
  }

  register(name: string, email: string, password: string, passwordConfirmation: string): Observable<ApiResponse<LoginResponse>> {
    return this.apiService.post<LoginResponse>('auth/sign-up', { name, email, password, passwordConfirmation }).pipe(
      tap((response) => this.storageService.setItem('authToken', response.data.token))
    );
  }

  logout(): void {
    this.storageService.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    const token = this.storageService.getItem('authToken');
    return !!token;
  }

}
