import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Request, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'zone.js';
import 'rxjs/add/operator/map';
import { ErrorStateMatcher } from '@angular/material';
import 'rxjs/add/operator/combineLatest';
import { Registration } from './registration';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 walleturl : any
 
 register: Registration = new Registration();
  constructor(private router: Router, private http: Http,private _loginservice:LoginService  ) {
    this.walleturl = environment.walletUrl;
    
    
    console.log(this.register.access_token)
   }

   queryMethod()
   {
this._loginservice.getAllProgramsCreated().subscribe(res=> {

  alert(res.json);


});



   }

  ngOnInit() {
  }
  fileChange(event) {
    this.register.access_token = LoginService.data;
    console.log("this.register.access_token",this.register.access_token);
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('card',file);
        formData.append("X-Access-Token",this.register.access_token);

        let headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        // headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        headers.append("X-Access-Token",this.register.access_token);
      
        let options = new RequestOptions({ headers: headers });
        this.http.post(`${this.walleturl}`, formData, {withCredentials: true, headers})
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
}

  onSubmit(): any{   
    
    let cpHeaders = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
    let options = new RequestOptions({ headers: cpHeaders });
       this.register.access_token = LoginService.data;
    cpHeaders.append("card","C:\\Users\\chandra.reddy\\Downloads\\pallavi-akhouri.card");
    cpHeaders.append("X-Access-Token",this.register.access_token)
    //console.log("File Path", this.register.file);
   // console.log("registration", this.register);
   debugger;
    return this.http.post(this.walleturl,{"card":"C:\\Users\\chandra.reddy\\Downloads\\pallavi-akhouri.card","X-Access-Token":this.register.access_token},options)
    .map((res:Response) => (       
           res.json()     
          
        )).subscribe(res=>{ res         
         
            return res;
           
          })
      
     

  }
}
