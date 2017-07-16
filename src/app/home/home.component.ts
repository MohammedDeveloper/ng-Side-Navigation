import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /// Initializations and declarations..
  side_navs: any[] = [
    { name: "collapseOne", default: true },
    { name: "collapseTwo" },
    { name: "collapseThree" },
    { name: "collapseFour" },
    { name: "collapseFive" },
    { name: "collapseSix" },
    { name: "collapseSeven" },
    { name: "collapseEight" }
  ];

  constructor() { }
}
