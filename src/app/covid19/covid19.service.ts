import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Covid19Service {
  allLocations: any;
  covid19StateData: any;
  httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': '05843a9d53msha59473c2a31c30bp129d15jsn1d09a999333d'
    })
  };
  constructor(private http: HttpClient) { }

  getAllLocations() {
    return this.http.get(`${environment.caseByAllCountry}`, this.httpOptions);
  }

  getWorldTotalStats() {
    return this.http.get(`${environment.worldTotalStats}`, this.httpOptions);
  }

  getCaseByCountryWise(country: string) {
    return this.http.get(`${environment.caseByCountryWise}?country=${country}`, this.httpOptions);
  }

  getCovid19India() {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
        'x-rapidapi-key': '05843a9d53msha59473c2a31c30bp129d15jsn1d09a999333d'
      })
    };
    return this.http.get(`${environment.covid19India}`, httpOptions);
  }

  getCovid19StateData() {
    return this.covid19StateData;
  }

  setCovid19StateData(data: any) {
    this.covid19StateData = data;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error instanceof HttpErrorResponse) {
        console.error('service is disrupted. ${error.status}', error)
        if (error.status === 504) {
          console.log(`${error.status}: ${error.statusText}`)

        } else if (error.status === 500) {
          console.log(`${error.status}: ${error.statusText}`)

        }
        return throwError(error)
      } else {
        console.error('instances.service', error) // log to console instead
        // TODO: better job of transforming error for user consumption
        console.log(operation, error.error.message || error.error || error.message || error)
      }
      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
}
