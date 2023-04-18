import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-left-button',
  templateUrl: './icon-left-button.component.html',
  styleUrls: ['./icon-left-button.component.scss']
})
export class IconLeftButtonComponent {
  @Input() text: string | null = null;
  @Input() iconName: string | null = null;
}
