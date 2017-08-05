import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /// Initializations and declarations..
  side_navs: any[] = [
    { name: "collapse1", default: true },
    { name: "collapse2" },
    { name: "collapse3" },
    { name: "collapse4" },
    { name: "collapse5" },
    { name: "collapse6" },
    { name: "collapse7" },
    { name: "collapse8" }
  ];

  constructor() { }
}
