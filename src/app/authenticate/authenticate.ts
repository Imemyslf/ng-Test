import { Component, input, signal } from '@angular/core';
import { SignIn } from "./sign-in/sign-in";

@Component({
  selector: 'app-authenticate',
  imports: [SignIn],
  templateUrl: './authenticate.html',
  styleUrl: './authenticate.css',
})
export class Authenticate {}
