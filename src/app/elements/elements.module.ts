
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ElementsComponent } from './elements.component';
import { TranslateModule, NavigationModule } from '@inclouded/ionic4-inclouded-lib';

const routes: Routes = [
  { path: '', redirectTo: 'element-select', pathMatch: 'full' },
  {
    path: '',
    component: ElementsComponent,
    children: [
      { path: 'element-select', loadChildren: './element-select/element-select.module#ElementSelectModule' },
      { path: 'element-view', loadChildren: './element-view/element-view.module#ElementViewModule' }
    ]
  },
  {
    path: '**',
    redirectTo: 'element-view'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NavigationModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  declarations: [ElementsComponent]
})
export class ElementsModule { }
