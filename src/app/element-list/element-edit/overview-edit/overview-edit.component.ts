import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { IncElement, SaveData, Root_E, Subject } from 'src/app/shared/model/element.model';
import { ElementEdit, Direction_E } from '../element-edit.component';

@Component({
  selector: 'lib-overview-edit',
  templateUrl: 'overview-edit.component.html',
  styleUrls: ['overview-edit.component.scss'],
})
export class OverviewEditComponent implements OnInit, ElementEdit {
  @Input() incElement: IncElement;
  @Output() data = new EventEmitter<SaveData>();

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
      overview: new FormArray([], Validators.required)
    });
  }

  loadData() {
    if (this.incElement && this.incElement.overview && this.incElement.overview[0]) {
      this.incElement.overview.map(overview => {
        this.addSubject(Direction_E.down, overview);
      });
    } else {
      this.addSubject(Direction_E.down);
    }
  }

  addSubject(direction: Direction_E, overview?: Subject) {
    const formGroup = new FormGroup({
      title: new FormControl(Object(overview).hasOwnProperty('title') ? overview.title : null, Validators.required),
      text: new FormControl(Object(overview).hasOwnProperty('text') ? overview.text : null)
    });
    if (direction === Direction_E.up) {
      this.form.controls.overview.insert(0, formGroup);
    } else {
      this.form.controls.overview.push(formGroup);
    }
  }

  deleteSubject(i: number) {
    if (this.form.controls.overview.controls.length > 1) {
      this.form.controls.overview.removeAt(i);
    }
  }

  save() {
    if (this.form.valid) {
      this.incElement.overview = this.form.controls.overview.value;
      this.data.emit({ root: Root_E.incElements, path: this.incElement.name + '/overview', value: this.form.value.overview });
    }
  }
}
