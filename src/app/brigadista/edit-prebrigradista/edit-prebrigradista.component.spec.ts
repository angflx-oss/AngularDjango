import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrebrigradistaComponent } from './edit-prebrigradista.component';

describe('EditPrebrigradistaComponent', () => {
  let component: EditPrebrigradistaComponent;
  let fixture: ComponentFixture<EditPrebrigradistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPrebrigradistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrebrigradistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
