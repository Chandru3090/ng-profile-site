import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Covid19Service } from '../covid19.service';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-viewby-country',
  templateUrl: './viewby-country.component.html'
})
export class ViewbyCountryComponent implements OnInit, OnDestroy {
  routerSubscriptions: Subscription;
  data: any;
  getCountryWiseInfo$ = combineLatest(this.service.getAllLocations(), this.route.paramMap);
  constructor(private router: Router, private route: ActivatedRoute, private service: Covid19Service) { }

  ngOnInit() {
    this.routerSubscriptions = this.getCountryWiseInfo$.subscribe(([datas, params]) => {
        this.data = datas['countries_stat'].filter(x => x.country_name == params.get('country'))[0];
        if (!params.get('country')) {
          this.router.navigate(['/covid19']);
        }
    })
  }

  ngOnDestroy() {
    this.routerSubscriptions.unsubscribe();
  }
}
