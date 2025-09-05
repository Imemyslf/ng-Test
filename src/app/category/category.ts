import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../product-list/product-list.service';

interface data {
  id: number;
  name: string;
  slug: string;
  image: string;
}

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  categories = signal<data[]>([]);

  ngOnInit(): void {
    const subscription = this.productService.getCategories().subscribe({
      next: (data) => {
        console.log('Category Data:', data);
        this.categories.set(data.slice(0, 8));
        console.log('Category Component:', this.categories);
      },
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
