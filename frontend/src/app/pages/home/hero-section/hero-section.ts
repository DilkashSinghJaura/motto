// import { Component } from '@angular/core';
// import { Button } from '../../../shared/button/button';

// @Component({
//   selector: 'app-hero-section',
//   imports: [Button],
//   templateUrl: './hero-section.html',
//   styleUrl: './hero-section.css',
// })
// export class HeroSection {}


import { Component, Input } from '@angular/core';
import { Button } from '../../../shared/button/button';
@Component({
  selector: 'app-hero-section',
  imports: [Button],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css']
})
export class HeroSection {

  @Input() tag = '';
  @Input() title = '';
  @Input() description = '';
  @Input() primaryButtonText = '';
  @Input() secondaryButtonText = '';
  @Input() backgroundImage?: string;

  @Input() primaryLink = '';
  @Input() secondaryLink = '';
}