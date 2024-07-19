import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTransferRequestComponent } from './manager-transfer-request.component';

describe('ManagerTransferRequestComponent', () => {
  let component: ManagerTransferRequestComponent;
  let fixture: ComponentFixture<ManagerTransferRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerTransferRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
