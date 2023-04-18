import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentThemeService } from 'src/app/shared/services/current-theme.service';

@Component({
  selector: 'app-sm-tab-button',
  templateUrl: './sm-tab-button.component.html',
  styleUrls: ['./sm-tab-button.component.scss']
})
export class SmTabButtonComponent {
  @Input() text: string | null = null;
  
  currentTheme: string = 'dark';
  private subscription: Subscription;
  
  constructor(private themeService: CurrentThemeService) {
    this.subscription = this.themeService.myProperty$.subscribe(value => {
      this.currentTheme = value;
    });
  }
}
