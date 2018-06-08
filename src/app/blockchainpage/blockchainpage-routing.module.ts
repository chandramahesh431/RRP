import { NgModule, ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainpageComponent } from './blockchainpage/blockchainpage.component';


const articleRoutes: Routes = [
	
   
    {
        path: '',
      
      component: BlockchainpageComponent,
    }
];

@NgModule({
	imports: [RouterModule.forChild(articleRoutes)],
	exports: [RouterModule]
})
export class BlockChainPageRoutingModule { }
