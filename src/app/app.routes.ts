import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SignIn } from './authenticate/sign-in/sign-in';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'sign-up',
    component: SignIn,
  },
];
