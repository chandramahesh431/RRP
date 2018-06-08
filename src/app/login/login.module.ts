import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import {LoginRoutingModule} from './login-routing-module';

import { ReactiveFormsModule }    from '@angular/forms';
import { AppMaterialModule } from '../model/app.material.module';
import { LoginService } from '../services/login.service';



@NgModule({
  imports: [
    CommonModule,LoginRoutingModule,ReactiveFormsModule,AppMaterialModule
  ],
  declarations: [LoginComponent,],
  providers: [ LoginService]
})
export class LoginModule { }
