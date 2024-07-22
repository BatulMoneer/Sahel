import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayNowPopComponent } from './pay-now-pop.component';

describe('PayNowPopComponent', () => {
  let component: PayNowPopComponent;
  let fixture: ComponentFixture<PayNowPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayNowPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayNowPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
