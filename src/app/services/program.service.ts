import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router'
import{ Programs } from '../services/program';

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import{ProgramDuration} from '../services/programduration';
import {ProgramMonth} from '../services/programmonth';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  createprogramUrl:string;
  constructor(private router: Router, private http: Http) {
    this.createprogramUrl = environment.createprogramUrl;

   }

getProgramDuration(){
  return[
    new ProgramDuration(1,"1"),
    new ProgramDuration(2,"2")

  ];
}


getProgramMonth(){
return[
 new ProgramMonth(1,"JANUARY"),
 new ProgramMonth(2,"FEBRUARY"),
 new ProgramMonth(3,"MARCH"),
 new ProgramMonth(4,"APRIL"),
 new ProgramMonth(5,"MAY"),
 new ProgramMonth(6,"JUNE"),
 new ProgramMonth(7,"JULY"),
 new ProgramMonth(8,"AUGUST"),
 new ProgramMonth(9,"SEPTEMBER"),
 new ProgramMonth(10,"OCTOBER"),
 new ProgramMonth(11,"NOVEMBER"),
 new ProgramMonth(12,"DECEMBER")
 
];

}



  createPrograms(programs:Programs): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });


    console.log("create Program ", programs);
    
    return this.http.post(this.createprogramUrl, programs, options)
      // .pipe(map(success => success))
      .map(success => success.status)
    // .catch(this.handleError);
  }

 




  private handleError(error: any) {
    console.error('There is an error', error);
    return Promise.reject(error.status || error);
  }

}
