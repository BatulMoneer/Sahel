import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollectorInformationComponent } from './edit-collector-information.component';

describe('EditCollectorInformationComponent', () => {
  let component: EditCollectorInformationComponent;
  let fixture: ComponentFixture<EditCollectorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCollectorInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCollectorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
