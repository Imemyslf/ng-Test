import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product-list.service';
import { ProductItemType, ProductType } from './product-list.modal';
import { ProductItem } from './product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  private destroyRef = inject(DestroyRef);
  private productService = inject(ProductService);

  gettingProducts = signal<ProductItemType[]>([]);
  isFetching = signal(false);
  error = signal('');
  choice = signal(true);
  isCatselected = this.productService.loadIsCategorySelected;

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.productService.loadProducts().subscribe({
      next: (data) => {
        // if (this.isCatselected === this.choice) {
        //   console.log(this.productService.loadedCategories);
        // } else {
        // this.gettingProducts.set(this.productService.getLimitedProducts(0, 10));
        // }
        this.gettingProducts.set(data);
        console.log('Subscribe:- ', data);
      },
      error: (error) => {
        console.error(error);
        this.error.set(error);
      },
      complete: () => this.isFetching.set(false),
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
