import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorMyInformationComponent } from './collector-my-information.component';

describe('CollectorMyInformationComponent', () => {
  let component: CollectorMyInformationComponent;
  let fixture: ComponentFixture<CollectorMyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorMyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorMyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
