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
  getCountryWiseInfo$;
  constructor(private router: Router, private route: ActivatedRoute, private service: Covid19Service) { }

  ngOnInit() {
    this.routerSubscriptions = this.route.paramMap.subscribe(params => {
      this.service.getCaseByCountryWise(params.get('country')).subscribe(data => {
        if (data) {
          this.data = data['latest_stat_by_country'][0];
          console.log(data)
        }
      });
      if (!params.get('country')) {
        this.router.navigate(['/covid19']);
      }
    })
  }

  ngOnDestroy() {
    this.routerSubscriptions.unsubscribe();
  }
}
