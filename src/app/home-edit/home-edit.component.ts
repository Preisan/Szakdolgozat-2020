import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { IncElement, SaveData, Root_E, Subject } from 'src/app/shared/model/element.model';
import { Direction_E } from '../element-list/element-edit/element-edit.component';
import { ElementService } from '../shared/service/element.service';
import { ToastService, TranslatePipe } from '@inclouded/ionic4-inclouded-lib';

@Component({
  selector: 'lib-home-edit',
  templateUrl: 'home-edit.component.html',
  styleUrls: ['home-edit.component.scss'],
})
export class HomeEditComponent implements OnInit {
  @Input() home: Subject[] = [];
  @Output() data = new EventEmitter<SaveData>();

  firstTime = true;
  loading = true;

  form: FormGroup | any;

  constructor(private elementService: ElementService, private toastService: ToastService, private translatePipe: TranslatePipe) { }

  ngOnInit() {
    this.getHome();
    this.resetForm();
  }

  get direction_E() {
    return Direction_E;
  }

  getHome() {
    this.loading = true;
    this.elementService.get(Root_E.home).subscribe(result => {
      this.home = result.payload.val() ? Object.values<Subject>(result.payload.val()) : [];
      if (this.firstTime) {
        this.loadData();
        this.firstTime = false;
      }

      this.loading = false;
    });
  }

  set(event: SaveData) {
    this.elementService.set(event.root, event.path, event.value).then(() => {
      this.toastService.presentToast(this.translatePipe.transform('DATA_SAVED'));
    });
  }

  resetForm() {
    this.form = new FormGroup({
      home: new FormArray([], Validators.required)
    });
  }

  loadData() {
    if (this.home && this.home[0]) {
      this.home.map(home => {
        this.addSubject(Direction_E.down, home);
      });
    } else {
      this.addSubject(Direction_E.down);
    }
  }

  addSubject(direction: Direction_E, home?: Subject) {
    const formGroup = new FormGroup({
      title: new FormControl(Object(home).hasOwnProperty('title') ? home.title : null, Validators.required),
      text: new FormControl(Object(home).hasOwnProperty('text') ? home.text : null)
    });
    if (direction === Direction_E.up) {
      this.form.controls.home.insert(0, formGroup);
    } else {
      this.form.controls.home.push(formGroup);
    }
  }

  deleteSubject(i: number) {
    if (this.form.controls.home.controls.length > 1) {
      this.form.controls.home.removeAt(i);
    }
  }

  save() {
    if (this.form.valid) {
      this.home = this.form.value.home;
      this.set({ root: Root_E.home, path: '', value: this.form.value.home });
    }
  }
}
