import { Component, Inject, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { UpdatedlogService } from '../updatedlog.service';
import { APIKEY } from './value';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
 // providers : [{provide:LogService,useClass : LogService}]
 // providers : [{provide:LogService,useClass : UpdatedlogService}]
})
export class Child1Component implements OnInit {

  apikey : any;
  message : string;
  constructor(private Logservice : LogService ) {} 

  ngOnInit(): void {
  this.message = this.Logservice.sayHello("Child 1");
  this.apikey = this.Logservice.getApiKey();
  console.log(this.apikey);
  }

}
