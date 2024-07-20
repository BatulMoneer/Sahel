import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorRecieptDetailsComponent } from './collector-reciept-details.component';

describe('CollectorRecieptDetailsComponent', () => {
  let component: CollectorRecieptDetailsComponent;
  let fixture: ComponentFixture<CollectorRecieptDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorRecieptDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorRecieptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
