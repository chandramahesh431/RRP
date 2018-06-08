import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppMaterialModule } from '../../model/app.material.module';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-blockchainpage',
  templateUrl: './blockchainpage.component.html',
  styleUrls: ['./blockchainpage.component.css']
})
export class BlockchainpageComponent implements OnInit {

  constructor(private http: Http,private router : Router) { }

  ngOnInit() {
    console.log("BlockchainpageComponent")
  }
  
}
