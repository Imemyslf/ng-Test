import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import type { UserType } from './sign-in/sign-in.modal';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);

  constructor() {
    // this.getUserDetails();
    // this.getUserDetails(1);
  }

  userSignIn(user: UserType) {
    this.httpClient
      .post(
        'https://api.escuelajs.co/api/v1/users/',
        {
          user,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .subscribe({
        next: (data) => console.log(data),
      });
  }

  getUserDetails(id?: number) {
    console.log('getting user details');
    const userData = signal<UserType | undefined>(undefined);
    if (id) {
      this.httpClient.get<UserType>(`https://api.escuelajs.co/api/v1/users/${id}`).subscribe({
        next: (data) => {
          console.log(data);
          userData.set(data);
        },
      });
    } else {
      this.httpClient.get<UserType[]>(`https://api.escuelajs.co/api/v1/users`).subscribe({
        next: (data) => {
          console.log(data);
        },
      });
    }
    console.log('User details', userData());
    return userData;
  }

  userLogIn(user: UserType) {
    console.log({ name: user.email, email: user.password });
    this.httpClient
      .post<{ access_token: String; refresh_token: String }>(
        `https://api.escuelajs.co/api/v1/auth/login`,
        user,
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        })
        // catchError((err) => {
        //   console.log(err);
        // })
      );
  }
}
