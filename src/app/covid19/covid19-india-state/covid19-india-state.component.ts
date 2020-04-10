import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-covid19-india-state',
  templateUrl: './covid19-india-state.component.html'
})
export class Covid19IndiaStateComponent implements OnInit {
  data: any;
  title: any;
  constructor(private router: Router, private service: Covid19Service) { }

  ngOnInit() {
    this.data = this.service.getCovid19StateData();
    if (!this.data) {
      this.router.navigate(['covid19/covid19-india']);
    } else {
      this.title = `COVID 19 ${this.data.state}`;
    }    
  }

  stringToNumber(value: string) {
    return +value.replace(/,/g, "");
  }
}
