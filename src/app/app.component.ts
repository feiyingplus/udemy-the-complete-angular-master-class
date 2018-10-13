import { Component } from '@angular/core';
import { FavoriteChagneEventArgs } from './favorite/favorite.component';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // 73
  task = {
    title: 'Review applciations',
    asignee: null
  }
  // 71
  canSave=true;
  onClick() {
    this.canSave = !this.canSave
  }
  // 67  
  // 69
  courses;
  loadCourses() {
    this.courses = [
        {id: 1, name:'course1 '},
        {id: 2, name:'course2 '},
        {id: 3, name:'course3.0 '},
      ];
  };

  trackCourse(index, course) {
    return course.id
  };
  // courses = [
  //   {id: 1, name:'course1 '},
  //   {id: 2, name:'course2 '},
  //   {id: 3, name:'course3 '}
  // ];
  // 68
  // onAdd() {
  //   this.courses.push( {id: 0, name:'course added'} )
  // };

  // onChange(course) {
  //   // let index = this.courses.indexOf(course);
  //   // this.courses.splice(index, 1);
  //   course.name = 'Updated at '+ this.onChangeTime();
  // };

  // onChangeTime () {
  //   let date = new Date;
  //   return date.toLocaleString();

  // }
  viewMode = 'list';
  title = 'hello-world';
  post = {
    title: "Title",
    isPostFavorite: true
  };

  // Chapter 5 - assignment
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 10
  }

  // chapter 6
  // courses = [];



  onFaviroteChange(eventArgs: FavoriteChagneEventArgs) {
    console.log("Favorite changed: "+ eventArgs);
  }

}


