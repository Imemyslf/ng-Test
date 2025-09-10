import { Component, inject, input } from '@angular/core';
import { ProductItemTypeCom, ProductType } from '../product-list.modal';
import { CurrencyPipe } from '@angular/common';
import { AddCartService } from '../../add-cart/add-cart.service';

@Component({
  selector: 'app-product-item',
  imports: [CurrencyPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input<ProductType | undefined>();
  private cartService = inject(AddCartService);

  selectedItem(id: number | undefined) {
    console.log('Add to cart', id);
    this.cartService.addCartItem(id!);
  }
}
