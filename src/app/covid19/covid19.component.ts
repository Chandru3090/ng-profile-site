import { Component, OnInit, OnDestroy } from '@angular/core';
import { Covid19Service } from './covid19.service';
import { Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html'
})
export class Covid19Component {
  search: string = '';
  getAllInfo$ = this.service.getWorldTotalStats();
  getCountryWiseInfo$ = this.service.getAllLocations();
  constructor(private service: Covid19Service) { }
}
