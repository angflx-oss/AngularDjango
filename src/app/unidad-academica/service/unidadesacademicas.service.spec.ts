import { TestBed } from '@angular/core/testing';

import { UnidadesacademicasService } from './unidadesacademicas.service';

describe('UnidadesacademicasService', () => {
  let service: UnidadesacademicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadesacademicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
