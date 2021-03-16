import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsProviderComponent } from './service-details-provider.component';

describe('ServiceDetailsComponent', () => {
  let component: ServiceDetailsProviderComponent ;
  let fixture: ComponentFixture<ServiceDetailsProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailsProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
