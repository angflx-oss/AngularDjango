import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadReceptoraComponent } from './unidad-receptora.component';

describe('UnidadReceptoraComponent', () => {
  let component: UnidadReceptoraComponent;
  let fixture: ComponentFixture<UnidadReceptoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadReceptoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadReceptoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
