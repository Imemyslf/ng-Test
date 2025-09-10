import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserType } from './sign-in.modal';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  private authService = inject(AuthService);

  onSubmit() {
    if (this.form.invalid) {
      console.log('Invalid form', this.form);
      return;
    }
    console.log(this.form);
    const user: UserType = {
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      avatar: 'https://picsum.photos/800',
      role: 'Customer',
    };
    console.log('Before Submitting the user:- ' + user);
    this.authService.userSignIn(user);
  }
}
