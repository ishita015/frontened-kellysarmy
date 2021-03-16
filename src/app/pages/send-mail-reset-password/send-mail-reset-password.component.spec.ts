import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailResetPasswordComponent } from './send-mail-reset-password.component';

describe('SendMailResetPasswordComponent', () => {
  let component: SendMailResetPasswordComponent;
  let fixture: ComponentFixture<SendMailResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMailResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMailResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
