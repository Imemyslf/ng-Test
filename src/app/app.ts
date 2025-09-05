import { Component } from '@angular/core';
import { Authenticate } from './authenticate/authenticate';
import { ProductList } from './product-list/product-list';
import { Home } from './home/home';
import { Nav } from './nav/nav';
import { Category } from './category/category';
import { AddCart } from './add-cart/add-cart';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
