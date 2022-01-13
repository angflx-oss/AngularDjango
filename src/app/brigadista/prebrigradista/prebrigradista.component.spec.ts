import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrebrigradistaComponent } from './prebrigradista.component';

describe('PrebrigradistaComponent', () => {
  let component: PrebrigradistaComponent;
  let fixture: ComponentFixture<PrebrigradistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrebrigradistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrebrigradistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
