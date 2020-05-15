import { Component, OnInit, DoCheck } from '@angular/core';
import { TranslatePipe } from '@inclouded/ionic4-inclouded-lib';
import { ElementService } from 'src/app/shared/service/element.service';
import { IncElement, Root_E } from '../shared/model/element.model';
import { Router } from '@angular/router';

function SelectElement(i: number) {
  IsSelected = [];
  IsSelected[i] = !IsSelected[i];

  SelectedElement = IncElements[i];
}
let IsSelected: boolean[] = [];

export function NavigateToView(i: number, router: Router) {
  router.navigateByUrl('/elements/element-view');
  SelectElement(i);
}
export let IncElements: IncElement[] = [];
export let SelectedElement: IncElement;

@Component({
  selector: 'lib-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
})
export class ElementsComponent implements OnInit, DoCheck {
  navigateToView = NavigateToView;
  loading = true;

  navTitle = this.translatePipe.transform('ELEMENTS');

  constructor(private elementService: ElementService, private translatePipe: TranslatePipe, public router: Router) { }

  ngOnInit() {
    this.getIncElements();
  }

  ngDoCheck() {
    if ((this.router.url).includes('/elements/element-select')) {
      IsSelected = [];
    }
  }

  get isSelected() {
    return IsSelected;
  }

  get incElements() {
    return IncElements;
  }

  setIncElements(incElements: IncElement[]) {
    IncElements = incElements;
  }

  getIncElements() {
    this.loading = true;
    this.elementService.get(Root_E.incElements).subscribe(result => {
      if (result.payload.val()) {
        IncElements = Object.values<IncElement>(result.payload.val()).filter(value => value.isVisible);
      }
    });
  }
}
