import { ElementListComponent } from './element-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IncPageModule, TranslateModule, ModalsModule } from '@inclouded/ionic4-inclouded-lib';
import { ElementAddModalComponent } from './element-add/element-add.modal/element-add-modal.component';
import { MatMenuModule, MatButtonModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: ElementListComponent,
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
    MatMenuModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ElementAddModalComponent],
  declarations: [ElementListComponent, ElementAddModalComponent]
})
export class ElementListModule { }
