import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductItemTypeCom, ProductItemTypeIn, ProductType } from './product-list.modal';
import { catchError, map } from 'rxjs';
import { CategoryType } from '../category/category.modal';
import { products } from '../../DATA/DUMMY_DATA';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);
  private products = signal<ProductType[]>(products);
  private newproducts = signal<ProductType[]>([]);
  private categoryProduct = signal<ProductType[]>([]);
  private isCategorySelected = signal<boolean>(false);
  // private newProducts = signal<ProductType[]>([]);

  loadedProducts = this.products.asReadonly();
  loadIsCategorySelected = this.isCategorySelected.asReadonly();
  loadedCategories = computed(() => {
    const newProducts = [...this.products()];
    // return newProducts.filter((product) => product.category.name === this.categoryProduct.name);
  });

  loadProducts() {
    return this.fetchProducts('https://fakestoreapi.com/products');
  }

  getLimitedProducts(offset: number, limit: number) {
    return this.products().slice(offset, offset + limit);
  }

  getCategories() {
    const prod = this.fetchCategories('https://api.escuelajs.co/api/v1/categories');
    console.log(prod);
    return prod;
  }

  getCategoryProduct(categoryProduct: ProductType[]) {
    // console.log('Inside getCategoryProducts');
    this.isCategorySelected.set(true);
    const newProducts = categoryProduct;
    this.products.set(newProducts);
    // console.log('this.products():', this.products());
    // console.log('this.loadedProducts():', this.loadedProducts());
    // console.log('Fetching products for category ID:', categoryId);
    // return this.fetchCategoryProduct(`https://api.escuelajs.co/api/v1/categories/${categoryId}`);
  }

  resetProducts() {
    console.log(products);
    return this.products.set(products);
  }

  private fetchProducts(url: string) {
    return this.httpClient.get<ProductType[]>(url).pipe(
      map((data) => {
        this.products.set(data);
        console.log('Products:- ', this.products);
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
    return this.httpClient.get<CategoryType>(url).pipe(
      map((data) => {
        this.isCategorySelected.set(true);
        return data;
      })
    );
  }
}

// { status: string; message: string; products: ProductItemTypeIn[] }
