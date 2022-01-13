import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBrigadistaComponent } from './show-brigadista.component';

describe('ShowBrigadistaComponent', () => {
  let component: ShowBrigadistaComponent;
  let fixture: ComponentFixture<ShowBrigadistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBrigadistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBrigadistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
