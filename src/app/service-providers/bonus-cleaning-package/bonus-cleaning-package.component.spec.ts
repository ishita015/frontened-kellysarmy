import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusCleaningPackageComponent } from './bonus-cleaning-package.component';

describe('BonusCleaningPackageComponent', () => {
  let component: BonusCleaningPackageComponent;
  let fixture: ComponentFixture<BonusCleaningPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusCleaningPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusCleaningPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
