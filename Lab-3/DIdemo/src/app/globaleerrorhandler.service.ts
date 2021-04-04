import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobaleerrorhandlerService implements ErrorHandler {

  constructor() { }
  handleError(error){
    console.log("I'll Handle The Error");

  }
  
}
