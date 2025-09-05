import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import type { UserType } from './sign-in/sign-in.modal';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isSignIn = signal(false);
  isLogIn = signal(false);

  private httpClient = inject(HttpClient);

  constructor() {
    this.getUserDetails();
    this.getUserDetails(1);
  }
  userSignIn(user: UserType) {
    this.httpClient
      .post('https://api.escuelajs.co/api/v1/users/', {
        user,
      })
      .subscribe({
        next: (data) => console.log(data),
      });
  }

  getUserDetails(id?: number) {
    if (id) {
      this.httpClient.get(`https://api.escuelajs.co/api/v1/users/${id}`).subscribe({
        next: (data) => console.log(data),
      });
    } else {
      this.httpClient.get(`https://api.escuelajs.co/api/v1/users`).subscribe({
        next: (data) => console.log(data),
      });
    }
  }
}
