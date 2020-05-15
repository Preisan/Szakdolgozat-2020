import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private afAuth: AngularFireAuth) { }

  getUser() {
    if (this.afAuth.auth.currentUser) {
      return this.afAuth.auth.currentUser;
    }
  }

  updateCurrentUserName(name: string): Promise<void> {
    return this.afAuth.auth.currentUser.updateProfile({
      displayName: name
    });
  }
}
