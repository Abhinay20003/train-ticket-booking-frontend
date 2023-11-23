import { TestBed } from '@angular/core/testing';

import { TrainSearchService } from './train-search.service';

describe('TrainSearchService', () => {
  let service: TrainSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
