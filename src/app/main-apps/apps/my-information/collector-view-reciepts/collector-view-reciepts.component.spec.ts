import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorViewRecieptsComponent } from './collector-view-reciepts.component';

describe('CollectorViewRecieptsComponent', () => {
  let component: CollectorViewRecieptsComponent;
  let fixture: ComponentFixture<CollectorViewRecieptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorViewRecieptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorViewRecieptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
