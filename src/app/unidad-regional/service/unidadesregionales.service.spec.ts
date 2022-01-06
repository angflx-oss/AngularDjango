import { TestBed } from '@angular/core/testing';

import { UnidadesregionalesService } from './unidadesregionales.service';

describe('UnidadesregionalesService', () => {
  let service: UnidadesregionalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadesregionalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
