import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCompleteCancelledComponent } from './service-complete-cancelled.component';

describe('ServiceCompleteCancelledComponent', () => {
  let component: ServiceCompleteCancelledComponent;
  let fixture: ComponentFixture<ServiceCompleteCancelledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCompleteCancelledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCompleteCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
