import { Component, OnInit, Input } from '@angular/core';
import { IncElement } from 'src/app/shared/model/element.model';

@Component({
  selector: 'lib-overview-view',
  templateUrl: './overview-view.component.html',
  styleUrls: ['./overview-view.component.scss'],
})
export class OverviewViewComponent implements OnInit {
  @Input() incElement: IncElement;

  constructor() { }

  ngOnInit() {
  }
}
