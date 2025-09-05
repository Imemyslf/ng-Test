import { Component, input } from '@angular/core';
import { ProductType } from '../product-list.modal';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CurrencyPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input<ProductType | undefined>();
}
