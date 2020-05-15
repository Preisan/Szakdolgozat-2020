import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { IncModule, IncComponent, IncProperty, SaveData, IncElement, Root_E } from 'src/app/shared/model/element.model';
import { ElementEdit, Direction_E } from '../element-edit.component';

@Component({
  selector: 'lib-api-edit',
  templateUrl: 'api-edit.component.html',
  styleUrls: ['api-edit.component.scss'],
})
export class ApiEditComponent implements OnInit, ElementEdit {
  @Input() incElement: IncElement;
  @Output() data: EventEmitter<SaveData> = new EventEmitter();

  form: FormGroup | any;

  constructor() { }

  ngOnInit() {
    this.resetForm();
    this.loadData();
  }

  get direction_E() {
    return Direction_E;
  }

  resetForm() {
    this.form = new FormGroup({
      modules: new FormArray([])
    });
  }

  loadData() {
    if (this.incElement && this.incElement.modules && this.incElement.modules[0]) {
      this.incElement.modules.map((module, i) => {
        this.addModule(Direction_E.down, module);
        if (module.components && module.components[0]) {
          module.components.map((component, j) => {
            this.addComponent(Direction_E.down, i, component);
            if (component.properties && component.properties[0]) {
              component.properties.map(property => {
                this.addProperty(Direction_E.down, i, j, property);
              });
            }
          });
        }
      });
    } else {
      this.addModule(Direction_E.down);
      this.addComponent(Direction_E.down, 0);
      this.addProperty(Direction_E.down, 0, 0);
    }
  }

  addModule(direction: Direction_E, incModule?: IncModule) {
    const formGroup = new FormGroup({
      name: new FormControl(Object(incModule).hasOwnProperty('name') ? incModule.name : null, Validators.required),
      importFrom: new FormControl(Object(incModule).hasOwnProperty('importFrom') ? incModule.importFrom : null),
      components: new FormArray([])
    });
    if (direction === Direction_E.up) {
      this.form.controls.modules.insert(0, formGroup);
    } else {
      this.form.controls.modules.push(formGroup);
    }
  }

  deleteModule(i: number) {
    if (this.form.controls.modules.controls.length > 1) {
      this.form.controls.modules.removeAt(i);
    }
  }

  addComponent(direction: Direction_E, i: number, incComponent?: IncComponent) {
    const formGroup = new FormGroup({
      name: new FormControl(Object(incComponent).hasOwnProperty('name') ? incComponent.name : null, Validators.required),
      selector: new FormControl(Object(incComponent).hasOwnProperty('selector') ? incComponent.selector : null),
      example: new FormControl(Object(incComponent).hasOwnProperty('example') ? incComponent.example : null),
      properties: new FormArray([])
    });
    if (direction === Direction_E.up) {
      this.form.controls.modules.controls[i].controls.components.insert(0, formGroup);
    } else {
      this.form.controls.modules.controls[i].controls.components.push(formGroup);
    }
  }

  deleteComponent(i: number, j: number) {
    this.form.controls.modules.controls[i].controls.components.removeAt(j);
  }

  addProperty(direction: Direction_E, i: number, j: number, incProperty?: IncProperty) {
    const formGroup = new FormGroup({
      name: new FormControl(Object(incProperty).hasOwnProperty('name') ? incProperty.name : null, Validators.required),
      description: new FormControl(Object(incProperty).hasOwnProperty('description') ? incProperty.description : null)
    });
    if (direction === Direction_E.up) {
      this.form.controls.modules.controls[i].controls.components.controls[j].controls.properties.insert(0, formGroup);
    } else {
      this.form.controls.modules.controls[i].controls.components.controls[j].controls.properties.push(formGroup);
    }
  }

  deleteProperty(i: number, j: number, k: number) {
    this.form.controls.modules.controls[i].controls.components.controls[j].controls.properties.removeAt(k);
  }

  save() {
    if (this.form.valid && this.incElement) {
      this.incElement.modules = this.form.value.modules;
      this.data.emit({ root: Root_E.incElements, path: this.incElement.name + '/modules', value: this.form.value.modules });
    }
  }
}
