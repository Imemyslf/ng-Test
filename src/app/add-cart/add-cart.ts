import { Component, inject } from '@angular/core';
import { AppCatService } from './add-cart.service';

@Component({
  selector: 'app-add-cart',
  imports: [],
  templateUrl: './add-cart.html',
  styleUrl: './add-cart.css',
})
export class AddCart {
  private cartService = inject(AppCatService);
  cartItem = this.cartService.loadedCartItems;
  
}
