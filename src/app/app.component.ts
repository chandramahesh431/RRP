
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private http: Http,private router : Router) {
    
    console.log("constructor")
   }

   ngOnInit():void{

    console.log("ngOnInit")
    //this.router.navigate(['/employee']);
    this.router.navigate(['/blockchainpage']);
   // this.router.navigate(['/home']);
    //this.router.navigate(['/nominations']);
   }
}
