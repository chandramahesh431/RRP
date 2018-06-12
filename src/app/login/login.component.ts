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
import {LoginService } from '../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  login: Login = new Login();
  statusCode: any;
  access_token:any;
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
    LoginService.data=null;
    
   
   this.loginService.login(this.login).subscribe(res=>
    {
    
    this.access_token= res.access_token;         
    if (res != null)
    {
      LoginService.data =  res.access_token;
      
    }
   
    })

  if(this.access_token)
  {
     this.router.navigate(['/home/registration']);

  }
  else
  {

    alert("check username/password");
  }

      
  }

  login1: Login = new Login();
AdminSubmit()
{
 
  LoginService.data=null;

  this.login1.username="administrator";
  this.login1.password="password";

  if(this.login1.username!=null && this.login1.password!=null)
  {
  this.loginService.login(this.login1).subscribe(res=>
    {
      
    this.access_token= res.access_token;         
    if (res != null)
    {
      LoginService.data =  res.access_token;
      this.router.navigate(['/home/registration']);
    }
   
    })
  
}

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


