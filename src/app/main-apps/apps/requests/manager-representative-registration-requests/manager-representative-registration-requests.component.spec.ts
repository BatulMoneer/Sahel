import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRepresentativeRegistrationRequestsComponent } from './manager-representative-registration-requests.component';

describe('ManagerRepresentativeRegistrationRequestsComponent', () => {
  let component: ManagerRepresentativeRegistrationRequestsComponent;
  let fixture: ComponentFixture<ManagerRepresentativeRegistrationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRepresentativeRegistrationRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRepresentativeRegistrationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
