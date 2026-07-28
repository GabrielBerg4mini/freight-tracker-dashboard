import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../../core/services/api/api';
import { ClientDto, mapClientDtoToClient } from './client.dto';
import { BehaviorSubject, tap, map, Observable } from 'rxjs';
import { Client } from '../../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {

  private apiService = inject(ApiService);

  private readonly clientsSubject$ = new BehaviorSubject<Client[]>([]);
  readonly clients$ = this.clientsSubject$.asObservable();

  loadClients(): Observable<Client[]> {
    return this.apiService.get<ClientDto[]>('/clients').pipe(
      map((response) => response.data.map(mapClientDtoToClient)),
      tap((clients) => this.clientsSubject$.next(clients))
    );
  }
}
