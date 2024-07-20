import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorOrdersComponent } from './collector-orders.component';

describe('CollectorOrdersComponent', () => {
  let component: CollectorOrdersComponent;
  let fixture: ComponentFixture<CollectorOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
