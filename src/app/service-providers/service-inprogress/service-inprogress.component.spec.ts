import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInprogressComponent } from './service-inprogress.component';

describe('ServiceInprogressComponent', () => {
  let component: ServiceInprogressComponent;
  let fixture: ComponentFixture<ServiceInprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
