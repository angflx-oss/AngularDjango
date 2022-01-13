import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUreceptoraComponent } from './edit-ureceptora.component';

describe('EditUreceptoraComponent', () => {
  let component: EditUreceptoraComponent;
  let fixture: ComponentFixture<EditUreceptoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUreceptoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUreceptoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
