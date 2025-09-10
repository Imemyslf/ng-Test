import { Component, inject } from '@angular/core';
import { Home } from './home/home';
import { Nav } from './nav/nav';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
