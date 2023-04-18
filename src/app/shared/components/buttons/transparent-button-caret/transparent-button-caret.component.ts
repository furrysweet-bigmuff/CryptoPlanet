import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transparent-button-caret',
  templateUrl: './transparent-button-caret.component.html',
  styleUrls: ['./transparent-button-caret.component.scss']
})
export class TransparentButtonCaretComponent {
  @Input() text: string | null = null;
}
