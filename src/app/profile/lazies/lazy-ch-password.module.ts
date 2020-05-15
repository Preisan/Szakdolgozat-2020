import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChPasswordComponent } from '../components/ch-password/ch-password.component';
import { ChPasswordModule } from '../components/ch-password/ch-password.module';

const routes: Routes = [
    {
        path: '',
        component: ChPasswordComponent,
        data: { title: 'Jelszó módosítás - LIB' },
    }
];

@NgModule({
    imports: [
        CommonModule,
        ChPasswordModule,
        RouterModule.forChild(routes)
    ],
})
export class LazyCHPasswordModule { }
