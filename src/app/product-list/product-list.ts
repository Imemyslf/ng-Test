import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product-list.service';
import { ProductItemTypeCom, ProductType } from './product-list.modal';
import { ProductItem } from './product-item/product-item';
import { products } from '../../DATA/DUMMY_DATA';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
// export class ProductList implements OnInit {
export class ProductList {
  private destroyRef = inject(DestroyRef);
  private productService = inject(ProductService);

  // gettingProducts = signal<ProductType[]>([]);
  isFetching = signal(false);
  error = signal('');
  choice = signal(true);
  isCatselected = this.productService.loadIsCategorySelected;

  gettingProducts = computed(() => {
    if (this.productService.loadIsCategorySelected()) {
      return this.productService.loadedProducts();
    } else {
      return products;
    }
  });

  selectedProductView(id: number) {}

  // ngOnInit() {
  //   this.isFetching.set(true);
  //   console.log(
  //     'this.productService.loadIsCategorySelected:',
  //     this.productService.loadIsCategorySelected()
  //   );
  //   if (this.productService.loadIsCategorySelected()) {
  //     this.gettingProducts.set(this.productService.loadedProducts());
  //   } else {
  //     this.gettingProducts.set(products);
  //     console.log('this.gettingProducts():', this.gettingProducts());
  //   }
  //   this.isFetching.set(false);

  //   // const subscription = this.productService.loadProducts().subscribe({
  //   //   next: (data) => {
  //   //     // if (this.isCatselected === this.choice) {
  //   //     //   console.log(this.productService.loadedCategories);
  //   //     // } else {
  //   //     // this.gettingProducts.set(this.productService.getLimitedProducts(0, 10));
  //   //     // }
  //   //     this.gettingProducts.set(data);
  //   //     console.log('Subscribe:- ', data);
  //   //   },
  //   //   error: (error) => {
  //   //     console.error(error);
  //   //     this.error.set(error);
  //   //   },
  //   //   complete: () => this.isFetching.set(false),
  //   // });
  //   // this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}
