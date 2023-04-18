import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentThemeService } from 'src/app/shared/services/current-theme.service';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent {
  @Input() text: string | null = null;
  @Input() iconName: string | null = null;

  currentTheme: string = 'dark';
  private subscription: Subscription;
  
  constructor(private themeService: CurrentThemeService) {
    this.subscription = this.themeService.myProperty$.subscribe(value => {
      this.currentTheme = value;
    });
  }
}
