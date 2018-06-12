import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router'
import { Nominations } from '../services/nominations';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NominationsService {
  createNominationsUrl: string;
  searchNominationsUrl: string;
  constructor(private router: Router, private http: Http) {
    this.createNominationsUrl = environment.createNominationsUrl;
    this.searchNominationsUrl = environment.searchNominationsUrl;
  }

  createNominations(nominations: Nominations): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });


    console.log("create Nominations", nominations);
    return this.http.post(this.createNominationsUrl, nominations, options)
      // .pipe(map(success => success))
      .map(success => success.status)
    // .catch(this.handleError);
  }

  searchNominee(nominationId: string): Observable<Nominations> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let cpParams = new URLSearchParams();
    cpParams.set('nominationId', nominationId);
    let url =this.searchNominationsUrl.concat("/".concat(nominationId));
    console.log("searchNominationsUrl ", url);
    console.log("SearchNominee ", cpParams);
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.get(url, options)
        .map(response => response.json() as Nominations)
        .catch(this.handleError);
    
  }



  private handleError(error: any) {
    console.error('There is an error', error);
    return Promise.reject(error.status || error);
  }

}