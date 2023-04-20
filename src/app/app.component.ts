import { Component, HostBinding, OnInit } from '@angular/core';
import { CurrentThemeService } from './shared/services/current-theme.service';
import { MatIconRegistry } from '@angular/material/icon';
import { of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentTheme = of('dark');

  constructor(
    private themeService: CurrentThemeService,
  ) {}

  sendTheme(theme: string) {
    this.themeService.setMyProperty(theme);
  }
  
  ngOnInit() {
    this.currentTheme.subscribe((theme) => {
      this.sendTheme(theme)
    })
  }
}
