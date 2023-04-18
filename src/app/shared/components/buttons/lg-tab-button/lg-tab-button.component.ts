import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lg-tab-button',
  templateUrl: './lg-tab-button.component.html',
  styleUrls: ['./lg-tab-button.component.scss']
})
export class LgTabButtonComponent {
  @Input() text: string | null = null;

}
