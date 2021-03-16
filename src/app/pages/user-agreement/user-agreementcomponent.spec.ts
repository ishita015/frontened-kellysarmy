import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userAgreementComponent } from './user-agreement.component';

describe('userAgreementComponent', () => {
  let component: userAgreementComponent;
  let fixture: ComponentFixture<userAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(userAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
