import { TestBed } from '@angular/core/testing';

import { StorePackingService } from './store-movies.service';

describe('StoreMoviesService', () => {
  let service: StorePackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorePackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
