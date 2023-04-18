import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentThemeService } from 'src/app/shared/services/current-theme.service';

@Component({
  selector: 'app-caret-button',
  templateUrl: './caret-button.component.html',
  styleUrls: ['./caret-button.component.scss']
})
export class CaretButtonComponent {
  @Input() text: string | null = null;
  currentTheme: string = 'dark';

  private subscription: Subscription  ;
  
  constructor(private themeService: CurrentThemeService) {
    this.subscription = this.themeService.myProperty$.subscribe(value => {
      this.currentTheme = value;
    });
  }
}
