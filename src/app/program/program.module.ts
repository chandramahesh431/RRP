import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './program/program.component';
import { CreateprogramComponent } from './createprogram/createprogram.component';
import { ProgramService } from './services/program.service';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppMaterialModule } from '../model/app.material.module';


import {  ProgramRoutingModule } from './program-routing.module';


@NgModule({
  imports: [
    CommonModule,ProgramRoutingModule,ReactiveFormsModule,AppMaterialModule,
  ],
  declarations: [ProgramComponent, CreateprogramComponent]
  ,
  providers: [ ProgramService ]
})
export class ProgramModule { }
