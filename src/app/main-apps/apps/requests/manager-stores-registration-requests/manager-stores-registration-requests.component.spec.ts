import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStoresRegistrationRequestsComponent } from './manager-stores-registration-requests.component';

describe('ManagerStoresRegistrationRequestsComponent', () => {
  let component: ManagerStoresRegistrationRequestsComponent;
  let fixture: ComponentFixture<ManagerStoresRegistrationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerStoresRegistrationRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerStoresRegistrationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
