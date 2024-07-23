import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpPopComponent } from './otp-pop.component';

describe('OtpPopComponent', () => {
  let component: OtpPopComponent;
  let fixture: ComponentFixture<OtpPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
