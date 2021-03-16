import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSideBarComponent } from './services-side-bar.component';

describe('ServicesSideBarComponent', () => {
  let component: ServicesSideBarComponent;
  let fixture: ComponentFixture<ServicesSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
