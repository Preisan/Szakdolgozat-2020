import { ChBaseComponent, AlertService, PrevRouteService, AuthService, ToastService } from '@inclouded/ionic4-inclouded-lib';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

const PW = { type: 'password', icon: 'eye' };
const TEXT = { type: 'text', icon: 'eye-off' };

@Component({
  selector: 'inc-ch-password',
  templateUrl: './ch-password.component.html',
  styleUrls: ['./ch-password.component.scss'],
})
export class ChPasswordComponent extends ChBaseComponent implements OnInit {
  inputs = [PW, PW, PW];

  constructor(
    prevRouteService: PrevRouteService, router: Router,
    storage: Storage,
    private authService: AuthService, private toastService: ToastService,
    private alertService: AlertService
  ) {
    super(prevRouteService, router, storage);
  }

  ngOnInit() {
    this.reset();
  }

  reset(): void {
    this.inputs = [PW, PW, PW];
    this.form = this.resetForm();
  }

  resetForm(): FormGroup {
    return new FormGroup({
      newPassword: new FormControl(''),
      reNewPassword: new FormControl('')
    });
  }

  reAuthenticate() {
    this.setMustRelogin();
    if (this.form.value.newPassword === this.form.value.reNewPassword) {
      this.authService.newPassword(this.form.value.reNewPassword).then(() => {
        this.toastService.presentToast('PASSWORD_CHANGE_SUCCESS');
        this.router.navigate(['personal-info']);
      }).catch(() => {
        this.alertService.presentError('UPDATE_UNSUCCESSFULL');
      });
    } else {
      this.toastService.presentToast('PASSWORD_MISSMATCH');
    }
  }

  togglePwVisibility(index: number) {
    this.inputs[index] = (this.inputs[index] === PW) ? TEXT : PW;
  }

  navigateTo(url: string, parameter?: any, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.router.navigateByUrl(url, { state: { parameter } });
  }
}
