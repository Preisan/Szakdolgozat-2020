import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslatePipe } from '@inclouded/ionic4-inclouded-lib';
import { IncElement, Root_E, SaveData } from 'src/app/shared/model/element.model';
import { ElementEdit } from '../../element-edit/element-edit.component';

@Component({
  selector: 'lib-element-add-modal',
  templateUrl: './element-add-modal.component.html',
  styleUrls: ['./element-add-modal.component.scss'],
})
export class ElementAddModalComponent implements OnInit, ElementEdit {
  @Input() incElement: IncElement;
  title = this.translatePipe.transform('ELEMENT') + ' ' + (this.translatePipe.transform('ADD')).toLowerCase();
  form: FormGroup;

  constructor(private modalController: ModalController, private translatePipe: TranslatePipe) { }

  ngOnInit() {
    this.resetForm();

    if (this.incElement) {
      this.title = this.translatePipe.transform('ELEMENT') + ' ' + (this.translatePipe.transform('EDIT')).toLowerCase();

      this.loadData();
    }
  }

  resetForm() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(),
      isVisible: new FormControl(true)
    });
  }

  loadData() {
    this.form.setValue({name: this.incElement.name, isVisible: this.incElement.isVisible, description: this.incElement.description});
  }

  save() {
    this.modalController.dismiss({
      root: Root_E.incElements,
      path: this.form.value.name,
      value: this.form.value
    });
  }

  close() {
    this.modalController.dismiss();
  }

}
