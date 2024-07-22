import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartPopComponent } from './add-to-cart-pop.component';

describe('AddToCartPopComponent', () => {
  let component: AddToCartPopComponent;
  let fixture: ComponentFixture<AddToCartPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
