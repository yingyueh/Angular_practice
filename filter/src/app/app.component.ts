import { Component, OnInit } from '@angular/core';
import { people as Pepplselist } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'filter';
  people = Pepplselist;
  searchText: any;

  private test = '';


  // people = [
  //   { name: "Alice", age: 18 },
  //   { name: "Mike", age: 52 },
  //   { name: "Allysa", age: 20 },
  //   { name: "Ben", age: 60 },
  //   { name: "Eric", age: 23 }
  // ]
  constructor() {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.people);

  }

}
