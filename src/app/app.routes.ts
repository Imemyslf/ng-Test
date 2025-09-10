import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SignIn } from './authenticate/sign-in/sign-in';
import { LogIn } from './authenticate/log-in/log-in';
import { CheckOut } from './check-out/check-out';
import { ProductView } from './product-list/product-view/product-view';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'product/:productId',
    component: ProductView,
  },
  {
    path: 'sign-up',
    component: SignIn,
  },
  {
    path: 'log-in',
    component: LogIn,
  },
  {
    path: 'check-out',
    component: CheckOut,
  },
];
