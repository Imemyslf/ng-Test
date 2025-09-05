import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../product-list/product-list.service';
import { CategoryType } from '../product-list/product-list.modal';

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
  selectedCategories = signal<number[]>([]);

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

  selectCategory(categoryId: number) {
    console.log('Selected Category ID:', categoryId);
    // const subscription = this.productService.getCategoryProduct(categoryId).subscribe({
    //   next: (data) => {
    //     console.log('Products for Selected Category:', data.name);
    //     console.log('Products:- ', this.productService.loadedProducts());
    //     const categoryProducts = this.productService.loadedProducts().filter((product) => {
    //       console.log(product.category.name, ' and ', data.name);
    //       product.category.name === data.name;
    //     });
    //     console.log(categoryProducts);
    //   },
    // });

    // this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
