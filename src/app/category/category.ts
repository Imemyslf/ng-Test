import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../product-list/product-list.service';
import { categories, products } from '../../DATA/DUMMY_DATA';
import { CategoryType } from './category.modal';
import { ProductType } from '../product-list/product-list.modal';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
// export class Category implements OnInit {
export class Category {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  categories = signal<CategoryType[]>(categories.slice(0, 5));
  private products = signal<ProductType[]>(products);
  // selectedCategories = signal<number[]>([]);

  // ngOnInit(): void {
  //   const subscription = this.productService.getCategories().subscribe({
  //     next: (data) => {
  //       console.log('Category Data:', data);
  //       this.categories.set(data.slice(0, 8));
  //       console.log('Category Component:', this.categories);
  //     },
  //   });
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }

  selectCategory(category: CategoryType) {
    const categoryProducts = this.products().filter((product) => {
      return product.category.id === category.id;
    });
    console.log('categoryProducts:', categoryProducts);
    this.productService.getCategoryProduct(categoryProducts);
  }

  resetProducts() {
    this.productService.resetProducts();
  }

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
