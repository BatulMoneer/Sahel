import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorRequestWalletComponent } from './collector-request-wallet.component';

describe('CollectorRequestWalletComponent', () => {
  let component: CollectorRequestWalletComponent;
  let fixture: ComponentFixture<CollectorRequestWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorRequestWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorRequestWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
