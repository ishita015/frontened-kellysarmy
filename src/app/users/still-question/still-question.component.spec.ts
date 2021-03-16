import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StillQuestionComponent } from './still-question.component';

describe('StillQuestionComponent', () => {
  let component: StillQuestionComponent;
  let fixture: ComponentFixture<StillQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StillQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StillQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
