import { NgModule, ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';




const articleRoutes: Routes = [
	
	{
		path: '',
		component: LoginComponent,

    },
    
	

];

@NgModule({
	imports: [RouterModule.forChild(articleRoutes)],
	exports: [RouterModule]
})
export class LoginRoutingModule { }
