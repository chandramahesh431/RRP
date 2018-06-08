
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
  access_token:string;
  static data: any ;
  
  constructor(private router: Router, private http: Http) { 
    this.ldapUrl = environment.ldapUrl;
    
  }

    login(login:Login): any {

      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });
      
      
      console.log("login", login);
      return this.http.post(this.ldapUrl, login, options)
     // .pipe(map(success => success))
          // .map(success => success.status)         
          .map((res:Response) => (       
             res.json()   
            
          ))        
        .subscribe(res=>{this.access_token= res         
        if (res != null)
        {
          LoginService.data =  res.access_token
        }
          return res.access_token
        })
                      
         // .catch(this.handleError);
       
  
    }
    
    private handleError(error: any) {
      console.error('There is an error', error);
      return Promise.reject(error.status || error);
}
}