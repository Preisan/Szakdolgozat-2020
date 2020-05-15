import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChEmailComponent } from '../components/ch-email/ch-email.component';
import { ChEmailModule } from '../components/ch-email/ch-email.module';

const routes: Routes = [
    {
        path: '',
        component: ChEmailComponent,
        data: { title: 'Email módosítás - LIB' },
    }
];

@NgModule({
    imports: [
        CommonModule,
        ChEmailModule,
        RouterModule.forChild(routes)
    ],
})
export class LazyCHEmailModule { }
