import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';





import { ReactiveFormsModule }    from '@angular/forms';
import { AppMaterialModule } from '../model/app.material.module';

import{RegistrationRoutingModule} from '../registration/registration-routing-module';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,AppMaterialModule,RegistrationRoutingModule
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }
