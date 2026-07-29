import { TestBed } from '@angular/core/testing';

import { FreightsService } from './freights';

describe('FreightsService', () => {
  let service: FreightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
