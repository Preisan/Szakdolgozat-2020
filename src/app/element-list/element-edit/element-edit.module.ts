import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PatientAddModule, ContainerModule, TranslateModule } from '@inclouded/ionic4-inclouded-lib';

import { ElementEditComponent } from './element-edit.component';
import { OverviewEditComponent } from './overview-edit/overview-edit.component';
import { ApiEditComponent } from './api-edit/api-edit.component';
import { ExamplesEditComponent } from './examples-edit/examples-edit.component';
import { MatTabsModule, MatMenuModule, MatButtonModule } from '@angular/material';

const routes: Routes = [{
  path: '',
  component: ElementEditComponent,
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PatientAddModule,
    ContainerModule,
    TranslateModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ElementEditComponent, OverviewEditComponent, ApiEditComponent, ExamplesEditComponent]
})
export class ElementEditModule { }
