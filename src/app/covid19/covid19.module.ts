import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Covid19RoutingModule, components } from './covid19-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedModule,
    Covid19RoutingModule,
    FormsModule
  ],
})
export class Covid19Module { }
