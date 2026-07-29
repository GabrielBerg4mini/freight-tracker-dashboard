import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../../core/services/api/api';
import { BehaviorSubject, tap, map, Observable } from 'rxjs';
import { FreightDto, mapFreightDtoToFreight } from './freight.dto';
import { Freight } from '../../models/freight';

@Injectable({
  providedIn: 'root',
})
export class FreightsService {

  private freghtsSubject = new BehaviorSubject<Freight[]>([]);
  readonly freghts$ = this.freghtsSubject.asObservable();

  private apiService = inject(ApiService);

  loadFreights(): Observable<Freight[]> {
    return this.apiService.get<FreightDto[]>('/freights').pipe(
      map((response) => response.data.map(mapFreightDtoToFreight)),
      tap((freights) => this.freghtsSubject.next(freights))
    );
  }
}
