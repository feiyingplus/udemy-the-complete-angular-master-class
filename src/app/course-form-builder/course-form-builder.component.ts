import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'course-form-builder',
  templateUrl: './course-form-builder.component.html',
  styleUrls: ['./course-form-builder.component.css']
})
export class CourseFormBuilderComponent {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
   }

   get topics() {
    return this.form.get('topics') as FormArray;
  }
}
