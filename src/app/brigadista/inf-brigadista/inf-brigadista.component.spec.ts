import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfBrigadistaComponent } from './inf-brigadista.component';

describe('InfBrigadistaComponent', () => {
  let component: InfBrigadistaComponent;
  let fixture: ComponentFixture<InfBrigadistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfBrigadistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfBrigadistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
