import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-home',
  imports: [ProductList, Nav],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
