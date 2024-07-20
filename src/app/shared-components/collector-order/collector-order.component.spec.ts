import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorOrderComponent } from './collector-order.component';

describe('CollectorOrderComponent', () => {
  let component: CollectorOrderComponent;
  let fixture: ComponentFixture<CollectorOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
