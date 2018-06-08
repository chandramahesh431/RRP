import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppMaterialModule } from '../model/app.material.module';


import { EmployeeService } from './services/employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import {  EmployeeRoutingModule } from './employee-routing.module';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';

@NgModule({
  imports: [
    CommonModule,EmployeeRoutingModule,ReactiveFormsModule,AppMaterialModule,
  ],
  declarations: [EmployeeComponent, CreateemployeeComponent,  SearchemployeeComponent]
  ,
  providers: [ EmployeeService ]
})
export class EmployeeModule { }
