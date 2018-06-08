import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NominationsComponent } from './nominations/nominations.component';
import { CreatenominationsComponent } from './createnominations/createnominations.component';
import { SearchnominationsComponent } from './searchnominations/searchnominations.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppMaterialModule } from '../model/app.material.module';
import { NominationsService} from '../services/nominations.service';


import { NominationsRoutingModule } from './nominations-routing.module';

@NgModule({
  imports: [
    CommonModule,NominationsRoutingModule,ReactiveFormsModule,AppMaterialModule,
  ],
  declarations: [NominationsComponent, CreatenominationsComponent, SearchnominationsComponent]
  ,
  providers: [ NominationsService]
})
export class NominationsModule { }
