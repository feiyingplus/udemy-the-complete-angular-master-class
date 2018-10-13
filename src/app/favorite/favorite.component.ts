import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  // inputs: ["glyphicon_star_onoff"]
})
export class FavoriteComponent implements OnInit {
  
  // glyphicon_star_status: string;
  // glyphicon_star_off: string = "glyphicon glyphicon-star-empty";
  // glyphicon_star_on: string = "glyphicon glyphicon-star";
  @Input('is-favorite') isSelected: boolean;
  @Output('changeEvent') change = new EventEmitter();

  input = "initial";

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit(this.isSelected);
  }

  constructor() { }

  ngOnInit() {

  }

}

export interface FavoriteChagneEventArgs {
  newValue: boolean
}
