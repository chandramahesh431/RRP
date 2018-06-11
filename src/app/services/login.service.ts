
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router'
import { Login } from '../login/login/login';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ldapUrl:string;
  queryURL:string;
  access_token:string;
  static data: any ;
  
  constructor(private router: Router, private http: Http) { 
    this.ldapUrl = environment.ldapUrl;
    this.queryURL=environment.queryUrl;
    
  }

    login(login:Login): any {

      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });
      debugger;
      
      console.log("login", login);
      return this.http.post(this.ldapUrl, login, options).map((res:Response) =>res.json()).catch(this._errorHandler);                
  
    }
    getAllProgramsCreated():any
    {
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });
      debugger;
      return this.http.get(this.queryURL, LoginService.data).map((res:Response) =>res.json()).catch(this._errorHandler);   
    }

    private _errorHandler(error:Response){
     
      console.log(error);
      return Observable.throw(error || "Internal server error");
    }
    private handleError(error: any) {
      console.error('There is an error', error);
      return Promise.reject(error.status || error);
}
}