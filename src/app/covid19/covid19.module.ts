import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Covid19RoutingModule, components } from './covid19-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Covid19IndiaStateComponent } from './covid19-india-state/covid19-india-state.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [...components, Covid19IndiaStateComponent],
  imports: [
    CommonModule,
    SharedModule,
    Covid19RoutingModule,
    FormsModule,
    TooltipModule
  ],
})
export class Covid19Module { }
