import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCiComponent } from './show-ci.component';

describe('ShowCiComponent', () => {
  let component: ShowCiComponent;
  let fixture: ComponentFixture<ShowCiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
