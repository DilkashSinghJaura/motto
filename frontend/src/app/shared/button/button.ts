import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

  @Input() text = '';

  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';

  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Input() disabled = false;

  @Input() routerLink = '';

}