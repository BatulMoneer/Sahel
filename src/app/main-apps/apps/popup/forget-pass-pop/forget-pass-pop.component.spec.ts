import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassPopComponent } from './forget-pass-pop.component';

describe('ForgetPassPopComponent', () => {
  let component: ForgetPassPopComponent;
  let fixture: ComponentFixture<ForgetPassPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPassPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPassPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
