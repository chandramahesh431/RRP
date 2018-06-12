
import { ResolvedReflectiveProvider as RRP, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { Employee } from '..//services/employee'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'zone.js';
import { ErrorStateMatcher } from '@angular/material';
import 'rxjs/add/operator/combineLatest';
import { EmployeeService } from '../services/employee.service';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  employee: Employee = new Employee();
  statusCode: number;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }


  empForm = new FormGroup({
    employeeId: new FormControl('', Validators.nullValidator),
    employeeName: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]),
    department: new FormControl('', Validators.nullValidator),
    project: new FormControl('', Validators.required)

  });

  onEmpFormSubmit() {

    console.log("onEmpFormSubmit AddemployeeComponent ", this.employee);
    this.employeeService.createEmployee(this.employee)

      .subscribe(successCode => {
        this.statusCode = successCode;

        console.log("AddemployeeComponent successCode ", successCode);
        // this.backToCreateArticle();
        if (successCode === 200 || successCode === 201) {
          this.router.navigate(['/employee']);
        }
        //  	

      },
        errorCode => {
          console.log("AddemployeeComponent errorCode ", errorCode);

          this.statusCode = errorCode;
          console.log("AddemployeeComponent statusCode ", this.statusCode);
          //   this.errorHandle();
          //  this.backToCreateArticle();
        });
  }

  cancel() {
    console.log(" cancel" );
     this.router.navigate(['/home/employee']);
    
  }
}
