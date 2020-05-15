import { ElementSelectComponent } from './element-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IncPageModule, TranslateModule, ModalsModule } from '@inclouded/ionic4-inclouded-lib';

const routes: Routes = [
  {
    path: '',
    component: ElementSelectComponent,
    data: { title: 'Alkótóelemek Lista' },
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IncPageModule,
    TranslateModule,
    ModalsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ElementSelectComponent ]
})
export class ElementSelectModule { }
