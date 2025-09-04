import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Nav } from '../nav/nav';
import { Category } from '../category/category';

@Component({
  selector: 'app-home',
  imports: [ProductList, Nav, Category],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
