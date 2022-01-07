import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUaComponent } from './edit-ua.component';

describe('EditUaComponent', () => {
  let component: EditUaComponent;
  let fixture: ComponentFixture<EditUaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
