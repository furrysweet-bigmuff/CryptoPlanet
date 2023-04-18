import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Renderer2 } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  constructor(private renderer: Renderer2) {}

  
  ngOnInit() {
    this.styleToggle()
  }

  // Angular Material 15 has a bug thats not allowing to override slide toggle styles with css. So we do it with JS until they fix bug
  styleToggle() {
    const mdcSwitch = document.querySelector('.mdc-switch');
    const switchTrack = document.querySelector('.mdc-switch__track');
    const switchHandle = document.querySelector('.mdc-switch__handle');
    const switchShadow = document.querySelector('.mdc-switch__shadow');
    const switchRipple = document.querySelector('.mdc-switch__ripple');
    const switchIcons = document.querySelector('.mdc-switch__icons');
    const switchHandleTrack = document.querySelector('.mdc-switch__handle-track');
    switchHandle!.innerHTML = '<style>.custom-toggle .mdc-switch__handle:after {background-color:#fff!important}</style>'
    

    this.renderer.setStyle(switchShadow, 'display', 'none');
    this.renderer.setStyle(switchIcons, 'display', 'none');
    this.renderer.setStyle(switchRipple, 'display', 'none');
    this.renderer.setStyle(switchHandle, 'width', '19px');
    this.renderer.setStyle(switchHandle, 'height', '19px');
    this.renderer.setStyle(mdcSwitch, 'width', '50px');
    this.renderer.setStyle(switchHandleTrack, 'transform', 'translate(10%)');
    this.renderer.setStyle(switchTrack, 'height', '25px');
    this.renderer.setStyle(switchTrack, 'border-radius', '20px');
  }

  onToggleChange(event: MatSlideToggleChange) {
    const switchHandleTrack = document.querySelector('.mdc-switch__handle-track');

    if (event.checked) {
      this.renderer.setStyle(switchHandleTrack, 'transform', 'translate(91%)');
    } else {
      this.renderer.setStyle(switchHandleTrack, 'transform', 'translate(11%)');
    }
  }
}
