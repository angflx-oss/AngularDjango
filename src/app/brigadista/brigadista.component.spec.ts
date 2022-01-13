import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadistaComponent } from './brigadista.component';

describe('BrigadistaComponent', () => {
  let component: BrigadistaComponent;
  let fixture: ComponentFixture<BrigadistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrigadistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
