import { Component, OnInit } from '@angular/core';
import { ResolvedReflectiveProvider as RRP, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { Nominations } from '../../services/nominations'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'zone.js';

import { ErrorStateMatcher } from '@angular/material';
import 'rxjs/add/operator/combineLatest';
import { NominationsService } from '../../services/nominations.service';



@Component({
  selector: 'app-createnominations',
  templateUrl: './createnominations.component.html',
  styleUrls: ['./createnominations.component.css']
})
export class CreatenominationsComponent implements OnInit {
  nominations: Nominations = new Nominations();
  statusCode: number;
  constructor(private nominationsService: NominationsService, private router: Router) { }

  ngOnInit() {
  }
  empForm = new FormGroup({
    nominationId: new FormControl('', Validators.nullValidator),
    nominationDescription: new FormControl('', Validators.required),
    nominationType: new FormControl('', Validators.required),
    nominationValue: new FormControl('', Validators.nullValidator),
    nominationEndDate: new FormControl('', Validators.required)

  });


  onEmpFormSubmit() {

    console.log("onEmpFormSubmit AddNominationsComponent ", this.nominations);
    this.nominationsService.createNominations(this.nominations)

      .subscribe(successCode => {
        this.statusCode = successCode;

        console.log("AddNominationsComponent successCode ", successCode);
        // this.backToCreateArticle();
        if (successCode === 200 || successCode === 201) {
          this.router.navigate(['/nominations']);
        }
        //  	

      },
        errorCode => {
          console.log("AddNominationsComponent errorCode ", errorCode);

          this.statusCode = errorCode;
          console.log("AddNominationsComponent statusCode ", this.statusCode);
          //   this.errorHandle();
          //  this.backToCreateArticle();
        });
  }

  cancel() {
    console.log(" cancel");
    this.router.navigate(['/home/nominations']);

  }


}
