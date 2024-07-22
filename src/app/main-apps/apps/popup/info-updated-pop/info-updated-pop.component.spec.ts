import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUpdatedPopComponent } from './info-updated-pop.component';

describe('InfoUpdatedPopComponent', () => {
  let component: InfoUpdatedPopComponent;
  let fixture: ComponentFixture<InfoUpdatedPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUpdatedPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUpdatedPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
