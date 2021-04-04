import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { UpdatedlogService } from './updatedlog.service';
import { Child3Component } from './child3/child3.component';
import { GlobaleerrorhandlerService } from './globaleerrorhandler.service';
import { APIKEY } from './child1/value';

// var configvalue = 9;

// var getLogObject = () =>{
//   if(configvalue == 9){
//     return new LogService();
//   }
//   else{
//     return new UpdatedlogService();
//   }
//}

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  //useClass

  providers: [{provide:UpdatedlogService,useClass:UpdatedlogService},
              {provide:ErrorHandler,useClass:GlobaleerrorhandlerService},
              {provide:APIKEY,useValue:{apikey : '123456',modulename:'app'}}
               ],

  //useExisting useFactory useValue

  // providers:[{provide:LogService,useFactory:getLogObject}, 
  //           {provide:UpdatedlogService,useExisting:LogService},
  //           {provide:APIKEY,useValue:{apikey : '123456'}}
  //           ],

  bootstrap: [AppComponent]
})
export class AppModule { }
