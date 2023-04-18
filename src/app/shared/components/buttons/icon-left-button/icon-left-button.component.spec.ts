import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLeftButtonComponent } from './icon-left-button.component';

describe('CrossButtonComponent', () => {
  let component: IconLeftButtonComponent;
  let fixture: ComponentFixture<IconLeftButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLeftButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconLeftButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
