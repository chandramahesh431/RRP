import { Routes, RouterModule } from '@angular/router'

import { NgModule, Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee/employee.component';
import {NominationsComponent} from './nominations/nominations/nominations.component';
import {BlockchainpageComponent} from'./blockchainpage/blockchainpage/blockchainpage.component';
import { HomeComponent } from './home/home/home.component';
import{RegistrationComponent} from './registration/registration/registration.component'
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './login/login/login.component';
import { ProgramComponent } from './program/program/program.component';
import { CreateprogramComponent } from './program/createprogram/createprogram.component';


export const appRoutes: Routes = [
   
    
    {
        path: 'blockchainpage',
      component:BlockchainpageComponent
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
    imports: [
        RouterModule.forRoot(appRoutes,{
			useHash:true
}	
		)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }