import { Component, input } from '@angular/core';
import { ProductType } from '../product-list.modal';

@Component({
  selector: 'app-product-view',
  imports: [],
  templateUrl: './product-view.html',
  styleUrl: './product-view.css',
})
export class ProductView {
  product = input.required<ProductType>();
}
