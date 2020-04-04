import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';

@Component({
  selector: 'app-covid19-india',
  templateUrl: './covid19-india.component.html'
})
export class Covid19IndiaComponent implements OnInit {
  indiaStateWiseData: any[];
  totalConfirmedCase: number;
  totalRecoveredCase: number;
  totalDeathCase: number;
  search: any;
  constructor(private service: Covid19Service) { }

  ngOnInit() {
    this.getCovid19IndiaStats();
  }

  getCovid19IndiaStats() {
    this.service.getCovid19IndiaStats().subscribe(data => {
      if (data) {
        this.indiaStateWiseData = data['response'].sort((a, b) => {
          if (Number(a['confirmed'].replace(/,/g, "")) > Number(b['confirmed'].replace(/,/g, ""))) return -1
          if (Number(a['confirmed'].replace(/,/g, "")) < Number(b['confirmed'].replace(/,/g, ""))) return 1
          return 0;
        });
        this.getTotalCasesCounts(data['response']);
      }
    })
  }

  getTotalCasesCounts(datas: any[]) {
    this.totalConfirmedCase = datas.reduce((acc, x) => {
      return (acc + (+(x.confirmed.replace(/,/g, ""))))
    }, 0);

    this.totalRecoveredCase = datas.reduce((acc, x) => {
      return (acc + (+(x.recovered.replace(/,/g, ""))))
    }, 0);

    this.totalDeathCase = datas.reduce((acc, x) => {
      return (acc + (+(x.deaths.replace(/,/g, ""))))
    }, 0);
  }

}
