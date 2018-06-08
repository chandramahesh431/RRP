import { NgModule, ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';




const articleRoutes: Routes = [
	
	{
		path: '',
		component: RegistrationComponent,

    },
    
	

];

@NgModule({
	imports: [RouterModule.forChild(articleRoutes)],
	exports: [RouterModule]
})
export class RegistrationRoutingModule { }
