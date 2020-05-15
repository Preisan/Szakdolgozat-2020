import { Component, OnInit } from '@angular/core';
import { NavigateToView, IncElements } from '../elements.component';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-element-select',
  templateUrl: './element-select.html',
  styleUrls: ['./element-select.scss'],
})
export class ElementSelectComponent implements OnInit {
  navigateToView = NavigateToView;

  constructor(public router: Router) { }

  ngOnInit() {

  }

  get incElements() {
    return IncElements;
  }
}
