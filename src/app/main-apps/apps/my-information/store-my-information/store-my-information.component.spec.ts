import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMyInformationComponent } from './store-my-information.component';

describe('StoreMyInformationComponent', () => {
  let component: StoreMyInformationComponent;
  let fixture: ComponentFixture<StoreMyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreMyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreMyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
