import { TestBed } from '@angular/core/testing';

import { GlobaleerrorhandlerService } from './globaleerrorhandler.service';

describe('GlobaleerrorhandlerService', () => {
  let service: GlobaleerrorhandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobaleerrorhandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
