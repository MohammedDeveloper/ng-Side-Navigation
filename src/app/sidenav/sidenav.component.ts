import { Component, OnInit, Input } from '@angular/core';

/// declaring jQuery to use
declare var jQuery: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SideNavComponent implements OnInit {

  /// Initializations...
  accordionToNavigate: string = "collapseOne"; /// default
  @Input()
  side_navigations: any[];

  constructor() { }
  ngOnInit() {
  }

  /// Handles to go to the particular accordion
  GotoAccordion(accrdnName) {
    
    /// set the accordion selected
    this.accordionToNavigate = accrdnName;
    
  }

  /// Handles to go to the top of the window
  GotoTop() {
    //jQuery(window).scrollTop(); 
    // or
    window.scrollTo(0, 0);
  }

  /// Go to the bottom of the window
  GotoBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
