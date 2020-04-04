import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html'
})
export class HeaderDashboardComponent {
  @Input() title:any = 'COVID-19';
 }
