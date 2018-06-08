import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
//import {HomeRoutingModule} from './home-routing.module'

import { ReactiveFormsModule }    from '@angular/forms';

import { AppMaterialModule } from '../model/app.material.module';


@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,AppMaterialModule,
  ],
  declarations: [HomeComponent]
  ,
  providers: [ ]
})
export class HomeModule { }
