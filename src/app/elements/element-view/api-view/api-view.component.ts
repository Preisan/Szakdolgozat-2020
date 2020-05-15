import { Component, OnInit, Input } from '@angular/core';
import { ElementService } from 'src/app/shared/service/element.service';
import { IncElement } from 'src/app/shared/model/element.model';

@Component({
  selector: 'lib-api-view',
  templateUrl: './api-view.component.html',
  styleUrls: ['./api-view.component.scss'],
})
export class ApiViewComponent implements OnInit {
  @Input() incElement: IncElement;

  constructor() { }

  ngOnInit() {

  }
}
