import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-label',
  templateUrl: './action-label.component.html',
  styleUrls: ['./action-label.component.scss']
})
export class ActionLabelComponent {
  @Input() type: string = 'deposited';
}
