import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gdprComponent } from './gdpr.component';

describe('gdprComponent', () => {
  let component: gdprComponent;
  let fixture: ComponentFixture<gdprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ gdprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(gdprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
