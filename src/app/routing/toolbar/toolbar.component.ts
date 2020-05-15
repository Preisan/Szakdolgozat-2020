import { Component, OnInit, DoCheck, AfterViewInit} from '@angular/core';
import { NavLink, TranslatePipe } from '@inclouded/ionic4-inclouded-lib';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { AngularFireAuth } from '@angular/fire/auth';

export const TOOLBARLIST: NavLink[] = [
  {
    label: 'HOME',
    url: '/material',
    icon: 'analytics',
    disabled: false,
  }, {
    label: 'ELEMENTS',
    url: '/elements',
    // icon: '',
    disabled: false,
  }
];

@Component({
  selector: 'lib-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss']
})
export class ToolbarComponent implements DoCheck {
  toolbarlist: NavLink[] = TOOLBARLIST;
  firstTime = true;

  constructor(private afAuth: AngularFireAuth, private translatePipe: TranslatePipe,
              private router: Router, private popoverCtrl: PopoverController) { }


  ngDoCheck() {
    let user = '';
    if (this.afAuth.auth.currentUser) {
      user = this.afAuth.auth.currentUser.displayName ? this.afAuth.auth.currentUser.displayName : 'UNKNOWN_USER';
    } else {
      user = 'NOT_LOGGED_IN';
      if (this.firstTime) {
        setTimeout(() => {
          this.ngDoCheck();
          this.firstTime = false;
        }, 500);
      }
    }
    document.getElementById('user-label').innerText = this.translatePipe.transform(user) + ' ';
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  async openUserMenu(event: Event) {
    const userMenu = await this.popoverCtrl.create({
      component: UserMenuComponent,
      event
    });
    userMenu.present();
  }
}
