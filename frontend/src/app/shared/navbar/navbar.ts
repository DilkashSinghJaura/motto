import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {

  menuOpen = false;

  navItems = [
    { label: 'Tasks', route: '/tasks' },
    { label: 'Calendar', route: '/calendar' },
    { label: 'Projects', route: '/projects' },
    { label: 'Teams', route: '/teams' },
    { label: 'Reports', route: '/reports' },
    { label: 'About us', route: '/about-us' },
    { label: 'Support', route: '/support' }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
}
