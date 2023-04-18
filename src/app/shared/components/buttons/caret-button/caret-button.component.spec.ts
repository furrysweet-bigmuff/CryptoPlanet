import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretButtonComponent } from './caret-button.component';

describe('CaretButtonComponent', () => {
  let component: CaretButtonComponent;
  let fixture: ComponentFixture<CaretButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaretButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaretButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
