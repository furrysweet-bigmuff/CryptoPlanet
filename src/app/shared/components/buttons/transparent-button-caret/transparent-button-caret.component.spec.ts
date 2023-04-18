import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentButtonCaretComponent } from './transparent-button-caret.component';

describe('TransparentButtonCaretComponent', () => {
  let component: TransparentButtonCaretComponent;
  let fixture: ComponentFixture<TransparentButtonCaretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparentButtonCaretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparentButtonCaretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
