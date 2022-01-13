import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBrigadistaComponent } from './edit-brigadista.component';

describe('EditBrigadistaComponent', () => {
  let component: EditBrigadistaComponent;
  let fixture: ComponentFixture<EditBrigadistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBrigadistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBrigadistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
