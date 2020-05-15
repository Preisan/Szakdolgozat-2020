import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { ContainerModule, TranslateModule } from '@inclouded/ionic4-inclouded-lib';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { HomeEditComponent } from './home-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicModule,
    ContainerModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeEditComponent
      }
    ])
  ],
  declarations: [HomeEditComponent],
  exports: [HomeEditComponent]
})
export class HomeEditModule {}
