import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorViewPaymentsComponent } from './collector-view-payments.component';

describe('CollectorViewPaymentsComponent', () => {
  let component: CollectorViewPaymentsComponent;
  let fixture: ComponentFixture<CollectorViewPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorViewPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorViewPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
