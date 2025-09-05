import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryType, ProductType } from './product-list.modal';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);
  private products = signal<ProductType[]>([]);
  private newproducts = signal<ProductType[]>([]);
  private categoryProduct = signal<CategoryType[]>([]);
  private isCategorySelected = signal(false);
  // private newProducts = signal<ProductType[]>([]);

  loadedProducts = this.products.asReadonly();
  loadIsCategorySelected = this.isCategorySelected.asReadonly();
  loadedCategories = computed(() => {
    const newProducts = [...this.products()];
    return newProducts.filter((product) => product.category.name === this.categoryProduct.name);
  });

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

  getCategoryProduct(categoryId: number) {
    console.log('Fetching products for category ID:', categoryId);
    return this.fetchCategoryProduct(`https://api.escuelajs.co/api/v1/categories/${categoryId}`);
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
        return data;
      }),
      catchError((error) => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }

  private fetchCategoryProduct(url: string) {
    console.log('Fetching category products from URL:', url);
    return this.httpClient.get<CategoryType[]>(url).pipe(
      map((data) => {
        this.categoryProduct.set(data);
        this.isCategorySelected.set(true);
        return data;
      })
    );
  }
}
