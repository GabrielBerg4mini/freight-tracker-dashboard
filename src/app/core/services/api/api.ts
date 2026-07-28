import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../models/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private readonly url: string = environment.apiUrl;

  private http = inject(HttpClient);

  get<T>(endpoint: string): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(
      this.buildUrl(endpoint)
    )
  }

  post<T>(endpoint: string, body: any): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(
      this.buildUrl(endpoint),
      body
    )
  }

  put<T>(endpoint: string, body: any): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(
      this.buildUrl(endpoint),
      body
    )
  }

  delete<T>(endpoint: string): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(
      this.buildUrl(endpoint)
    )
  }

  private buildUrl(endpoint: string): string {
    const path = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `${this.url}/${path}`;
  }

}
