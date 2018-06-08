import { NgModule, ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramComponent } from './program/program.component';
import { CreateprogramComponent } from './createprogram/createprogram.component';



const articleRoutes: Routes = [
	
	{
		path: '',
		component: ProgramComponent,

    },
    {
		path: 'createprogram',
		component: CreateprogramComponent,

	},
	
];

@NgModule({
	imports: [RouterModule.forChild(articleRoutes)],
	exports: [RouterModule]
})
export class ProgramRoutingModule { }
