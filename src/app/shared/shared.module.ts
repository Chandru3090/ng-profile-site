import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { RouterModule } from '@angular/router';

export const components = [
  HeaderProfileComponent, FooterComponent, HeaderDashboardComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[...components]
})
export class SharedModule { }
