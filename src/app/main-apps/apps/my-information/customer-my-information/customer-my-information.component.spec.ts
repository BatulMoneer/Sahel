import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyInformationComponent } from './customer-my-information.component';

describe('CustomerMyInformationComponent', () => {
  let component: CustomerMyInformationComponent;
  let fixture: ComponentFixture<CustomerMyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
