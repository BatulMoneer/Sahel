import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otp2PopComponent } from './otp2-pop.component';

describe('Otp2PopComponent', () => {
  let component: Otp2PopComponent;
  let fixture: ComponentFixture<Otp2PopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otp2PopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Otp2PopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
