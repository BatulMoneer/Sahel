import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProductWillUpdateItComponent } from './choose-product-will-update-it.component';

describe('ChooseProductWillUpdateItComponent', () => {
  let component: ChooseProductWillUpdateItComponent;
  let fixture: ComponentFixture<ChooseProductWillUpdateItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseProductWillUpdateItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseProductWillUpdateItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
