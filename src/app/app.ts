import { Component, signal } from '@angular/core';
import { Authenticate } from './authenticate/authenticate';
import { ProductList } from './product-list/product-list';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
