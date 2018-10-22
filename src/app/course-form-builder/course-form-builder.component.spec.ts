import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormBuilderComponent } from './course-form-builder.component';

describe('CourseFormBuilderComponent', () => {
  let component: CourseFormBuilderComponent;
  let fixture: ComponentFixture<CourseFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
