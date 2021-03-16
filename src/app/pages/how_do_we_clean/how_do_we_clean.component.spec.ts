import { ComponentFixture, TestBed } from '@angular/core/testing';

import { how_do_we_cleanComponent } from './how_do_we_clean.component';

describe('how_do_we_cleanComponent', () => {
  let component: how_do_we_cleanComponent;
  let fixture: ComponentFixture<how_do_we_cleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ how_do_we_cleanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(how_do_we_cleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
