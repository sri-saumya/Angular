import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { APIKEY } from '../child1/value';
import { LogService } from '../log.service';


@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers:[{provide:APIKEY,useValue:{apikey : '33333',modulename:"Customer"} 
}]
})
export class CustomersModule { }
