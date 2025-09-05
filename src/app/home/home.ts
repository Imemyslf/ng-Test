import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Category } from '../category/category';
import { AddCart } from '../add-cart/add-cart';

@Component({
  selector: 'app-home',
  imports: [ProductList, Category, AddCart],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
