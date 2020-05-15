import { ChBaseModule, TranslateModule, IncPageModule } from '@inclouded/ionic4-inclouded-lib';
import { ChEmailComponent } from './ch-email.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChEmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    ChBaseModule,
    TranslateModule,
    IncPageModule,
  ],
  exports: [
    ChEmailComponent
  ]
})
export class ChEmailModule { }
