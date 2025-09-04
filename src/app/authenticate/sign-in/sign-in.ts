import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { User } from './sign-in.modal';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn implements OnInit {
  loadedUsersDetails: User[] = [];
  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient.get<User[]>('https://api.escuelajs.co/api/v1/users').subscribe({
      next: (data) => {
        this.loadedUsersDetails = data;
        console.log('User data loaded successfully:', this.loadedUsersDetails);
      },
    });
  }
}
