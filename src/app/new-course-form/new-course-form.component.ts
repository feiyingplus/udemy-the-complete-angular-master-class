import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  courseCategories = [
    {id: 1, name: 'Music'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Developer'},
  ];

  submit(f) {
    console.log(f);
  }
}
