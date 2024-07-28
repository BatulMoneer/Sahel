import { TestBed } from '@angular/core/testing';

import { CollectorGuard } from './collector.guard';

describe('CollectorGuard', () => {
  let guard: CollectorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CollectorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
