import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Covid19Component } from './covid19.component';
import { ViewbyCountryComponent } from './viewby-country/viewby-country.component';
import { SearchFilterPipe } from './search.pipe';

const routes: Routes = [{ path: '', component: Covid19Component }, { path: ':country', component: ViewbyCountryComponent }];
export const components = [Covid19Component, ViewbyCountryComponent, SearchFilterPipe];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Covid19RoutingModule { }
