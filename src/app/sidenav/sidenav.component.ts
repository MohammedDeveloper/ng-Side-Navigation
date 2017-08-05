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

  constructor() {
  }

  ngOnInit() {
    this.accordionToNavigate = this.side_navigations.find(nav => nav.default).name;
  }

  /// Handles to go to the top of the windowF
  GotoTop() {
    window.scrollTo(0, 0);
  }

  /// Go to the bottom of the window
  GotoBottom() {
    jQuery(document).scrollTop(jQuery(document).height());
  }

  /// Expand All
  ExpandAll() {
    jQuery('.panel-collapse.collapse').collapse('show');
  }

  /// Collapse All
  CollapseAll() {
    jQuery('.panel-collapse.collapse').collapse('hide');
  }

  /// Handles to go to the particular accordion
  GotoAccordion(label) {
    jQuery('.panel-collapse.collapse').collapse('hide');
    let tempId = '.panel-collapse.collapse#' + label;
    this.accordionToNavigate = label;    
    jQuery(tempId).collapse('show');
    console.log(jQuery('#' + label).parent().offset())
    window.scrollTo(0, jQuery('#' + label + ":parent").parent().offset().top);
  }
}
