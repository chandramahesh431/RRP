import { NgModule, ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';

import { SearchemployeeComponent } from './searchemployee/searchemployee.component';

const articleRoutes: Routes = [
	
	{
		path: '',
		component: EmployeeComponent,

    },
    {
		path: 'createemployee',
		component: CreateemployeeComponent,

	},
	{
		path: 'searchemployee',
		component: SearchemployeeComponent,

	}

];

@NgModule({
	imports: [RouterModule.forChild(articleRoutes)],
	exports: [RouterModule]
})
export class EmployeeRoutingModule { }
