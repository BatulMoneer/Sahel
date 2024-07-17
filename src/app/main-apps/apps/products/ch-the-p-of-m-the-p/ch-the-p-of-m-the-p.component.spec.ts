import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChThePOfMThePComponent } from './ch-the-p-of-m-the-p.component';

describe('ChThePOfMThePComponent', () => {
  let component: ChThePOfMThePComponent;
  let fixture: ComponentFixture<ChThePOfMThePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChThePOfMThePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChThePOfMThePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
