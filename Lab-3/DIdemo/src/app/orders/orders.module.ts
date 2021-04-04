import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { APIKEY } from '../child1/value';
import { LogService } from '../log.service';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[{provide:APIKEY,useValue:{apikey : '444444',modulename:"Order"} 
  }]
})
export class OrdersModule { }
