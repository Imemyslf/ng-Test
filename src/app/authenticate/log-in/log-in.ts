import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserType } from '../sign-in/sign-in.modal';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {
  form = new FormGroup({
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
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      avatar: 'https://picsum.photos/800',
    };
    this.authService.userLogIn(user);
    // this.authService.userSignIn(user);
  }
}
