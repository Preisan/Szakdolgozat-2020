import { Component, OnInit, DoCheck } from '@angular/core';
import { IncElement } from 'src/app/shared/model/element.model';
import { Router } from '@angular/router';
import { SelectedElement } from '../elements.component';

@Component({
  selector: 'lib-element-view',
  templateUrl: './element-view.component.html',
  styleUrls: ['./element-view.component.scss'],
})
export class ElementViewComponent implements OnInit, DoCheck {
  incElement: IncElement;
  loading = true;
  navTitle = 'Components';
  navList = [];

  constructor(private router: Router) { }

  ngOnInit() {
    if (!SelectedElement) {
      this.navigateTo('/elements/element-select');
    }
  }

  ngDoCheck() {
    if (this.incElement !== SelectedElement) {
      this.incElement = SelectedElement;
    }
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }


}
