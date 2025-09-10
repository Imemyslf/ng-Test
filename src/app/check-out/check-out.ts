import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductType } from '../product-list/product-list.modal';
import { CurrencyPipe } from '@angular/common';
import { UserType } from '../authenticate/sign-in/sign-in.modal';
import { AuthService } from '../authenticate/auth.service';

@Component({
  selector: 'app-check-out',
  imports: [CurrencyPipe],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css',
})
export class CheckOut implements OnInit {
  // private cartService = inject(AddCartService);
  cartItems = signal<ProductType[]>([]);
  private authService = inject(AuthService);
  randomUser = signal<UserType | undefined>(undefined);
  totalPrice: number = 0;

  ngOnInit(): void {
    const savedForm = window.localStorage.getItem('cart-item');

    if (savedForm) {
      const { cartItems } = JSON.parse(savedForm);
      this.cartItems.set(cartItems);
    }

    const newRandomUser = this.authService.getUserDetails(1);
    console.log(newRandomUser, 'Data');
    // this.randomUser.set(newRandomUser);

    for (let item of this.cartItems()) {
      console.log(item.price);
      this.totalPrice += item.price;
      console.log(this.totalPrice);
    }
    console.log('Final', this.totalPrice);
  }
}
