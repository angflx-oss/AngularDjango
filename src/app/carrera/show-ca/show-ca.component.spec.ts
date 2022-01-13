import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCaComponent } from './show-ca.component';

describe('ShowCaComponent', () => {
  let component: ShowCaComponent;
  let fixture: ComponentFixture<ShowCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
