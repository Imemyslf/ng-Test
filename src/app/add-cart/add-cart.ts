import { Component, inject } from '@angular/core';
import { AddCartService } from './add-cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './add-cart.html',
  styleUrl: './add-cart.css',
})
export class AddCart {
  private cartService = inject(AddCartService);
  cartItem = this.cartService.loadedCartItems;
  catItemSlected = this.cartService.loadedIsAddCartSelected;

  removeItemFromCart(itemId: number) {
    this.cartService.removeCartItem(itemId);
  }
}
