import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsCustomerComponent } from './service-details-customer.component';

describe('ServiceDetailsCustomerComponent', () => {
  let component: ServiceDetailsCustomerComponent;
  let fixture: ComponentFixture<ServiceDetailsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
