import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from 'firebase';

@Component({
  selector: 'lib-name-modal',
  templateUrl: './name-modal.component.html',
  styleUrls: ['./name-modal.component.scss'],
})
export class NameModalComponent implements OnInit {
  title = 'NAME_EDIT';
  form: FormGroup;
  user: User;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.form = new FormGroup({
      name: new FormControl(this.user && this.user.displayName ? this.user.displayName : '', Validators.required),
    });
  }

  save() {
    this.modalController.dismiss(this.form.value);
  }

  close() {
    this.modalController.dismiss();
  }

}
