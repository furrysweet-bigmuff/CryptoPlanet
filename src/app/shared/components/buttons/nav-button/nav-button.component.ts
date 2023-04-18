import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentThemeService } from 'src/app/shared/services/current-theme.service';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {
  @Input() text: string = '';
  currentTheme: string = 'dark';
  private subscription: Subscription;
  
  constructor(private themeService: CurrentThemeService) {
    this.subscription = this.themeService.myProperty$.subscribe(value => {
      this.currentTheme = value;
    });
  }
}
