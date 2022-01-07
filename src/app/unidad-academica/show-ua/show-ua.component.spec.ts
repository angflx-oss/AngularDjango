import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUaComponent } from './show-ua.component';

describe('ShowUaComponent', () => {
  let component: ShowUaComponent;
  let fixture: ComponentFixture<ShowUaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
