import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrebrigradistaComponent } from './show-prebrigradista.component';

describe('ShowPrebrigradistaComponent', () => {
  let component: ShowPrebrigradistaComponent;
  let fixture: ComponentFixture<ShowPrebrigradistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPrebrigradistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPrebrigradistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
