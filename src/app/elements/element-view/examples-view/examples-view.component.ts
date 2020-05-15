import { Component, OnInit, Input } from '@angular/core';
import { IncElement } from 'src/app/shared/model/element.model';

@Component({
  selector: 'lib-examples-view',
  templateUrl: './examples-view.component.html',
  styleUrls: ['./examples-view.component.scss'],
})
export class ExamplesViewComponent implements OnInit {
  @Input() incElement: IncElement;
  isOpen: boolean[][] = [[true]];

  constructor() { }

  ngOnInit() {

  }

  openCard(i: number, j: number) {
    if (!this.isOpen[i] || !this.isOpen[i][j]) {
      this.isOpen.push([]);
    }
    this.isOpen[i][j] = !this.isOpen[i][j];
  }
}
