
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router'
import { Employee } from '../services/employee';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
@Injectable()
export class EmployeeService {

  createEmployeeUrl: string;
  searchEmployeeUrl: string;
  constructor(private router: Router, private http: Http) {
    this.createEmployeeUrl = environment.createEmployeeUrl;
    this.searchEmployeeUrl=environment.searchEmployeeUrl;

  }

createEmployee(employee: Employee): Observable<number> {
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });
      
       
      console.log("create employee", employee);
      return this.http.post(this.createEmployeeUrl, employee, options)
     // .pipe(map(success => success))
          .map(success => success.status)
         // .catch(this.handleError);
  }

  searchEmployeeId(employeeId: string): Observable<Employee> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let cpParams = new URLSearchParams();
   cpParams.set('employeeId', employeeId);
    let url =this.searchEmployeeUrl.concat("/".concat(employeeId));
    console.log("SearchEmployee url ", url);
    console.log("SearchEmployee ", cpParams);
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.get(url, options)
        .map(response => response.json() as Employee)
        .catch(this.handleError);
}

getAllEmployees(): Observable<Employee[]> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  let cpParams = new URLSearchParams();
  
  console.log("SearchEmployee ", cpParams);
  let options = new RequestOptions({ headers: cpHeaders,params: cpParams });
  return this.http.get(this.searchEmployeeUrl, options)
      .map(response => response.json() as Employee[])
      .catch(this.handleError);
}

  private handleError(error: any) {
    console.error('There is an error', error);
    return Promise.reject(error.status || error);
}
   

}
