import { ComponentFixture, TestBed } from '@angular/core/testing';

import { verifyComponent } from './verify.component';

describe('verifyComponent', () => {
  let component: verifyComponent;
  let fixture: ComponentFixture<verifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ verifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(verifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
