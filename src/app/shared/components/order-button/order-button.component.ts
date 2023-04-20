import { Component, Input } from '@angular/core';
import { CurrentThemeService } from '../../services/current-theme.service';
import { Subscription } from 'rxjs';
import { ActiveOrderButtonService } from '../../services/active-order-button.service';

@Component({
  selector: 'app-order-button',
  templateUrl: './order-button.component.html',
  styleUrls: ['./order-button.component.scss']
})
export class OrderButtonComponent {
  @Input() text: string = '';
  @Input() icon: string | null = null;
  isActive: boolean = false;
  
  constructor(private isActiveService: ActiveOrderButtonService) {}

  ngOnInit(): void {
    this.isActiveService.activeComponent.subscribe((component) => {
      this.isActive = (component === this);
    });
  }

  findRadioInput(el: HTMLElement) {
    // if el contains order-button than it's parent
    let parent = el;
    // if no - find closest parent
    if (!el.classList.contains('order-button')) {
      parent = el.closest('.order-button') as HTMLElement;
    }
    parent.classList.add('active')
    // return radio input in current parent
    return parent.querySelector('.mdc-radio__native-control') as HTMLElement;
  }

  onClick($event: Event) {
    this.isActiveService.activeComponent.next(this);
    const element = $event.target as HTMLElement;
    let event = new MouseEvent('click', {bubbles: false});
    let target = element;
    // if element is not radio - find closest radio
    if (!element.classList.contains('mdc-radio__native-control')) {
      target = this.findRadioInput(element);
    }
    // trigger click on radio el
    target.dispatchEvent(event);
  }
}
