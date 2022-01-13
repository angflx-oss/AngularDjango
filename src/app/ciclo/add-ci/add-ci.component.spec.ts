import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCiComponent } from './add-ci.component';

describe('AddCiComponent', () => {
  let component: AddCiComponent;
  let fixture: ComponentFixture<AddCiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
