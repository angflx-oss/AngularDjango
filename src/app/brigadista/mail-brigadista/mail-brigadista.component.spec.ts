import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBrigadistaComponent } from './mail-brigadista.component';

describe('MailBrigadistaComponent', () => {
  let component: MailBrigadistaComponent;
  let fixture: ComponentFixture<MailBrigadistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailBrigadistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailBrigadistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
