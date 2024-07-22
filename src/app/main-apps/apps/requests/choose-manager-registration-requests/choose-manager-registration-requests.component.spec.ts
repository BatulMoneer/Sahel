import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseManagerRegistrationRequestsComponent } from './choose-manager-registration-requests.component';

describe('ChooseManagerRegistrationRequestsComponent', () => {
  let component: ChooseManagerRegistrationRequestsComponent;
  let fixture: ComponentFixture<ChooseManagerRegistrationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseManagerRegistrationRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseManagerRegistrationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
