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


import { AppComponent } from './app.component';
import {EmployeeComponent} from '../app/employee/employee.component'
import { AppMaterialModule } from './model/app.material.module';
import { BlockchainpageComponent } from './blockchainpage/blockchainpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProgramComponent } from './program/program.component';
import { CreateprogramComponent } from './createprogram/createprogram.component';
import { LoginService } from './services/login.service';
import { AddHRPersonelComponent } from './add-hrpersonel/add-hrpersonel.component';
import { AddProgramComponent } from './add-program/add-program.component';
import { ApproveProgramComponent } from './approve-program/approve-program.component';
import { UpdateProgramComponent } from './update-program/update-program.component';
export const appRoutes: Routes = [
   
    
  {
      path: 'blockchainpage', component:BlockchainpageComponent
   },
  
  {
      path: 'home',
    component:HomeComponent,children:
    [{
        path:'login',
        component:LoginComponent
    },
        {
        path:'registration',
        component:RegistrationComponent 
           },
           {
              path:'program',
              component:ProgramComponent,children:
              [
                  {
                      path   :'createprogram',
                      component:CreateprogramComponent
                  }
              ] 
                 },
          ]
    
  },
];


@NgModule({
  declarations: [
    AppComponent,
    
    BlockchainpageComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProgramComponent,
    CreateprogramComponent,
    AddHRPersonelComponent,
    AddProgramComponent,
    ApproveProgramComponent,
    UpdateProgramComponent
  ],
  imports: [ RouterModule.forRoot(appRoutes,{
    useHash:true}),
    BrowserModule,ReactiveFormsModule,CommonModule,AppMaterialModule,
    FormsModule,HttpClientModule,
    HttpModule,BrowserAnimationsModule
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent,]
})
export class AppModule {
  
 }

//platformBrowserDynamic().bootstrapModule(AppModule)
