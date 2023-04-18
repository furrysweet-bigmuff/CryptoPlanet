import { Component, Input } from '@angular/core';
import { CurrentThemeService } from '../../../services/current-theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent {
  // color accepts next names: primary, nocolor, warn, white
  @Input() color: string = 'primary';
  @Input() text: string | null = null;
  currentTheme: string = 'dark';
  private subscription: Subscription;
  
  constructor(private themeService: CurrentThemeService) {
    this.subscription = this.themeService.myProperty$.subscribe(value => {
      this.currentTheme = value;
    });
  }

}
