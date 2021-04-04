import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

 
  apikey : any;
  message : string;
  constructor(private Logservice : LogService ) {} 

  ngOnInit(): void {
  this.message = this.Logservice.sayHello("customers");
  this.apikey = this.Logservice.getApiKey();
  console.log(this.apikey);
  }

}
