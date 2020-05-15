import { FireUserModule, TranslateModule, ContainerModule, ModalsModule } from '@inclouded/ionic4-inclouded-lib';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NameModalComponent } from './name/name-modal/name-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, NameModalComponent],
  imports: [
    CommonModule, TranslateModule, IonicModule, FireUserModule, ContainerModule, FormsModule, ReactiveFormsModule, ModalsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent
      }
    ])
  ],
  entryComponents: [NameModalComponent],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
