import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './routing/toolbar/toolbar.component';
import { LoginPage, AuthGuard } from '@inclouded/ionic4-inclouded-lib';

const routes: Routes = [
  { path: '', redirectTo: 'material', pathMatch: 'full' },
  { path: '', component: ToolbarComponent, children: [
      { path: 'material', loadChildren: './material/material.module#MaterialModule' },
      { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
      { path: 'login', component: LoginPage, data: { title: 'Bejelentkezés - Inc Lib Material' } },
      { path: 'login/:routeTo', component: LoginPage, data: { title: 'Bejelentkezés - Inc Lib Material' } },
      { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
      {
        path: 'element-list', loadChildren: './element-list/element-list.module#ElementListModule',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'home-edit', loadChildren: './home-edit/home-edit.module#HomeEditModule',
        canActivateChild: [AuthGuard]
      }, {
        path: 'element-edit', loadChildren: './element-list/element-edit/element-edit.module#ElementEditModule',
        canActivateChild: [AuthGuard]
      }, {
        path: 'profile', loadChildren: './profile/profile.module#ProfileModule',
        canActivateChild: [AuthGuard]
      },
      { path: 'ch-email', loadChildren: './profile/lazies/lazy-ch-email.module#LazyCHEmailModule', canActivateChild: [AuthGuard] },
      { path: 'ch-password', loadChildren: './profile/lazies/lazy-ch-password.module#LazyCHPasswordModule', canActivateChild: [AuthGuard] },
    ]
  },
  // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: '**',
    redirectTo: 'material'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
