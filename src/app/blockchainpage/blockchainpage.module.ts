import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainpageComponent } from './blockchainpage/blockchainpage.component';
import { AppMaterialModule } from '../model/app.material.module';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';

import { BlockChainPageRoutingModule } from './blockchainpage-routing.module'


@NgModule({
  imports: [
    ReactiveFormsModule,CommonModule,AppMaterialModule,
    FormsModule,HttpClientModule,BlockChainPageRoutingModule,
    HttpModule,
  ],
  declarations: [BlockchainpageComponent]
})
export class BlockchainpageModule { }
