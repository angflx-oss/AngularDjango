import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaSectionsComponent } from './ua-sections.component';

describe('UaSectionsComponent', () => {
  let component: UaSectionsComponent;
  let fixture: ComponentFixture<UaSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UaSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
