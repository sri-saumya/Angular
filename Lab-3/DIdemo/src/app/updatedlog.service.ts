import { Injectable } from '@angular/core';

@Injectable({providedIn : 'root'})
export class UpdatedlogService {

  private static count = 0;
  constructor() {
    UpdatedlogService.count = UpdatedlogService.count + 1;
    console.log("object updatelog service  "+ UpdatedlogService.count);
   }
   sayHello(name : string){
     return "Hello Updated" + name;
   }
}
