import { Component, inject, input } from '@angular/core';
import { ProductItemType, ProductType } from '../product-list.modal';
import { CurrencyPipe } from '@angular/common';
import { AppCatService } from '../../add-cart/add-cart.service';

@Component({
  selector: 'app-product-item',
  imports: [CurrencyPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input<ProductItemType | undefined>();
  private cartService = inject(AppCatService);

  selectedItem(id: number | undefined) {
    console.log('Add to cart', id);
    this.cartService.addCartItem(id!);
  }
}
