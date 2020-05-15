import { Component, OnInit } from '@angular/core';
import { ElementService } from '../shared/service/element.service';
import { AssociativeArray, AlertService, ModalService, ToastService, TranslatePipe } from '@inclouded/ionic4-inclouded-lib';
import { Router } from '@angular/router';
import { ElementAddModalComponent } from './element-add/element-add.modal/element-add-modal.component';
import { IncElement, Root_E } from 'src/app/shared/model/element.model';

@Component({
  selector: 'lib-element-list',
  templateUrl: './element-list.html',
  styleUrls: ['./element-list.scss'],
})
export class ElementListComponent implements OnInit {
  incElements: IncElement[] = [];
  loading = true;

  modalComponents: AssociativeArray = {
    elementAdd: () => ElementAddModalComponent
  };

  constructor(private elementService: ElementService, private alertService: AlertService, private router: Router,
              private modalService: ModalService, private toastService: ToastService, private translatePipe: TranslatePipe) { }

  ngOnInit() {
    this.getIncElements();
  }

  getIncElements() {
    this.loading = true;
    this.elementService.get(Root_E.incElements).subscribe(result => {
      this.incElements = result.payload.val() ? Object.values(result.payload.val()) : [];
      this.loading = false;
    });
  }

  presentDelete(i: number) {
    this.alertService.presentDelete(this.incElements[i].name, 'OBJECT',
      () => this.elementService.remove(Root_E.incElements, this.incElements[i].name));
  }

  openModal(incElementName: string, i?: number) {
    const params = { incElement: this.incElements[i] };
    this.modalService.presentModal(this.modalComponents[incElementName](), params).then(modal => {
      modal.onDidDismiss().then(detail => {
        if (detail && detail.data) {
          if (this.incElements[i]) {
            this.elementService.updateBase(this.incElements[i], detail.data.value).then(() => {
              this.toastService.presentToast(this.translatePipe.transform('DATA_SAVED'));
            });
          } else {
            this.elementService.set(detail.data.root, detail.data.path, detail.data.value).then(() => {
              this.toastService.presentToast(this.translatePipe.transform('DATA_SAVED'));
            });
          }
        }
      });
    });
  }

  visibility(i: number) {
    this.elementService.set(Root_E.incElements, this.incElements[i].name + '/isVisible', !this.incElements[i].isVisible);
  }

  navigateTo(url: string, parameter: IncElement, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    localStorage.removeItem('parameter');
    this.router.navigateByUrl(url, { state: { parameter } });
  }
}
