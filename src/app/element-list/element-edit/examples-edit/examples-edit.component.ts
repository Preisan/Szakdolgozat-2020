import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IncElement, SaveData, IncComponent, Root_E } from 'src/app/shared/model/element.model';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TranslatePipe } from '@inclouded/ionic4-inclouded-lib';
import { TabIndex_E, ElementEdit } from '../element-edit.component';

@Component({
  selector: 'lib-examples-edit',
  templateUrl: 'examples-edit.component.html',
  styleUrls: ['examples-edit.component.scss'],
})
export class ExamplesEditComponent implements OnInit, ElementEdit {
  @Input() incElement: IncElement;
  @Output() data: EventEmitter<SaveData> = new EventEmitter();
  @Output() noApi: EventEmitter<TabIndex_E> = new EventEmitter();

  isElements = false;

  form: FormGroup | any;

  constructor(private alertController: AlertController, private translatePipe: TranslatePipe) { }

  ngOnInit() {
    this.resetForm();
    this.loadData();
  }

  resetForm() {
    this.form = new FormGroup({
      modules: new FormArray([])
    });
  }

  loadData() {
    if (this.incElement && this.incElement.modules && this.incElement.modules[0]) {
      this.incElement.modules.map((module, i) => {
        this.addModule();
        if (module.components && module.components[0]) {
          this.isElements = true;
          module.components.map(component => {
            this.addComponent(i, component);
          });
        }
        if (!this.isElements) {
          this.presentAlert();
        }
      });
    } else {
      this.addModule();
      this.addComponent(0);
    }
  }

  addModule() {
    this.form.controls.modules.push(new FormGroup({
      components: new FormArray([])
    }));
  }

  addComponent(i: number, incComponent?: IncComponent) {
    this.form.controls.modules.controls[i].controls.components.push(new FormGroup({
      example: new FormGroup({
        html: new FormControl(Object(incComponent).hasOwnProperty('example') && Object(incComponent.example).hasOwnProperty('html') ?
          incComponent.example.html : null),
        ts: new FormControl(Object(incComponent).hasOwnProperty('example') && Object(incComponent.example).hasOwnProperty('ts') ?
          incComponent.example.ts : null),
        css: new FormControl(Object(incComponent).hasOwnProperty('example') && Object(incComponent.example).hasOwnProperty('css') ?
          incComponent.example.css : null)
      })
    }));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Komponents Felvétele',
      message: 'A példakódokhoz előbb komponenst kell felvenni.',
      buttons: [{
        text: this.translatePipe.transform('OK'),
        handler: () => {
          this.noApi.emit(TabIndex_E.api);
        }
      }]
    });
    await alert.present();

    alert.onDidDismiss().then(() => this.noApi.emit(TabIndex_E.api));
  }

  save() {
    if (this.form.valid && this.incElement.modules && this.incElement.modules[0]) {
      this.incElement.modules.map((module, i) => {
        if (module.components && module.components[0]) {
          module.components.map((component, j) => {
            component.example = this.form.value.modules[i].components[j].example;
            this.data.emit({
              root: Root_E.incElements,
              path: this.incElement.name + '/modules/' + i + '/components/' + j + '/example',
              value: this.form.value.modules[i].components[j].example
            });
          });
        }
      });
    }
  }
}
