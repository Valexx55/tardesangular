import { TestBed } from '@angular/core/testing';

import { ComunicadorService } from './comunicador.service';

describe('ComunicadorService', () => {
  let service: ComunicadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
