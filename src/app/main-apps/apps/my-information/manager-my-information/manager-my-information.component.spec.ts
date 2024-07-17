import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMyInformationComponent } from './manager-my-information.component';

describe('ManagerMyInformationComponent', () => {
  let component: ManagerMyInformationComponent;
  let fixture: ComponentFixture<ManagerMyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerMyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
