import { TestBed } from '@angular/core/testing';

import { UnidadesreceptorasService } from './unidadesreceptoras.service';

describe('UnidadesreceptorasService', () => {
  let service: UnidadesreceptorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadesreceptorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
