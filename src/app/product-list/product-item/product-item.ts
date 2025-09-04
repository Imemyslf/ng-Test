import { Component, input } from '@angular/core';
import { ProductType } from '../product-list.modal';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input<ProductType | undefined>();
}
