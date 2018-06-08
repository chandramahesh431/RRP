// import { NgModule, ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component';


// const articleRoutes: Routes = [
	
// 	{
// 		path: 'home',
// 		component: HomeComponent,

//     },
//     {
// 		path: '',
//         component: HomeComponent,
//         children:[

//             {
//                 path: 'login',
//                loadChildren:'../login/login.module#LoginModule'
             
//             },
           
//             {
//                 path: 'employee',
//                loadChildren:'../employee/employee.module#EmployeeModule'
             
//             },
//             {
//             path: 'nominations',
//             loadChildren:'../nominations/nominations.module#NominationsModule'
           
//          },
//          {
//              path: 'program',
//             loadChildren:'../program/program.module#ProgramModule'
           
//          },
//         ]

//     },
//     /* {
//         path: 'employee',
//        loadChildren:'../employee/employee.module#EmployeeModule'
     
//     }, */
    
    

// ];

// @NgModule({
// 	imports: [RouterModule.forChild(articleRoutes)],
// 	exports: [RouterModule]
// })
// export class HomeRoutingModule { }
