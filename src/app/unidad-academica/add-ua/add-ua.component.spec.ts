import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUaComponent } from './add-ua.component';

describe('AddUaComponent', () => {
  let component: AddUaComponent;
  let fixture: ComponentFixture<AddUaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
