import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Covid19Component } from './covid19.component';
import { ViewbyCountryComponent } from './viewby-country/viewby-country.component';
import { SearchFilterPipe } from './search.pipe';
import { Covid19IndiaComponent } from './covid19-india/covid19-india.component';
import { Covid19IndiaStateComponent } from './covid19-india-state/covid19-india-state.component'

const routes: Routes = [
  { path: '', component: Covid19Component },
  { path: 'covid19-india', component: Covid19IndiaComponent },
  { path: 'covid19-india-state', component: Covid19IndiaStateComponent },
  { path: 'country/:country', component: ViewbyCountryComponent }];
export const components = [Covid19Component, ViewbyCountryComponent, SearchFilterPipe, Covid19IndiaComponent];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Covid19RoutingModule { }
