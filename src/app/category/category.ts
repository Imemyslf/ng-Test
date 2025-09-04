import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../product-list/product-list.service';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit {
  private productService = inject(ProductService);
  categories = signal<string[]>([]);

  ngOnInit(): void {
    const subscription = this.productService.getCategories().subscribe({
      next: (data) => {
        this.categories.set(data.map((category) => category.name));
        console.log('Category Component:', this.categories);
      },
    });
  }
}
