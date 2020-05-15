import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from './service/profile.service';
import { User } from 'firebase';
import { ModalService, AssociativeArray, TranslatePipe, ToastService } from '@inclouded/ionic4-inclouded-lib';
import { NameModalComponent } from './name/name-modal/name-modal.component';

@Component({
  selector: 'lib-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() role: string;
  user: User;

  modalComponents: AssociativeArray = {
    name: () => NameModalComponent
  };

  constructor(private profileService: ProfileService, private modalService: ModalService,
              private translatePipe: TranslatePipe, private toastService: ToastService) { }

  ngOnInit() {
    this.user = this.profileService.getUser();
  }

  openModal(incElementName: string, i?: number) {
    const params = { user: this.user };
    this.modalService.presentModal(this.modalComponents[incElementName](), params).then(modal => {
      modal.onDidDismiss().then(detail => {
        if (detail && detail.data) {
          if (this.user) {
            this.profileService.updateCurrentUserName(detail.data.name).then(() => {
              this.toastService.presentToast(this.translatePipe.transform('DATA_SAVED'));
            });
          }
        }
      });
    });
  }

}
