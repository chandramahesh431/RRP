import { Component, OnInit } from '@angular/core';
import { ResolvedReflectiveProvider as RRP, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Programs } from  '..//services/program';
import { ProgramService } from '../services/program.service';
import {ProgramDuration} from '../services/programduration';
import {ProgramMonth} from '../services/programmonth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'zone.js';
import { ErrorStateMatcher } from '@angular/material';
import 'rxjs/add/operator/combineLatest';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css']
})
export class AddProgramComponent implements OnInit {
  programs:Programs=new Programs();
  statusCode: number;
  programdurations:ProgramDuration[];
  programmonths:ProgramMonth[];
  data:any={};
  constructor(private programService: ProgramService, private router: Router) {
    this.programdurations=this.programService.getProgramDuration();
    this.programmonths=this.programService.getProgramMonth();
   }

  ngOnInit() {}
    empForm = new FormGroup({
      programDescription: new FormControl('', Validators.nullValidator),
      programDuration: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required)
    });
      onEmpFormSubmit() {
        let duration = this.empForm.controls['programDuration'].value;
        console.log("duration",duration);
        let month = this.empForm.controls['month'].value;
        console.log("month",month);
  this.programs.month=month;
  this.programs.programDuration=duration;
        console.log("onEmpFormSubmit AddProgramComponent ", this.programs);
  
        console.log(this.programdurations);
        this.programService.createPrograms(this.programs)
   
          .subscribe(successCode => {
            this.statusCode = successCode;
            
            console.log("Add Program successCode ", successCode);
            // this.backToCreateArticle();
            if (successCode === 200 || successCode === 201) {
             
            }
            //  	
    
          },
            errorCode => {
              console.log("Add ProgramComponent errorCode ", errorCode);
    
              this.statusCode = errorCode;
              console.log("AddProgramComponent statusCode ", this.statusCode);
              //   this.errorHandle();
              //  this.backToCreateArticle();
            });
      }
    
      cancel() {
        console.log("cancel");
           
      }
}
