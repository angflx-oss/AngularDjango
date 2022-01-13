import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUreceptoraComponent } from './add-ureceptora.component';

describe('AddUreceptoraComponent', () => {
  let component: AddUreceptoraComponent;
  let fixture: ComponentFixture<AddUreceptoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUreceptoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUreceptoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
