import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLabelComponent } from './action-label.component';

describe('ActionLabelComponent', () => {
  let component: ActionLabelComponent;
  let fixture: ComponentFixture<ActionLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
