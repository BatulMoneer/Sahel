import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpPassPopComponent } from './otp-pass-pop.component';

describe('OtpPassPopComponent', () => {
  let component: OtpPassPopComponent;
  let fixture: ComponentFixture<OtpPassPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpPassPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpPassPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
