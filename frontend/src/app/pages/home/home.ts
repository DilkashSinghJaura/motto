import { Component } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { FeatureShowcase } from './feature-showcase/feature-showcase';

@Component({
  selector: 'app-home',
  imports: [HeroSection, FeatureShowcase],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
