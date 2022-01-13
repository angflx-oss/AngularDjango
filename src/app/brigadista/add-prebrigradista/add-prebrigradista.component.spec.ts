import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrebrigradistaComponent } from './add-prebrigradista.component';

describe('AddPrebrigradistaComponent', () => {
  let component: AddPrebrigradistaComponent;
  let fixture: ComponentFixture<AddPrebrigradistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrebrigradistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrebrigradistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
