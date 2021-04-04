import { Inject, Injectable } from '@angular/core';
import { APIKEY } from './child1/value';

@Injectable({
  providedIn: 'any'
})
export class LogService {

  private static count = 0;
  
  // constructor() {
  //   LogService.count = LogService.count + 1;
  //   console.log("object log service  "+LogService.count);
  //  }

  constructor(@Inject (APIKEY) private apikey){
    LogService.count = LogService.count + 1;
    console.log("object log service  "+LogService.count);
    
  }

   sayHello(name : string){
     return "Hello" + name;
   }

   getApiKey(){
     return this.apikey;
   }
}
