import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductType } from './product-list.modal';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);
  private products = signal<ProductType[]>([]);

  loadedProducts = this.products.asReadonly();

  loadProducts() {
    return this.fetchProducts('https://api.escuelajs.co/api/v1/products');
  }

  getLimitedProducts(offset: number, limit: number) {
    return this.products().slice(offset, offset + limit);
  }

  private fetchProducts(url: string) {
    return this.httpClient.get<ProductType[]>(url).pipe(
      map((data) => {
        this.products.set(data);
        return data;
      }),
      catchError((error) => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }
}
