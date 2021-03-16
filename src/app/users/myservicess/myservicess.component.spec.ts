import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServicessComponent } from './myservicess.component';

describe('MyServicessComponent', () => {
  let component: MyServicessComponent;
  let fixture: ComponentFixture<MyServicessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyServicessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServicessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
