import { NgModule, ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NominationsComponent } from './nominations/nominations.component';
import { CreatenominationsComponent } from './createnominations/createnominations.component';

import { SearchnominationsComponent } from './searchnominations/searchnominations.component';

const articleRoutes: Routes = [
	
	{
		path: '',
		component: NominationsComponent,

    },
    {
		path: 'createnominations',
		component: CreatenominationsComponent,

	},
	{
		path: 'searchnominations',
		component: SearchnominationsComponent,

	}

];

@NgModule({
	imports: [RouterModule.forChild(articleRoutes)],
	exports: [RouterModule]
})
export class NominationsRoutingModule { }
