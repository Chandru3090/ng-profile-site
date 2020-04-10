import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid19-india',
  templateUrl: './covid19-india.component.html'
})
export class Covid19IndiaComponent implements OnInit {
  covi19IndiaData: any;
  search: any;
  today = new Date();
  isExpand = false;
  constructor(public service: Covid19Service, private router: Router) { }

  ngOnInit() {
    this.getCovid19IndiaStats();
  }

  getCovid19IndiaStats() {
    this.service.getCovid19India().subscribe(data => {
      if (data) {
        this.covi19IndiaData = this.format(data);
      }
    })
  }

  format(data) {
    return {
      total: data.total_values,
      states: this.arrayStates(data.state_wise)
    }
  }

  arrayStates(stateWise: any) {
    let states = [];
    Object.keys(stateWise).forEach(state => {
      states.push(stateWise[state]);
      if (stateWise[state].district) {
        let districts = [];
        Object.keys(stateWise[state].district).map(dist => {
          let district = stateWise[state].district[dist];
          district.name = dist;
          districts.push(district);
        })
        stateWise[state]['districts'] = districts;
      }
    });
    return states;
  }

  stringToNumber(value: string) {
    return +value.replace(/,/g, "");
  }

  navigateStateWise(data:any) {
    this.service.setCovid19StateData(data);
    this.router.navigate(['covid19/covid19-india-state']);
  }

}
