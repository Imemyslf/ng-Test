import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryType, ProductType } from './product-list.modal';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);
  private products = signal<ProductType[]>([]);
  private categoryList = signal<string[]>([]);

  loadedProducts = this.products.asReadonly();

  loadProducts() {
    return this.fetchProducts('https://api.escuelajs.co/api/v1/products');
  }

  getLimitedProducts(offset: number, limit: number) {
    return this.products().slice(offset, offset + limit);
  }

  getCategories() {
    const prod = this.fetchCategories('https://api.escuelajs.co/api/v1/categories');
    console.log(prod);
    return prod;
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

  private fetchCategories(url: string) {
    return this.httpClient.get<CategoryType[]>(url).pipe(
      map((data) => {
        // const uniqueNames: string[] = [...new Set(data.map((category) => category.name))];
        // console.log(uniqueNames);
        // this.categoryList.set(uniqueNames);
        return data;
      }),
      catchError((error) => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }
}
