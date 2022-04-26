import { TestBed } from '@angular/core/testing';

import { MadridService } from './madrid.service';

describe('MadridService', () => {
  let service: MadridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
