import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgTabButtonComponent } from './lg-tab-button.component';

describe('LgTabButtonComponent', () => {
  let component: LgTabButtonComponent;
  let fixture: ComponentFixture<LgTabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgTabButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgTabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
