import { Component, OnInit } from '@angular/core';
import { ResolvedReflectiveProvider as RRP, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'


import {Nominations} from '../../services/nominations'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'zone.js';
//import 'reflect-metadata';
import 'rxjs/add/operator/combineLatest';
import { NominationsService } from '../../services/nominations.service';

@Component({
  selector: 'app-searchnominations',
  templateUrl: './searchnominations.component.html',
  styleUrls: ['./searchnominations.component.css']
})
export class SearchnominationsComponent implements OnInit {
  nominations: Nominations = new Nominations();
  successMsg= null;
    errorMsg= null;
    error = null;
   allEmployees: Nominations[];
   showLoader = false;
   statusCode: number;
  empForm = new FormGroup({
    
    nominationId: new FormControl('', Validators.nullValidator),
    nominationDescription: new FormControl('', Validators.nullValidator),
    nominationType: new FormControl('', Validators.nullValidator),
    nominationValue: new FormControl('', Validators.nullValidator),
    nominationEndDate: new FormControl('', Validators.nullValidator)
  });
  constructor(private nominationsservice: NominationsService, private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    console.log(" cancel" );
     this.router.navigate(['/home/nominations']);
    
  }
  nomineeIdSearch(articleId: string) {
  this.showLoader = true;
  this.statusCode = null;
  let nominationId = this.empForm.get('nominationId').value;	 
   
 
   console.log("nominationId" ,nominationId);
this.allEmployees=[];
this.statusCode=0;


    this.nominationsservice.searchNominee(nominationId)
    .subscribe(
      nominations => {this.nominations= nominations,
              
               this.showLoader = false;
     
               console.log(" nominations" ,this.nominations);        
           
         },
         errorCode => { 
           this.statusCode = errorCode;
           this.showLoader = false;
           
           console.log(" this.statusCode" ,this.statusCode); 
             }   );   
             
   
}



}
