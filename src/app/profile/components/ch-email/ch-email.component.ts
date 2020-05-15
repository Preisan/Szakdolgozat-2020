import { ChBaseComponent, AuthService, AlertService, ToastService, PrevRouteService } from '@inclouded/ionic4-inclouded-lib';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'inc-ch-email',
  templateUrl: './ch-email.component.html',
  styleUrls: ['./ch-email.component.scss'],
})
export class ChEmailComponent extends ChBaseComponent implements OnInit {

  constructor(
    prevRouteService: PrevRouteService,
    private authService: AuthService,
    private alertService: AlertService,
    router: Router,
    private toastService: ToastService,
    storage: Storage
  ) {
    super(prevRouteService, router, storage);
  }

  ngOnInit() {
    this.reset();
  }

  reset(): void {
    this.form = this.resetForm();
    this.getPractitionerEmail();
  }

  resetForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('')
    });
  }

  emailAlert() {
    this.alertService.presentChangeEmail(this.form.value.email, () => { this.save(); });
  }

  save() {
    this.setMustRelogin();
    if (this.form.valid) {
      this.authService.newEmail(this.form.value.email).then(() => {
        this.toastService.presentToast('EMAIL_CHANGE_SUCCESS');
        this.router.navigateByUrl('/personal-info');
      }).catch(() => {
        this.alertService.presentError('UPDATE_UNSUCCESSFULL');
      });
    }
  }

  getPractitionerEmail() {
    this.storage.get('user').then((user) => {
      if (user) {
        this.form.controls.email.setValue(user.email);
      }
    });
  }

  navigateTo(url: string, parameter?: any, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(url, { state: { parameter } });
  }
}
