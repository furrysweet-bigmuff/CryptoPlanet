import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrentThemeService {
  private currentTheme = new BehaviorSubject<string>('dark');
  myProperty$ = this.currentTheme.asObservable();

  setMyProperty(value: string) {
    this.currentTheme.next(value);
  }
}