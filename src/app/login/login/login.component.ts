import { Component, OnInit } from '@angular/core';
import { ResolvedReflectiveProvider as RRP, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { Login } from '../login/login'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'zone.js';
import 'rxjs/add/operator/map';
import { ErrorStateMatcher } from '@angular/material';
import 'rxjs/add/operator/combineLatest';
import {LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  login: Login = new Login();
  statusCode: any;
  data: any ;
  constructor(private loginService: LoginService, private router: Router) {


   }

   ngOnInit() {
  }
  empForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    

  });

  onEmpFormSubmit() {
    
    
    console.log("onEmpFormSubmit AddNominationsComponent ", this.login);
   this.loginService.login(this.login)
   console.log(LoginService.data)
    // .subscribe(successCode => {
    //   this.statusCode = successCode;
       
    //     console.log("AddNominationsComponent successCode ", successCode);
        // this.backToCreateArticle();
        // console.log("test ",successCode)
        //this.data = LoginService.data
        
      //  LoginService.access_token = this.login.username 
        // if (successCode === 200 || successCode === 201) {
        //  LoginService.access_token = this.login.access_token 
        //  console.log("Token"+ this.login.username ) //"QV1YDzdrKrvGBtYEyT7hXWNzj7gHnkNYxSYSx5E5S8Ne0CzPe28XZUesp0yX2ZBD";
           this.router.navigate(['/home/registration']);
          
        // }
        	

      // },
        // errorCode => {
        //   console.log("AddNominationsComponent errorCode ", errorCode);

        //   this.statusCode = errorCode;
        //   console.log("AddNominationsComponent statusCode ", this.statusCode);
          
        //   //   this.errorHandle();
        //   //  this.backToCreateArticle();
        // });
  }

  cancel() {
    console.log(" cancel");
    this.router.navigate(['/home/login']);

  }


//   goToNext() {


//     this.router.navigate(['/blockchainpage']);

// }

}

 

//   login(event, username, password) {
//     event.preventDefault();
//     const headers: Headers = new Headers();
// headers.append('Content-Type', 'application/json');
//     let body = JSON.stringify({ username, password });
//     this.http.post('http://192.168.200.73:3001/auth/ldap', body,)
//       .subscribe(
//         response => {
//           localStorage.setItem('id_token', response.json().id_token);
//         },
//         error => {
//           alert(error.text());
//           console.log(error.text());
//         }
//       );
//   }

//   signup(event) {
//     event.preventDefault();
//     this.router.navigate(['signup']);


