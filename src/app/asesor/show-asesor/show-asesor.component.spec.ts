import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAsesorComponent } from './show-asesor.component';

describe('ShowAsesorComponent', () => {
  let component: ShowAsesorComponent;
  let fixture: ComponentFixture<ShowAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
