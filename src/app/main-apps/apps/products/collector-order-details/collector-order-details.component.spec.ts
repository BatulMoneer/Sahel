import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorOrderDetailsComponent } from './collector-order-details.component';

describe('CollectorOrderDetailsComponent', () => {
  let component: CollectorOrderDetailsComponent;
  let fixture: ComponentFixture<CollectorOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
