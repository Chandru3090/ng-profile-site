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
  httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': '05843a9d53msha59473c2a31c30bp129d15jsn1d09a999333d'
    })
  };
  constructor(private http: HttpClient) { }

  getAllLocations() {
    return this.http.get(`${environment.caseByCountry}`, this.httpOptions);
  }

  getWorldTotalStats() {
    return this.http.get(`${environment.worldTotalStats}`, this.httpOptions);
  }

  setLocations(data) {
    this.allLocations = data;
  }

  getLocations() {
    return this.allLocations;
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
