import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    // template: `<h2>{{"Title:" + title }}</h2>
    //            <ul>
    //                 <li *ngFor="let course of courses">
    //                 {{ course }}
    //                 </li>
    //            <ul>
    //            <img src="{{ imageUrl }}" />
    //            <img [src]="imageUrl1" />
    // `,
    templateUrl: "./courses.component.html",
})

export class CoursesComponent {
    course = {
        title: " The Complete Angular Course",
        rating: 41.123456,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
    title = "List of Courses";
    courses;
    imageUrl = "https://picsum.photos/200/300";
    imageUrl1 = "https://picsum.photos/200/200";
    colSpan = 2;
    btnIsActive = true;
    onClickIsActive = false;
    isActive = true;
    email = "me@initial1.com";
    text = `Warning: the currency pipe has been changed in Angular v5. 
            The symbolDisplay option (third parameter) is now a string instead of a boolean. 
            The accepted values are "code", "symbol" or "symbol-narrow"`

    onKeyUp(email) {
        // if ($event.keyCode === 13) { //enter keycode is 13
            console.log("Input value is: "+ this.email)
            
        // }

    };


    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses(); 
    }
}