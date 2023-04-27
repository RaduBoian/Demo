import { TestBed } from '@angular/core/testing';

import { SportlerService } from './sportler.service';

describe('StudentService', () => {
  let service: SportlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});