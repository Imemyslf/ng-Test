import { inject, Injectable, signal } from '@angular/core';
import { ProductService } from '../product-list/product-list.service';
import { ProductType } from '../product-list/product-list.modal';
import { CategoryType } from '../category/category.modal';

@Injectable({
  providedIn: 'root',
})
export class AddCartService {
  private cartItems = signal<ProductType[]>([]);
  private productService = inject(ProductService);
  private products = this.productService.loadedProducts;
  private isAddCartSelected = signal<boolean>(false);

  loadedCartItems = this.cartItems.asReadonly();
  loadedIsAddCartSelected = this.isAddCartSelected;

  addCartItem(id: number) {
    this.isAddCartSelected.set(true);
    const foundItem = this.products().find((product) => {
      console.log('product:', product);
      return product.id === id;
    });
    if (!foundItem) return;
    console.log('Found Item:- ', foundItem);
    const isPresentInCart: ProductType | undefined = this.cartItems().find(
      (item) => item.id === foundItem.id
    );
    console.log('isPresentInCart:- ', isPresentInCart);
    console.log('typeof isPresentInCart:- ', typeof isPresentInCart);

    if (typeof isPresentInCart === 'object') {
      return;
    }
    this.cartItems.update((oldData) => [...oldData, foundItem]);
    console.log('CartItems', this.cartItems());
    console.log('this.loadedCartItems:', this.loadedCartItems());
    this.saveCartItems();
  }

  removeCartItem(itemId: number) {
    this.cartItems.update((oldItems) => oldItems.filter((item) => item.id !== itemId));
    console.log('this.cartItems() inside remove removeCart:', this.cartItems());
    if (this.cartItems().length === 0) {
      this.isAddCartSelected.set(false);
    }
  }

  saveCartItems() {
    console.log('Save Cart Items', this.cartItems());
    window.localStorage.setItem('cart-item', JSON.stringify({ cartItems: this.cartItems() }));
  }
}
