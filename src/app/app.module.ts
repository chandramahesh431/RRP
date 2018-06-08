import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './routes';
import { AppComponent } from './app.component';
import {EmployeeComponent} from '../app/employee/employee/employee.component'
import { AppMaterialModule } from './model/app.material.module';
import { BlockchainpageComponent } from './blockchainpage/blockchainpage/blockchainpage.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegistrationModule } from './registration/registration.module';
import { RegistrationComponent } from './registration/registration/registration.component';
import { ProgramComponent } from './program/program/program.component';
import { CreateprogramComponent } from './program/createprogram/createprogram.component';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    
    BlockchainpageComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProgramComponent,
    CreateprogramComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,CommonModule,AppMaterialModule,
    FormsModule,HttpClientModule,
    HttpModule,BrowserAnimationsModule,AppRoutingModule
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent,]
})
export class AppModule {
  
 }

//platformBrowserDynamic().bootstrapModule(AppModule)
