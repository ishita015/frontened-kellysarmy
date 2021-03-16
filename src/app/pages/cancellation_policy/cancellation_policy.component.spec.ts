import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cancellationPolicyComponent } from './cancellation_policy.component';

describe('cancellationPolicyComponent', () => {
  let component: cancellationPolicyComponent;
  let fixture: ComponentFixture<cancellationPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cancellationPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(cancellationPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
