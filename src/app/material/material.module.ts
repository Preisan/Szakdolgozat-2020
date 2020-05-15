import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialComponent } from './material.component';
import { PatientAddModule, TranslateModule, ContainerModule } from '@inclouded/ionic4-inclouded-lib';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientAddModule,
    TranslateModule,
    ContainerModule,
    RouterModule.forChild([
      {
        path: '',
        component: MaterialComponent
      }
    ])
  ],
  declarations: [MaterialComponent]
})
export class MaterialModule {}
