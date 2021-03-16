import { ComponentFixture, TestBed } from '@angular/core/testing';

import { refferComponent } from './reffer.component';

describe('refferComponent', () => {
  let component: refferComponent;
  let fixture: ComponentFixture<refferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ refferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(refferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
