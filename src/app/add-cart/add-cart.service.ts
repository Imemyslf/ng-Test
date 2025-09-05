import { inject, Injectable, signal } from '@angular/core';
import { ProductService } from '../product-list/product-list.service';
import { ProductType } from '../product-list/product-list.modal';

@Injectable({
  providedIn: 'root',
})
export class AppCatService {
  private cartItems = signal<ProductType | undefined>(undefined);
  private productService = inject(ProductService);
  private products = this.productService.loadedProducts;

  loadedCartItems = this.cartItems.asReadonly();

  addCartItem(id: number) {
    const foundItem = this.products().find((product) => product.id === id);
    console.log('Found Item:- ', foundItem);
    this.cartItems.set(foundItem);
    // this.cartItems.update((oldData) => {
    //   [...oldData, foundItem];
    // });
    console.log(this.cartItems);
  }
}
