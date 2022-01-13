import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDepartamentoComponent } from './show-departamento.component';

describe('ShowDepartamentoComponent', () => {
  let component: ShowDepartamentoComponent;
  let fixture: ComponentFixture<ShowDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
