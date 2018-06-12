import { Component, OnInit } from '@angular/core';
import { ResolvedReflectiveProvider as RRP, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'


import { Employee} from '..//services/employee'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'zone.js';
//import 'reflect-metadata';
import 'rxjs/add/operator/combineLatest';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {
  employee: Employee = new Employee();
  successMsg= null;
    errorMsg= null;
    error = null;
   allEmployees: Employee[];
   showLoader = false;
   statusCode: number;
  empForm = new FormGroup({
    
   employeeId: new FormControl('', Validators.nullValidator),
   employeeName: new FormControl('', Validators.nullValidator),
   emailId: new FormControl('', Validators.nullValidator),
   department: new FormControl('', Validators.nullValidator),
   project: new FormControl('', Validators.nullValidator)
  });
    
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    console.log(" cancel" );
     this.router.navigate(['/home/employee']);
    
  }
  employeeIdSearch(articleId: string) {
  this.showLoader = true;
  this.statusCode = null;
  let employeeId = this.empForm.get('employeeId').value;	 
   
 
   console.log("employeeId" ,employeeId);
this.allEmployees=[];
this.statusCode=0;


    this.employeeService.searchEmployeeId(employeeId)
    .subscribe(
      employee => {this.employee= employee,
              
               this.showLoader = false;
     
               console.log(" employee" ,this.employee);        
           
         },
         errorCode => { 
           this.statusCode = errorCode;
           this.showLoader = false;
           
           console.log(" this.statusCode" ,this.statusCode); 
             }   );   
             
   
}
}
