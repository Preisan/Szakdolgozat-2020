
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NavigationModule, ContainerModule, TranslateModule } from '@inclouded/ionic4-inclouded-lib';
import { ElementViewComponent } from './element-view.component';
import { MatTabsModule, MatMenuModule } from '@angular/material';
import { OverviewViewComponent } from './overview-view/overview-view.component';
import { ApiViewComponent } from './api-view/api-view.component';
import { ExamplesViewComponent } from './examples-view/examples-view.component';

const routes: Routes = [
  {
    path: '',
    component: ElementViewComponent,
  },
];

@NgModule({
  exports: [ElementViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationModule,
    MatTabsModule,
    MatMenuModule,
    ContainerModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  declarations: [ElementViewComponent, OverviewViewComponent, ApiViewComponent, ExamplesViewComponent]
})
export class ElementViewModule { }
