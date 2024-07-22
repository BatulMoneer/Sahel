import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLowProductPopComponent } from './change-low-product-pop.component';

describe('ChangeLowProductPopComponent', () => {
  let component: ChangeLowProductPopComponent;
  let fixture: ComponentFixture<ChangeLowProductPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLowProductPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLowProductPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
