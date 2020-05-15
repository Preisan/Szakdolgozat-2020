import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '@inclouded/ionic4-inclouded-lib';
import { AngularFireAuth } from '@angular/fire/auth';

export interface NavLink {
  id: string;
  label: string;
  url: string[];
  icon?: string;
  disabled?: boolean;
  hidden?: boolean;
  onClick?: any;
}

export function checkClick(nav: NavLink): () => any {
  if (nav && nav.onClick) {
    return nav.onClick;
  }
  return () => { };
}

@Component({
  selector: 'lib-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
  checkClick = checkClick;
  userLinks: NavLink[] = [
    {
      id: 'settings',
      label: 'SETTINGS',
      url: ['/settings'],
      icon: 'settings',
      disabled: false,
      onClick: () => {
        this.close();
      }
    },
    {
      id: 'profile',
      label: 'PROFILE',
      url: this.afAuth.auth.currentUser ? ['/profile'] : ['/login', '/profile'],
      icon: 'person',
      disabled: false,
      onClick: () => {
        this.close();
      }
    },
    {
      id: 'element-list',
      label: 'ELEMENT_LIST',
      url: this.afAuth.auth.currentUser ? ['/element-list'] : ['/login', '/element-list'],
      icon: 'code',
      disabled: false,
      onClick: () => {
        this.close();
      }
    },
    {
      id: 'home-edit',
      label: 'HOME',
      url: this.afAuth.auth.currentUser ? ['/home-edit'] : ['login', 'home-edit'],
      icon: 'analytics',
      disabled: false,
      onClick: () => {
        this.close();
      }
    },
    {
      id: 'login',
      label: 'LOGOUT',
      url: ['/material'],
      icon: 'log-out',
      disabled: false,
      onClick: () => {
        this.logout();
      }
    }
  ];

  constructor(public popoverCtrl: PopoverController, private authService: AuthService, private afAuth: AngularFireAuth) { }

  close() {
    this.popoverCtrl.dismiss();
  }

  logout() {
    this.close();
    this.authService.logout();
  }
}
