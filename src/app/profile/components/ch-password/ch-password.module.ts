import { ChBaseModule, TranslateModule, IncPageModule } from '@inclouded/ionic4-inclouded-lib';
import { RouterModule } from '@angular/router';
import { ChPasswordComponent } from './ch-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ChPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChBaseModule,
    IonicModule,
    TranslateModule,
    IncPageModule,
  ],
  exports: [
    ChPasswordComponent
  ]
})
export class ChPasswordModule { }
