import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUreceptoraComponent } from './show-ureceptora.component';

describe('ShowUreceptoraComponent', () => {
  let component: ShowUreceptoraComponent;
  let fixture: ComponentFixture<ShowUreceptoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUreceptoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUreceptoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
