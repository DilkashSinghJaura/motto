import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './shared/navbar/navbar';
import { Home } from './pages/home/home';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}