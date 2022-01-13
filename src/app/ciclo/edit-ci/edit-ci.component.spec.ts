import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCiComponent } from './edit-ci.component';

describe('EditCiComponent', () => {
  let component: EditCiComponent;
  let fixture: ComponentFixture<EditCiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
