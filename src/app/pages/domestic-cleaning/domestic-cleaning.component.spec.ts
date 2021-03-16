import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticCleaningComponentComponent } from './domestic-cleaning.component';

describe('DomesticCleaningComponentComponent', () => {
  let component: DomesticCleaningComponentComponent;
  let fixture: ComponentFixture<DomesticCleaningComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticCleaningComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticCleaningComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
