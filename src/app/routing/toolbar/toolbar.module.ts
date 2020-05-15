import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ToolbarComponent } from './toolbar.component';
import { TranslateModule } from '@inclouded/ionic4-inclouded-lib';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule
  ],
  entryComponents: [UserMenuComponent],
  declarations: [ToolbarComponent, UserMenuComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
