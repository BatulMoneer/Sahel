import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeHighProductPopComponent } from './change-high-product-pop.component';

describe('ChangeHighProductPopComponent', () => {
  let component: ChangeHighProductPopComponent;
  let fixture: ComponentFixture<ChangeHighProductPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeHighProductPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeHighProductPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
