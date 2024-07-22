import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelProductPopComponent } from './cancel-product-pop.component';

describe('CancelProductPopComponent', () => {
  let component: CancelProductPopComponent;
  let fixture: ComponentFixture<CancelProductPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelProductPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelProductPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
