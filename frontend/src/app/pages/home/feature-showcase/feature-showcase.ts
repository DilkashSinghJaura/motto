import { Component, Input } from '@angular/core';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-feature-showcase',
  imports: [Button],
  templateUrl: './feature-showcase.html',
  styleUrl: './feature-showcase.css',
})
export class FeatureShowcase {

  @Input() backgroundImage?: string;
  @Input() leftImage?: string;


  @Input() rightImage ?: string;

  @Input() featureShowcaseRightTitle?: string;
  @Input() featureShowcaseRightContent?: string;
  @Input() featureShowcaseLeftTitle?: string;
  @Input() featureShowcaseLeftContent?: string;



  @Input() primaryRightButtonText = "";
  @Input() primaryLeftButtonText = "";
}

