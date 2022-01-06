import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadRegionalComponent } from './unidad-regional.component';

describe('UnidadRegionalComponent', () => {
  let component: UnidadRegionalComponent;
  let fixture: ComponentFixture<UnidadRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
