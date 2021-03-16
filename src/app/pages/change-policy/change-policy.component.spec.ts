import { ComponentFixture, TestBed } from '@angular/core/testing';

import { changePolicyComponent } from './change-policy.component';

describe('changePolicyComponent', () => {
  let component: changePolicyComponent;
  let fixture: ComponentFixture<changePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ changePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(changePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
