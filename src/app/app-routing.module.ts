import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  { path: 'covid19', loadChildren: () => import('./covid19/covid19.module').then(m => m.Covid19Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
