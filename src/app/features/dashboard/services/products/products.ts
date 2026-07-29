import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../../core/services/api/api';
import { ProductDto, mapProductDtoToProduct } from './product.dto';
import { BehaviorSubject, tap, map, Observable } from 'rxjs';
import { Product } from '../../models/product';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private apiService = inject(ApiService);

  private readonly productsSubject$ = new BehaviorSubject<Product[]>([]);
  readonly products$ = this.productsSubject$.asObservable();

  loadProducts(): Observable<Product[]> {
    return this.apiService.get<ProductDto[]>('/products').pipe(
      map((response) => response.data.map(mapProductDtoToProduct)),
      tap((products) => this.productsSubject$.next(products))
    );
  }
}
