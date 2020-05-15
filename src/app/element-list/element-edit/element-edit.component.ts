import { Component, OnInit, Input, OnDestroy, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { ElementService } from '../../shared/service/element.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IncElement, SaveData, Root_E } from 'src/app/shared/model/element.model';
import { MatTabGroup } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { ToastService, TranslatePipe } from '@inclouded/ionic4-inclouded-lib';

export enum TabIndex_E {
  overview, api, examples
}

export enum Direction_E {
  up, down
}

export interface ElementEdit {
  incElement: IncElement;
  data?: EventEmitter<SaveData>;
  noApi?: EventEmitter<TabIndex_E>;
  form: FormGroup;
  resetForm: () => void;
  loadData: () => void;
  save: () => void;
}

@Component({
  selector: 'lib-element-edit',
  templateUrl: './element-edit.component.html',
  styleUrls: ['./element-edit.component.scss'],
})
export class ElementEditComponent implements OnInit, OnDestroy {
  incElement: IncElement;
  loading = true;
  getElementRoute: Subscription;

  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  constructor(private elementService: ElementService, private activatedRoute: ActivatedRoute, private router: Router,
              private toastService: ToastService, private translatePipe: TranslatePipe) { }

  ngOnInit() {
    this.getElementFromRoute();
  }

  ngOnDestroy() {
    if (this.getElementRoute) {
      this.getElementRoute.unsubscribe();
    }
    localStorage.removeItem('parameter');
  }

  set(event: SaveData) {
    this.elementService.set(event.root, event.path, event.value).then(() => {
      this.toastService.presentToast(this.translatePipe.transform('DATA_SAVED'));
    });
  }


  changeTab(event: TabIndex_E) {
    this.tabGroup.selectedIndex = event;
  }

  getElementFromRoute() {
    this.loading = true;
    this.getElementRoute = this.activatedRoute.paramMap.subscribe(() => {
      const incElement: any = window.history.state.parameter;
      if (incElement) {
        localStorage.setItem('parameter', JSON.stringify(incElement));
      }
      this.incElement = JSON.parse(localStorage.getItem('parameter'));
      this.loading = false;
    });
  }

  navigateTo(url: string, parameter?: any, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(url, { state: { parameter } });
  }
}
