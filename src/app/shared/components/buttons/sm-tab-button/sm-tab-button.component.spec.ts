import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmTabButtonComponent } from './sm-tab-button.component';

describe('SmTabButtonComponent', () => {
  let component: SmTabButtonComponent;
  let fixture: ComponentFixture<SmTabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmTabButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmTabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
